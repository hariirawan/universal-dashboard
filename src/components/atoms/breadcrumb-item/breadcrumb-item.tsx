import React from "react";
import Breadcrumb from "antd/lib/breadcrumb";
import { Link } from "react-router-dom";
import { IBreadcrumbItem } from "./interface";
import "./style.scss";

const { Separator } = Breadcrumb;

function BreadcrumbItem(props: IBreadcrumbItem) {
  const { key, link, name } = props;
  return (
    <Separator key={key}>
      <Link to={`${link}`}>{name}</Link>
    </Separator>
  );
}

export default BreadcrumbItem;
