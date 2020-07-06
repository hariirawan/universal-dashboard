import React from "react";
import { HomePage, ReportsPage, TransactionsPage } from "../containers/pages";

interface IMenu {
  name: String;
  path: String;
  component: any;
  exact?: Boolean;
}

interface IMainMenu extends IMenu {
  child?: Array<IMenu>;
}

const routes: Array<IMainMenu> = [
  {
    path: "/",
    exact: true,
    name: "Home",
    component: HomePage,
  },
  {
    path: "/reports",
    name: "pengguna",
    component: ReportsPage,
  },
  {
    path: "/transactions",
    name: "Transactions",
    component: TransactionsPage,
  },
];

export default routes;
