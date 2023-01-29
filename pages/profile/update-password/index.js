import React from 'react'
import LeftSideBar from "../../../components/homepage/LeftSidebar";
import UpdatePassword from '../../../components/profile/AccountSettings/update-password/UpdatePassword';
import FrontEnd from "../../../layouts/FrontEnd";

const Index = () => {
  return (
    <div>
       <FrontEnd>
        <div className="home-container">
          <LeftSideBar /> 
          <UpdatePassword/>
          <div className="right-sidebar"></div>
        </div>
      </FrontEnd>
    </div>
  )
}

export default Index
