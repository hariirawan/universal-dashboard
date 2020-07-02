import React from "react";
import { Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";

const SideMain = (props: any) => {
  const location = useLocation();
  const { menus } = props;
  return (
    <div className="sidebar-main">
      <Menu
        theme="light"
        selectedKeys={[location.pathname]}
        onSelect={() => console.log("kampret")}
        forceSubMenuRender={true}
        mode="inline"
      >
        {menus.map((menu: any) => {
          if (menu.child) {
            return (
              <SubMenu
                key={menu.url}
                title={
                  <span>
                    {menu.icon}
                    <span>{menu.name}</span>
                  </span>
                }
              >
                {menu.child.map((submenu: any) => (
                  <Menu.Item key={submenu.url}>
                    <Link to={submenu.url}>{submenu.name}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            );
          }
          return (
            <Menu.Item key={menu.url} className="menu-item">
              <Link to={menu.url}>
                {menu.icon}
                <span>{menu.name}</span>
              </Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
};

export default SideMain;
