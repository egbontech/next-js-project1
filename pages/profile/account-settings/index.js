import React from 'react'
import FrontEnd from './../../../layouts/FrontEnd';
import LeftSideBar from './../../../components/homepage/LeftSidebar';
import SettingsList from './../../../components/profile/AccountSettings/SettingsList';


const AccountSettings = () => {
  return (
    <div>
        <FrontEnd>
        <div className="home-container">
          <LeftSideBar />  
          <SettingsList/>      
          <div className="right-sidebar"></div>
        </div>
        </FrontEnd>
    </div>
  )
}

export default AccountSettings
