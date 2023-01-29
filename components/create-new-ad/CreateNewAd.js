import Tippy from "@tippyjs/react";
import React, { useRef, useState } from "react";
import "tippy.js/dist/tippy.css";
import { BsQuestionCircle } from "react-icons/Bs";
import Footer from "../general/Footer";

const options = [
  {
    value: "Phones and accessories",
    label: "Chocolate",
    url: "/assets/images/phone.jpeg",
  },
  { value: "strawberry", label: "Strawberry", url: "/assets/images/men.jpeg" },
  { value: "strawberry", label: "Strawberry", url: "/assets/images/women.png" },
  {
    value: "strawberry",
    label: "Strawberry",
    url: "/assets/images/chair.jpeg",
  },
  {
    value: "strawberry",
    label: "Strawberry",
    url: "/assets/images/phone.jpeg",
  },
  { value: "vanilla", label: "Vanilla", url: "/assets/images/phone.jpeg" },
  { value: "vanilla", label: "Vanilla", url: "/assets/images/phone.jpeg" },
  { value: "vanilla", label: "Vanilla", url: "/assets/images/laptop.jpeg" },
  { value: "vanilla", label: "Vanilla", url: "/assets/images/phone.jpeg" },
  { value: "vanilla", label: "Vanilla", url: "/assets/images/men.jpeg" },
];

const CreateNewAd = () => {
  const ImageInputRef = useRef();

  const [fixedPrice, setFixedPrice] = useState(false);
  const [selectBox, setSelectBox] = useState(false);
  const [selectValue, setSelectValue] = useState(false);

  const updateSelectbox = () => {
    if (!selectBox) {
      setSelectBox(true);
    } else {
      setSelectBox(false);
    }
  };

  const updateCategory = (event) => {
    setSelectValue(event);
    setSelectBox(false);
  };

  return (
    <div className="main-content">
      <div className="profile-settings-container">
        <div className="form">
          <h2>Post Ad</h2>
          <div className="form-input-container">
            <input
              type="text"
              className="form-input"
              autoComplete="off"
              placeholder=" "
              id="name"
            />
            <label htmlFor="name" className="form-label">
              Title*
            </label>
          </div>
          <div className="form-select-container">
            <div className="select-btn" onClick={updateSelectbox}>
              <div>
                {selectValue ? (
                  <p>{selectValue}</p>
                ) : (
                  <p>Select Ad Category*</p>
                )}
              </div>
            </div>
            {selectBox && (
              <div className="select-options-container">
                {options.map((item,index) => {
                  return (
                    <div className="select-options-items"key={index}>
                      <div className="image">
                        <img src={item.url} alt="" />
                      </div>
                      <p onClick={(event) => updateCategory(item.value)}>
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="form-input-container textarea-container">
            <textarea
              id="bio"
              className="form-input"
              placeholder=" "
            ></textarea>
            <label htmlFor="bio" className="form-label textarea">
              Description*
            </label>
          </div>
          <div style={{ width: "90%", margin: "auto", marginTop: "-10px" }}>
            <Tippy
              content={
                <span style={{ fontSize: "10px" }}>
                  Add your whatsapp link to connect your advert to your
                  whatsapp,so people can chat you up with ease(optional)
                </span>
              }
            >
              <button className="info-button" style={{ marginLeft: "10px" }}>
                <BsQuestionCircle className="i" />
              </button>
            </Tippy>
          </div>
          {fixedPrice && (
            <div className="form-input-container">
              <input
                type="number"
                className="form-input"
                autoComplete="off"
                placeholder=" "
                id="price"
              />
              <label htmlFor="price" className="form-label">
                Price(&#8358;)
              </label>
            </div>
          )}
          {fixedPrice ? (
            <div className="non-fixed-price-button">
              <button className="button" onClick={() => setFixedPrice(false)}>
                Contact For Price
              </button>
              <Tippy
                content={
                  <span style={{ fontSize: "10px" }}>
                    click on the contact for price button for adverts without
                    fixed price
                  </span>
                }
              >
                <button className="info-button" style={{ marginLeft: "10px" }}>
                  <BsQuestionCircle className="i" />
                </button>
              </Tippy>
            </div>
          ) : (
            <div className="non-fixed-price-button">
              <button className="button" onClick={() => setFixedPrice(true)}>
                Add A Fixed Price
              </button>
              <Tippy
                content={
                  <span style={{ fontSize: "10px" }}>
                    click on the add a fixed price button for adverts with a
                    fixed price
                  </span>
                }
              >
                <button className="info-button" style={{ marginLeft: "10px" }}>
                  <BsQuestionCircle className="i" />
                </button>
              </Tippy>
            </div>
          )}

          <div className="form-input-container">
            <input
              type="number"
              className="form-input"
              autoComplete="off"
              placeholder=" "
              id="phone"
            />
            <label htmlFor="phone" className="form-label">
              Phone*
            </label>
          </div>
          <div className="form-input-container">
            <input
              type="text"
              className="form-input"
              autoComplete="off"
              placeholder=" "
              id="username"
            />
            <label htmlFor="username" className="form-label">
              Username*
            </label>
          </div>

          <div className="form-input-container">
            <input
              type="text"
              className="form-input"
              autoComplete="off"
              placeholder=" "
              id="WhatsApp-Link"
            />
            <label htmlFor="WhatsApp-Link" className="form-label">
              WhatsApp Link
            </label>
          </div>
          <div style={{ width: "90%", margin: "auto", marginTop: "-5px" }}>
            <Tippy
              content={
                <span style={{ fontSize: "10px" }}>
                  Add your whatsapp link to connect your advert to your
                  whatsapp,so people can chat you up with ease(optional)
                </span>
              }
            >
              <button className="info-button" style={{ marginLeft: "10px" }}>
                <BsQuestionCircle className="i" />
              </button>
            </Tippy>
          </div>
          <div className="ad-image-container">
            <h2>Add Photo*</h2>
            <p className="p">First picture is the main picture</p>
            <button
              className="ad-upload-button"
              onClick={(e) => {
                e.preventDefault();
                ImageInputRef.current.click();
              }}
            >
              +
            </button>
            <input
              type="file"
              accept="image/*"
              ref={ImageInputRef}
              multiple
              style={{ display: "none" }}
            />
            <p>Each picture must not exceed 5 Mb</p>
            <p>Supported formats are *.jpg and *.jpeg</p>
          </div>
          <div className="form-button">
            <button>Post</button>
          </div>
        </div>        
      </div>
      <Footer/>
    </div>
  );
};

export default CreateNewAd;
