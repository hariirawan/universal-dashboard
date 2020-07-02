import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import { IBreadcrumbItem } from "./interface";

import "./style.scss";

function BreadcrumbItem(props: IBreadcrumbItem) {
  const { key, link, name } = props;
  return (
    <Breadcrumb.Item key={key}>
      <Link to={`${link}`}>{name}</Link>
    </Breadcrumb.Item>
  );
}

export default BreadcrumbItem;
