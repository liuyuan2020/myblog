---
title: 关于使用ant design 的可编辑表格的经验分享
date: 2019-08-23 09:13:57
tags:
---

## 需求描述

表格的第一列可编辑，有三种可编辑状态，输入框，下拉选框，树形选择框。
并且可以通过点击按钮来获得表格中每一行的当前值。

## 实现

用到了getInput()这个方法，根据此方法接受的参数来确定渲染哪一种编辑框。

## 源码

**page页面**

```js
import React, { PureComponent } from 'react';
import { Table, Button, Popconfirm } from 'antd';
import EditableCell from '@/components/EditableCell';

/**
 * 创建可编辑表格的行
 * @param form 包含表格的各种方法
 * @param index 当前行的下标
 * @param props 表头的一些值
 * @returns {*}
 * @constructor
 */

class EditableTable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [
        {
          key: '0',
          name: 'Edward King 0',
          age: '32',
          address: 'London, Park Lane no. 0',
        },
        {
          key: '1',
          name: 'Edward King 1',
          age: '32',
          address: 'London, Park Lane no. 1',
        },
      ],
      columns: [
        {
          title: 'name',
          dataIndex: 'name',
          width: '30%',
          editable: true,
        },
        {
          title: 'age',
          dataIndex: 'age',
        },
        {
          title: 'address',
          dataIndex: 'address',
        },
        {
          title: 'operation',
          dataIndex: 'operation',
          render: (text, record) => {
            const { dataSource } = this.state;
            if (dataSource.length >= 1) {
              return (
                <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                  {/* eslint-disable-next-line no-script-url */}
                  <a href="javascript:;">Delete</a>
                </Popconfirm>
              );
            }
            return null;
          },
        },
      ],
      count: 2,
    };
  }

  handleDelete = key => {
    const { dataSource } = this.state;
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = row => {
    const { dataSource } = this.state;
    const newData = [...dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  };

  /**
   * 点击确认获取表格的内容
   * @returns {*}
   */
  getTableData = () => {
    const { dataSource } = this.state;
    console.log(dataSource);
  };

  /**
   * 对表格的表头列进行处理
   * @param columns 接收到的表头列
   * @returns {*} 返回处理后的表头列
   */
  createColumns = columns => {
    const column = columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          inputType: 'treeSelect',
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return column;
  };

  render() {
    const { dataSource, columns } = this.state;
    const components = {
      body: {
        cell: EditableCell,
      },
    };
    return (
      <div>
        <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
          Add a row
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={this.createColumns(columns)}
        />
        <Button onClick={this.getTableData}>确认</Button>
      </div>
    );
  }
}

export default EditableTable;
```

**组件**

```js
import React, { PureComponent } from 'react';
import { Input, Form, Select, TreeSelect } from 'antd';

const { Option } = Select;
const EditableContext = React.createContext();
@Form.create()
class EditableCell extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      treeData: [
        {
          title: 'Node1',
          value: '0-0',
          key: '0-0',
          children: [
            {
              title: 'Child Node1',
              value: '0-0-1',
              key: '0-0-1',
            },
            {
              title: 'Child Node2',
              value: '0-0-2',
              key: '0-0-2',
            },
          ],
        },
        {
          title: 'Node2',
          value: '0-1',
          key: '0-1',
        },
      ],
      value: undefined,
    };
  }

  /**
   * 失去焦点时存储输入框中的值
   * @param e 输入框中传过来的值
   */
  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  onChange = value => {
    console.log(value);
    this.setState({
      value,
    });
  };

  /**
   * 可编辑框的收缩
   */
  toggleEdit = () => {
    const { editing } = this.state;
    const edited = !editing;
    this.setState({ editing: edited });
  };

  /**
   * 确定渲染哪一种可编辑单元格
   */
  getInput = () => {
    const { inputType } = this.props;
    const { treeData, value } = this.state;
    if (inputType === 'select') {
      return (
        <Select
          ref={node => {
            this.input = node;
          }}
          onPressEnter={this.save}
          onBlur={this.save}
        >
          <Option value="123">123</Option>
          <Option value="456">456</Option>
        </Select>
      );
    }
    if (inputType === 'treeSelect') {
      return (
        <TreeSelect
          placeholder="Please select"
          allowClear
          value={value}
          onChange={this.onChange}
          onPressEnter={this.save}
          onBlur={this.save}
          treeDefaultExpandAll
          treeData={treeData}
          ref={node => {
            this.input = node;
          }}
        />
      );
    }
    return (
      <Input
        ref={node => {
          this.input = node;
        }}
        onPressEnter={this.save}
        onBlur={this.save}
      />
    );
  };

  /**
   * 可编辑表格的渲染
   * @returns {*}
   */
  renderCell = () => {
    const { children, dataIndex, record, title, form } = this.props;
    const { editing } = this.state;
    this.form = form;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(this.getInput())}
      </Form.Item>
    ) : (
      <div className="editable-cell-value-wrap" onClick={this.toggleEdit}>
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      inputType,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

export default EditableCell;
```