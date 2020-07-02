import React from "react";
import { Layout } from "antd";
import menus from "../../../utils/menus";
import { MainApp, SidebarApp } from "../../organisms";

const Main = (props: any) => {
  return (
    <Layout>
      <SidebarApp menus={menus} />
      <MainApp />
    </Layout>
  );
};

export default Main;
