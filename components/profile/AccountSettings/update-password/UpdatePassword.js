import React from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/Md";
import Link from "next/link";


const UpdatePassword = () => {
  return (
    <div className="main-content">
      <div className="profile-settings-container">
      <Link href="/profile/account-settings">
          <a className="profile-setting">
            <div className="icon-title">
              <MdOutlineArrowBackIosNew />
              <p style={{ fontWeight: "bold" }}>Update Password</p>
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
              id="old-password"
            />
            <label htmlFor="old-password" className="form-label">
              Old Password
            </label>
          </div>
        <div className="form-input-container">
            <input
              type="text"
              className="form-input"
              autoComplete="off"
              placeHolder=" "
              id="new-password"
            />
            <label htmlFor="new-password" className="form-label">
              New Password
            </label>
          </div>
          <div className="form-button">
            <button>Update</button>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default UpdatePassword;
