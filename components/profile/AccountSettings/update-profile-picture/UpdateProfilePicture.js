import React, { useRef } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/Md";
import Link from "next/link";
import { AiOutlinePicture } from "react-icons/ai";

const UpdateProfilePicture = () => {
  const ImageInputRef = useRef();

  return (
    <div className="main-content">
      <div className="profile-settings-container">
        <Link href="/profile/account-settings">
          <a className="profile-setting">
            <div className="icon-title">
              <MdOutlineArrowBackIosNew />
              <p style={{ fontWeight: "bold" }}>Update Profile Picture</p>
            </div>
          </a>
        </Link>
        <div className="form">
          <div className="upload-button">
            <button
              onClick={(e) => {
                e.preventDefault();
                ImageInputRef.current.click();
              }}
            >
              <AiOutlinePicture className="i" />
            </button>
            <p>Upload An Image</p>
          </div>
          <input
            type="file"
            accept="image/*"
            ref={ImageInputRef}
            style={{ display: "none" }}
          />
          <div className="form-button">
            <button>Update</button>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default UpdateProfilePicture;
