import React from "react";
import { Menu } from "antd";
import { FileOutlined } from "@ant-design/icons";
import "./style.scss";

const SideFooter = (props: any) => {
  return (
    <Menu className="sidebar-footer">
      <Menu.Item key="9">
        <FileOutlined />
        <span>Settings</span>
      </Menu.Item>
      <Menu.Item key="10">
        <FileOutlined />
        <span>Log Out</span>
      </Menu.Item>
    </Menu>
  );
};

export default SideFooter;
