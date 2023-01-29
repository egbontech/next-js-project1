import React from 'react'
import CreateNewAd from '../../components/create-new-ad/CreateNewAd';
import LeftSideBar from '../../components/homepage/LeftSidebar';
import FrontEnd from '../../layouts/FrontEnd';
import RightSideBar from './../../components/homepage/RightSidebar';


const Index = () => {
  return (
    <div>
        <FrontEnd>
        <div className="home-container">
          <LeftSideBar /> 
          <CreateNewAd/>          
          <RightSideBar/>
        </div>
        </FrontEnd>
    </div>
  )
}

export default Index
