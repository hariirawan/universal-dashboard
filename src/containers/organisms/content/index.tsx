import React from "react";
import { Layout } from "antd";
import { UIBreadcrumb } from "../../../components/molecules";
import { Route } from "react-router-dom";

import routes from "../../../utils/routes";
import "./style.scss";
import { Header } from "..";

const { Content } = Layout;

const SiteLayout = (props: any) => {
  const { collapsed } = props;
  return (
    <Layout className="site-layout">
      {/* <Header collapsed={collapsed} /> */}
      <Content className="layout-content">
        {/* <UIBreadcrumb /> */}
        {routes.map((route: any, i: any) => (
          <Route
            key={i}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
        {/* <Footer style={{ textAlign: "center" }}>
          SIM Iuran ©2019 Created by NW DEV, Versi: 1.0
        </Footer> */}
      </Content>
    </Layout>
  );
};

export default SiteLayout;
