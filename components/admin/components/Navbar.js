import React from "react";
import { AiOutlineCalendar, AiOutlineSetting } from "react-icons/ai";
import  Link  from 'next/link';

const Navbar = () => {
  return (
    <div className="A-navbar-container-wrapper">
      <div className="A-navbar-container">
        <h2>Admin Panel</h2>
        <div className="calender-settings">
          <div className="calender">
            <p>Today : Jan 14 </p>
            <AiOutlineCalendar className="i"/>
          </div>
          <Link href="">
          <a>
          <AiOutlineSetting className="i"/>    
          </a>
          </Link>                      
        </div>
      </div>
    </div>
  );
};

export default Navbar;
