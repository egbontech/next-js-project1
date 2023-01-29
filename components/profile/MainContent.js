import Link from "next/link";
import React, { useContext, useState } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { BsCheckCircleFill, BsQuestionCircle } from "react-icons/Bs";
import { MdLocationOn, MdOutlineManageSearch } from "react-icons/Md";
import FollowFollowingAds from "./mainContent/FollowFollowingAds";
import { AppContext } from "../../pages/profile";


const MainContent = () => {
  const context = useContext(AppContext)

  return (
    <div className="main-content">      
      <div className="profile-container">
        <div className="cover-image-container">
          <img src="/assets/images/background.jpg" alt="cover_picture" />
        </div>
        <div className="profile-container-inner">
          <div className="image">
            <img
              src="/assets/images/p.png"
              alt="profile_picture"
              onClick={() => context.setOpenModalContext(true)}
            />
          </div>
          <div className="username">
            <h1>@egbontech</h1>
            <BsCheckCircleFill className="i" />
          </div>

          <div>
            <div>
              <p>egbon@gmail.com</p>
            </div>
          </div>
          <FollowFollowingAds />
          <div className="edit-button">
            <Link href="/profile/account-settings">
              <a>
                <AiOutlineSetting className="i" />
                <p>Account Settings</p>
              </a>
            </Link>
            <Link href="/profile/manage-ads">
              <a>
                <MdOutlineManageSearch className="i" />
                <p>Manage Ads</p>
              </a>
            </Link>
          </div>
        </div>
        <div className="line"></div>
        <div className="location-container">
          <MdLocationOn className="i" style={{color:'#9e9ea7'}}/>
          <p>Ikpoba Okha, Edo State</p>
        </div>
        <div className="line"></div>
        <div className="bio-container">
          <div className="bio-text-icon">
            <h2>Bio</h2>
            <Tippy
              content={
                <span style={{ fontSize: "10px" }}>
                  Add a short bio to tell people about yourself,business or
                  brand
                </span>
              }
            >
              <button>
                <BsQuestionCircle className="i" />
              </button>
            </Tippy>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam error
            nesciunt deleniti explicabo aspernatur iure quasi eaque quisquam
            assumenda, voluptate, dicta, similique fugiat rerum recusandae.
            Reprehenderit iure tempora ipsa facilis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
