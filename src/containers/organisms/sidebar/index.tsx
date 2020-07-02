import React, { useState, useEffect } from "react";
import { Layout, Avatar } from "antd";
import cx from "classnames";

import "./style.scss";
import { SideFooter, SideMain } from "../../../components/molecules";

const { Sider } = Layout;

const SideBarApp = (props: any) => {
  const [collapsed, setcollapsed] = useState(false);
  const onCollapse = () => {
    setcollapsed(!collapsed);
  };

  useEffect(() => {
    if (props.collapsed) {
      setcollapsed(true);
    } else {
      setcollapsed(false);
    }
  }, [setcollapsed, props.collapsed]);

  return (
    <Sider
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      className="sidebar-layout"
      trigger={null}
    >
      <div className={cx("card-avatar", collapsed ? "card-col" : "card-row")}>
        <div className="avatar-selector">
          <Avatar
            size={collapsed ? 30 : 40}
            src="https://3.bp.blogspot.com/-eTPEHqY36LU/WQGEliEWHvI/AAAAAAAABpw/qxI7VKUGHacXlSIixNM725UvZCHh0yizQCLcB/s1600/atomix_user31.png"
          />
        </div>
        <div className="avatar-desc">
          <div className="avatar-name">Hari Irawan</div>
          <div className="avatar-role">Administrator</div>
        </div>
      </div>
      <SideMain menus={props.menus} />
      {/* <SideFooter /> */}
    </Sider>
  );
};

export default SideBarApp;
