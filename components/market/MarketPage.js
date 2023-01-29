import React from "react";
import Footer from "../general/Footer";
import Sponsored from "../homepage/mainContainer/welcome/Sponsored";
import AllAds from "./MarketPage/AllAds";
import CategoryList from "./MarketPage/CategoryList";



const MarketPage = () => {
  return (
    <div className="main-content">
      <div
        className="profile-settings-container"
        style={{ padding: "0 15px" }}
      >
        <div style={{padding:'10px 0'}}></div>
        <Sponsored/>     
        <CategoryList/>
        <AllAds/>
        <div style={{padding:'0  0 20px 0'}}></div>          
      </div>
      <Footer/>
    </div>
  );
};

export default MarketPage;
