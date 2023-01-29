import React from "react";
import RightSideBar from './../../../components/homepage/RightSidebar';
import LeftSideBar from './../../../components/homepage/LeftSidebar';
import FrontEnd from './../../../layouts/FrontEnd';
import SearchPage from "../../../components/search/search-page/SearchPage";


const Index = () => {
  return (   
      <FrontEnd>
        <div className="home-container">
          <LeftSideBar />
          <SearchPage/>          
          <RightSideBar/>
        </div>
      </FrontEnd>
   
  );
};

export default Index;
