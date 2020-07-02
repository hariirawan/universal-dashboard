import React from "react";
import AtomBreadcrumb from "../../atoms/breadcrumb";
import { useLocation } from "react-router-dom";
import BreadcrumbItem from "../../atoms/breadcrumb-item/breadcrumb-item";

function Breadcrumb(props: any) {
  const breadcrumbNameMap: any = {
    "/users": "Pengguna",
    "/role": "Master Data Role",
    "/member-type": "Master Data Tipe Anggota",
    "/posko": "Master Data Posko",
    "/members": "Anggota",
    "/transaction": "Transaksi",
    "/donations": "Daftar Donasi",
  };

  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <BreadcrumbItem key={url} name={breadcrumbNameMap[url]} link={url} />
    );
  });

  const breadcrumbItems = [
    <BreadcrumbItem key="home" link="/" name="Home" />,
  ].concat(extraBreadcrumbItems);

  return (
    <div className="content-breadcrumb">
      <AtomBreadcrumb>{breadcrumbItems}</AtomBreadcrumb>
    </div>
  );
}

export default Breadcrumb;
