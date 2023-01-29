import Link from "next/link";
import React from "react";

const Footer = ({ background }) => {

  const currentYear = new Date().getFullYear();

  return (
    <div style={{ paddingBottom: "70px", background: `${background}` }}>
      <div className="footer">
        <Link href="">
          <a>Privacy-Policy</a>
        </Link>
        <Link href="">
          <a>Advertising</a>
        </Link>
      </div>
      <div className="copyright">
        <Link href="" target="_blank">
          <a style={{ marginRight: "6px", color: "#1b74e4" }}>egbontech</a>
        </Link>
        <p> © {currentYear} All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
