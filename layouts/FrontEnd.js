import Head from "next/head";
import React from "react";
import MobileNavbar from "../components/general/MobileNavbar";
import Navbar from "../components/general/Navbar";

const FrontEnd = ({ children }) => {
  return (
    <div>
      <Head>
        <title>connect</title>
      </Head>
      <Navbar />
      <MobileNavbar />
      {children}
    </div>
  );
};

export default FrontEnd;
