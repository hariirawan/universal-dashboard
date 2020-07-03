import React from "react";
import { HomePage, ReportsPage } from "../containers/pages";

interface IMenu {
  name: String;
  path: String;
  icon?: React.ReactChild;
  component: any;
}

interface IMainMenu extends IMenu {
  child?: Array<IMenu>;
}

const routes: Array<IMainMenu> = [
  {
    icon: "Fa fa-home",
    path: "/users",
    name: "pengguna",
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
