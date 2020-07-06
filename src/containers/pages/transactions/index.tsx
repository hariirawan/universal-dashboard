import React, { Fragment } from "react";
import { Avatar, Table, Tag, Space, Row, Col, PageHeader, Button } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import "./style.scss";

export default function Transactions() {
  const columns = [
    {
      title: "Basic Info",
      key: "name",
      render: (text: any) => (
        <div>
          <Row gutter={8} align="middle">
            <Col>
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            </Col>
            <Col>
              <div>{text.name}</div>
              <div style={{ fontSize: "10px" }}>{text.email}</div>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (tags: any) => (
        <>
          {tags.map((tag: any) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Act",
      key: "action",
      render: (text: any, record: any) => (
        <Space align="end" direction="vertical" style={{ width: "100%" }}>
          <EllipsisOutlined style={{ fontSize: 23 }} />
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      company: "NUSATEK",
      phone: "0878-8668-3174",
      email: "hariirawan@gmail.com",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      phone: "0878-8668-3174",
      email: "hariirawan@gmail.com",
      company: "Nusantara Aplikasi Apartindo",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      phone: "0878-8668-3174",
      email: "hariirawan@gmail.com",
      company: "Grab",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },

    {
      key: "4",
      name: "Joe Black",
      phone: "0878-8668-3174",
      email: "hariirawan@gmail.com",
      company: "Grab",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },

    {
      key: "5",
      name: "Joe Black",
      phone: "0878-8668-3174",
      email: "hariirawan@gmail.com",
      company: "Grab",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },

    {
      key: "6",
      name: "Joe Black",
      phone: "0878-8668-3174",
      email: "hariirawan@gmail.com",
      company: "Grab",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "7",
      name: "Joe Black",
      phone: "0878-8668-3174",
      email: "hariirawan@gmail.com",
      company: "Grab",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "8",
      name: "Joe Black",
      phone: "0878-8668-3174",
      email: "hariirawan@gmail.com",
      company: "Grab",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  const rowSelection = {
    selectedRowKeys: [],
  };

  return (
    <Fragment>
      <div className="site-page-header-ghost-wrapper">
        <PageHeader
          ghost={true}
          onBack={() => window.history.back()}
          title="Contacts"
          subTitle="5 Total"
          style={{ paddingLeft: 0, paddingRight: 0 }}
          extra={[
            <Button key="2">Filter</Button>,
            <Button key="1" type="primary">
              Add Contact
            </Button>,
          ]}
        />
      </div>
      <Table
        className="table-update"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomCenter"] }}
      />
    </Fragment>
  );
}
