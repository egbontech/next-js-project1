import React from 'react'
import FavoriteAds from '../../components/favorites/FavoriteAds'
import LeftSideBar from '../../components/homepage/LeftSidebar'
import RightSideBar from '../../components/homepage/RightSidebar'
import FrontEnd from '../../layouts/FrontEnd'


const Index = () => {
  return (
    <div>
        <FrontEnd>
        <div className="home-container">
          <LeftSideBar /> 
          <FavoriteAds/>                                      
          <RightSideBar/> 
        </div>
      </FrontEnd>
    </div>
  )
}

export default Index
