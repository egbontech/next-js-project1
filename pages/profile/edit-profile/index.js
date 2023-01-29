import React from "react";
import LeftSideBar from "../../../components/homepage/LeftSidebar";
import FrontEnd from "../../../layouts/FrontEnd";
import EditProfile from './../../../components/profile/AccountSettings/edit-profile/EditProfile';

const Index = () => {
  return (
    <div>
      <FrontEnd>
        <div className="home-container">
          <LeftSideBar /> 
          <EditProfile/>        
          <div className="right-sidebar"></div>
        </div>
      </FrontEnd>
    </div>
  );
};

export default Index;
