import Link from "next/link";
import React from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { BiLockAlt } from "react-icons/Bi";
import { BsPerson } from "react-icons/Bs";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/Md";

const SettingsList = () => {
  return (
    <div className="main-content">
      <div className="profile-settings-container">
        <Link href="/profile">
          <a className="profile-setting">
            <div className="icon-title">
              <MdOutlineArrowBackIosNew />
              <p style={{ fontWeight: "bold" }}>Account Settings</p>
            </div>
          </a>
        </Link>
      </div>
      <div className="profile-settings-container">
        <Link href="/profile/edit-profile">
          <a className="profile-setting">
            <div className="icon-title">
              <BsPerson className="i"/>
              <p> Edit Profile</p>
            </div>
            <div className="arrow">
              <MdOutlineArrowForwardIos />
            </div>
          </a>
        </Link>
        <Link href="/profile/update-profile-picture">
          <a className="profile-setting">
            <div className="icon-title">
              <AiOutlinePicture className="i"/>
              <p> Update Profile Picture</p>
            </div>
            <div className="arrow">
              <MdOutlineArrowForwardIos />
            </div>
          </a>
        </Link>
        <Link href="/profile/update-password">
          <a className="profile-setting">
            <div className="icon-title">
              <BiLockAlt className="i"/>
              <p>Update Password</p>
            </div>
            <div className="arrow">
              <MdOutlineArrowForwardIos />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SettingsList;
