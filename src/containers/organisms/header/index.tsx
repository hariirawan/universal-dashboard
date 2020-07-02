import React from "react";
import { IHeader } from "./interface";
import { Layout } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

function index(props: IHeader) {
  const { collapsed } = props;
  return (
    <Header className="site-layout-background">
      <div className="header left">
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className="header right">
        <UserOutlined />
      </div>
    </Header>
  );
}

export default index;
