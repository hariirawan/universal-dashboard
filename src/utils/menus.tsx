import React from "react";
import {
  DatabaseOutlined,
  HomeOutlined,
  UserSwitchOutlined,
  TeamOutlined,
  AuditOutlined,
} from "@ant-design/icons";
const menus: any = [
  {
    name: "Home",
    url: "/",
    icon: <HomeOutlined />,
  },
  {
    name: "Payments",
    url: "/master-data",
    icon: <DatabaseOutlined />,
    child: [
      {
        name: "Transactions",
        url: "/transactions",
        icon: "",
      },
      {
        name: "Tipe Anggota",
        url: "/member-type",
        icon: "",
      },
      {
        name: "Tipe Pembayaran",
        url: "/payment-types",
        icon: "",
      },
      {
        name: "Posko",
        url: "/posko",
        icon: "",
      },
    ],
  },
  {
    name: "Reports",
    url: "/reports",
    icon: <TeamOutlined />,
  },
  {
    name: "Anggota",
    url: "/members",
    icon: <UserSwitchOutlined />,
  },
  {
    name: "Donasi",
    url: "/donations",
    icon: <AuditOutlined />,
  },
];

export default menus;
