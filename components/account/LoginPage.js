import React from "react";
import Link from "next/link";
import Footer from "./../general/Footer";

const LoginPage = () => { 

  return (
    <>
      <div className="form-page">
        <div className="login-page-container">
          <div className="svg-container">
            <img src="/assets/images/login.svg" alt="cover_picture" />
          </div>

          <div className="form-container">
            <h1 style={{ color: "#1b74e4" }}>Logo</h1>
            <h1>Login To Account</h1>
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
              <button>Login</button>
            </div>
            <div className="register-link-container">
              <p>Don&lsquo;t have an account?</p>
              <Link href="/account/register">
                <a>Sign up here</a>
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

export default LoginPage;
