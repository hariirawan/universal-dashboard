import React from "react";
import { HomePage, ReportsPage } from "../containers/pages";

interface IMenu {
  name: String;
  path: String;
  icon?: React.ReactChild;
  component: any;
  exact?: Boolean;
}

interface IMainMenu extends IMenu {
  child?: Array<IMenu>;
}

const routes: Array<IMainMenu> = [
  {
    icon: "Fa fa-home",
    path: "/",
    exact: true,
    name: "Home",
    component: HomePage,
  },
  {
    icon: "Fa fa-home",
    path: "/reports",
    name: "pengguna",
    component: ReportsPage,
  },
];

export default routes;
