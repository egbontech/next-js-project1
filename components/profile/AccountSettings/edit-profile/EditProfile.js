import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/Md";
import Link from "next/link";


const EditProfile = () => {
  return (
    <div className="main-content">
      <div className="profile-settings-container">
        <Link href="/profile/account-settings">
          <a className="profile-setting">
            <div className="icon-title">
              <MdOutlineArrowBackIosNew />
              <p style={{ fontWeight: "bold" }}>Edit Proflie</p>
            </div>
          </a>
        </Link>
        <div className="form">
          <div className="form-input-container">
            <input
              type="text"
              className="form-input"
              autoComplete="off"
              placeHolder=" "
              id="name"
            />
            <label htmlFor="name" className="form-label">
              Name
            </label>
          </div>
          <div className="form-input-container select">
            <select name="" id="" className="form-input">
              <option value="">Location</option>
              <option value="">text</option>
              <option value="">test</option>
            </select>
          </div>
          <div className="form-input-container textarea-container">
            <textarea
              id="bio"
              className="form-input"
              placeholder=" "             
            ></textarea>
            <label htmlFor="bio" className="form-label textarea">
              Short Bio
            </label>
          </div>
          <div className="form-button">
            <button>Update Profile</button>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default EditProfile;
