import React, { useState } from "react";
import Link from "next/link";
import Footer from "./../general/Footer";
import { SlLocationPin } from "react-icons/Sl";

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

const RegisterPage = () => {
  const [selectBox, setSelectBox] = useState(false);
  const [selectValue, setSelectValue] = useState("");

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
    <>
      <div className="form-page">
        <div className="login-page-container">
          <div className="svg-container">
            <img src="/assets/images/login.svg" alt="cover_picture" />
          </div>

          <div className="form-container">
            <h1 style={{ color: "#1b74e4" }}>Logo</h1>
            <h1>Create New Account</h1>
            <div className="form-input-container">
              <input
                type="text"
                className="form-input"
                autoComplete="off"
                placeholder=" "
                id="name"
              />
              <label htmlFor="name" className="form-label">
                Full Name
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
                Username
              </label>
            </div>
            <div className="form-input-container">
              <input
                type="text"
                className="form-input"
                autoComplete="off"
                placeholder=" "
                id="email"
              />
              <label htmlFor="email" className="form-label">
                Email
              </label>
            </div>
            <div className="form-select-container">
              <div className="select-btn" onClick={updateSelectbox}>
                <div>
                  {selectValue ? (
                    <p style={{ fontSize: "12px", marginLeft: "5px" }}>
                      {selectValue}
                    </p>
                  ) : (
                    <p style={{ fontSize: "12px", marginLeft: "5px" }}>
                      Select LGA
                    </p>
                  )}
                </div>
              </div>
              {selectBox && (
                <div className="select-options-container">
                  {options.map((item,index) => {
                    return (
                      <div className="select-options-items"key={index}>
                        <SlLocationPin className="i" />
                        <p onClick={(event) => updateCategory(item.value)}>
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="form-input-container">
              <input
                type="text"
                className="form-input"
                autoComplete="off"
                placeholder=" "
                id="password"
              />
              <label htmlFor="password" className="form-label">
                Password
              </label>
            </div>
            <div className="forgot-password-container">
              <Link href="">
                <a>Forgot Password?</a>
              </Link>
            </div>
            <div className="form-button login-btn">
              <button>Register</button>
            </div>
            <div className="register-link-container">
              <p>Already have an account?</p>
              <Link href="/account/login">
                <a>Login here</a>
              </Link>
            </div>
            <div className="register-link-container">
              <Link href="/">
                <a>Homepage</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer background="#F0F2F5" />
    </>
  );
};

export default RegisterPage;
