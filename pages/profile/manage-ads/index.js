import React from 'react'
import ManageAds from '../../../components/profile/ManageAds/ManageAds';
import LeftSideBar from './../../../components/homepage/LeftSidebar';
import FrontEnd from './../../../layouts/FrontEnd';


const Index = () => {
  return (
    <div>
        <FrontEnd>
        <div className="home-container">
          <LeftSideBar /> 
          <ManageAds/>
          <div className="right-sidebar"></div>
        </div>
        </FrontEnd>
    </div>
  )
}

export default Index
