import React from "react";
import {
  DatabaseOutlined,
  HomeOutlined,
  UserSwitchOutlined,
  TeamOutlined,
  AuditOutlined,
} from "@ant-design/icons";
const menus = [
  {
    name: "Beranda",
    url: "/",
    icon: <HomeOutlined />,
  },
  {
    name: "Master Data",
    url: "/master-data",
    icon: <DatabaseOutlined />,
    child: [
      {
        name: "Role",
        url: "/role",
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
    name: "pengguna",
    url: "/users",
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
