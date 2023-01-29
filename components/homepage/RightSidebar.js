import Link from "next/link";
import React, { useState } from "react";
import Footer from "../general/Footer";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const RightSideBar = () => {

  const [Loading,setLoading] = useState(true)

  if(Loading) {
    return (
      <div className="right-sidebar">
          <div className="profile-preview-container">
          <div className="profile-preview">
          <div className="image">
            <img src="/assets/images/p.svg" alt="profile-picture" />
          </div>
          <div className="user-detials">
            <h3><Skeleton/></h3>
            <p><Skeleton/></p>
            <div className="followers-following-ads">
              <p className="span">0 Followers</p>
              <p className="span">0 Following</p>
              <p className="span">0 Ads</p>
            </div>
          </div>      
        </div>
          </div>       
    </div>      
    )
  }
  else{
    return (
      <div className="right-sidebar">
        <div className="profile-preview-container">
        <div className="profile-preview">
          <div className="image">
            <img src="/assets/images/p.svg" alt="profile-picture" />
          </div>
          <div className="user-detials">
            <h3>@username</h3>
            <p>egbonemmanuel50@gmail.com</p>
            <div className="followers-following-ads">
              <p className="span">0 Followers</p>
              <p className="span">0 Following</p>
              <p className="span">0 Ads</p>
            </div>
          </div>      
        </div>
        <div className="profile-link">
            <Link href="/profile">
            <a>
              View Profile
            </a>
            </Link>
          </div>
        </div>
       <Footer/>   
      </div>
    );
  }
  
 
};

export default RightSideBar;
