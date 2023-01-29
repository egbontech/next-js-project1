import Head from "next/head";
import React from "react";
import Navbar from "../components/admin/components/Navbar";
import Sidebar from "../components/admin/components/Sidebar";

const Admin = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="dashboard-container">
        <Sidebar/>
        <div className="A-main-content">
        <Navbar/>
        {children}
        </div>
      </div>
    </div>
  );
};

export default Admin;
