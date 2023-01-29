import React from 'react'
import LeftSideBar from "../../../components/homepage/LeftSidebar";
import UpdateProfilePicture from '../../../components/profile/AccountSettings/update-profile-picture/UpdateProfilePicture';
import FrontEnd from "../../../layouts/FrontEnd";

const Index = () => {
  return (
    <div>
        <FrontEnd>
        <div className="home-container">
          <LeftSideBar /> 
          <UpdateProfilePicture/>              
          <div className="right-sidebar"></div>
        </div>
      </FrontEnd>
    </div>
  )
}

export default Index
