import React from "react";
import { MdClose} from "react-icons/Md";

const ProfilePictureModal = ({ openModal, closeModal, imageURL }) => {
  if (!openModal) return null;
  return (
    <div className="profile-picture-modal">
      <div className="overlay" onClick={closeModal}>
        <div className="modalcontent">
          <img src={imageURL} alt=""  onClick={(e) => e.stopPropagation()}/>
          <p className="closeBtn" onClick={closeModal}>
            <MdClose />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePictureModal;
