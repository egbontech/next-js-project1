import Link from "next/link";
import React from "react";
import Footer from "../general/Footer";
import FavoriteAdList from "./FavoriteAds/FavoriteAdList";

const FavoriteAds = () => {
  return (
    <div className="main-content">
      <div className="profile-settings-container" style={{ padding: "0 15px" }}>       
        <div className="manage-ads-svg-container">
          <div className="svg">
            <img src="/assets/images/favorites.svg" alt="profile-picture" />
          </div>
          <p>You have no favorite adverts yet.</p>
          <Link href="/market/all-adverts">
            <a>Start Viewing</a>
          </Link>
        </div>
        <FavoriteAdList/>
      </div>
      <Footer/>
    </div>
  );
};

export default FavoriteAds;
