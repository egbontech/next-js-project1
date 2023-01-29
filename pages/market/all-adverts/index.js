import React from 'react'
import MarketPage from '../../../components/market/MarketPage';
import LeftSideBar from './../../../components/homepage/LeftSidebar';
import RightSideBar from './../../../components/homepage/RightSidebar';
import FrontEnd from './../../../layouts/FrontEnd';

const Index = () => {
  return (
    <div>
        <FrontEnd>
        <div className="home-container">
          <LeftSideBar /> 
          <MarketPage/>                                 
          <RightSideBar /> 
        </div>
      </FrontEnd>
    </div>
  )
}

export default Index
