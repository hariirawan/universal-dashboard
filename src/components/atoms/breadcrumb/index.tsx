import React from "react";
import { Breadcrumb as AntdBreadcrumb } from "antd";
import { IBreadcrumb } from "./interface";
import "./style.scss";

function Breadcrumb(props: IBreadcrumb) {
  const { children } = props;
  return <AntdBreadcrumb>{children}</AntdBreadcrumb>;
}

export default Breadcrumb;
