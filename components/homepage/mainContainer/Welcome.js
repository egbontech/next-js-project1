import React from "react";
import Link from "next/link";
import { AiOutlineInfoCircle } from "react-icons/ai";
import "tippy.js/dist/tippy.css";
import AdsForYou from "./welcome/AdsForYou";
import NewAds from "./welcome/NewAds";
import Sponsored from "./welcome/Sponsored";
import CategoryList from "../../market/MarketPage/CategoryList";

const Welcome = () => {
  return (
    <div>
      <div className="main-content-section">
        <div className="ads-header">
          <div className="header-title">
            <h2>E MarketPlace</h2>
            <p>Got something to sell?. Post adverts for free</p>
          </div>
          <div>
            <Link href="">
              <a>
                <AiOutlineInfoCircle className="i" />
                <p>Learn More</p>
              </a>
            </Link>
          </div>
        </div>
        <div className="header-line"></div>
        <CategoryList />
        <Sponsored />
        <AdsForYou />
        <NewAds />
      </div>
    </div>
  );
};

export default Welcome;
