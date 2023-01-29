import Link from "next/link";
import React, { useState } from "react";
import { AiFillDashboard, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/Hi";


const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const updateSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className={sidebarOpen ? "sidebar active" : "sidebar"}>
      <div className="top">
        <p>LOGO</p>
        <button onClick={updateSidebar}>         
            <AiOutlineMenu className="i" />       
        </button>
      </div>
      <div className="user">
        <div className="image">
          <img src="/assets/images/p.jpg" alt="" />
        </div>

        <div>
          <p className="bold">Hey,<span>Emmanuel</span></p>         
        </div>
      </div>
      <ul>
        <li>
          <Link href="/admin/dashboard">
            <a>
              <AiFillDashboard className="i" />
              <p>Dashboard</p>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/manage-admin">
            <a>
              <HiOutlineUsers className="i" />
              <p>Manage-Admin</p>
            </a>
          </Link>
        </li>
      
      
        
      </ul>
    </div>
  );
};

export default Sidebar;
