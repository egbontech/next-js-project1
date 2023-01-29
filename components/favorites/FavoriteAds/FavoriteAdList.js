import Link from "next/link";
import React from "react";
import { BsFillTagFill, BsQuestionCircle } from "react-icons/Bs";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { SlLocationPin } from "react-icons/Sl";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const FavoriteAdList = () => {
  return (
    <div className="main-content-ad-container">
      <div style={{ padding: "10px 0" }}></div>
      <div className="header-text-icon">
        <h2>Favorite Ads</h2>
        <Tippy
          content={<span style={{ fontSize: "10px" }}>Ads You Liked</span>}
        >
          <button>
            <BsQuestionCircle className="i" />
          </button>
        </Tippy>
      </div>
      <div className="main-content-items-container">
        <div className="main-content-ad-items">
          <div className="main-content-ad-items-header">
            <div className="image">
              <img src="/assets/images/p.svg" alt="profile-picture" />
            </div>
            <div className="name-location">
              <Link href="">
                <a>username</a>
              </Link>
              <div className="text-icon">
                <SlLocationPin className="i" />
                <p>Ikpoba Okha</p>
              </div>
            </div>
          </div>
          <div className="main-content-ad-items-image">
            <img src="/assets/images/women.png" alt="slider" />
          </div>

          <Link href="">
            <a className="main-content-category-tag">
              <BsFillTagFill className="i" />
              <p>mobile phones & assesories</p>
            </a>
          </Link>

          <div className="main-title">
            <p>playstation 5 with two controllers</p>
          </div>
          <div className="main-price">
            <p>&#8358; {(1000000).toLocaleString()}</p>
          </div>
          <div className="likes-comments">
            <p>3 comments</p>
            <p>2 likes</p>
            <button>
              <AiFillHeart className="i" />
            </button>
          </div>
          <div className="view-ad">
            <Link href="">
              <a>
                <p> View</p>
                <AiFillEye className="i" />
              </a>
            </Link>
          </div>
        </div>
        <div className="main-content-ad-items">
          <div className="main-content-ad-items-header">
            <div className="image">
              <img src="/assets/images/p.svg" alt="profile-picture" />
            </div>
            <div className="name-location">
              <Link href="">
                <a>username</a>
              </Link>
              <div className="text-icon">
                <SlLocationPin className="i" />
                <p>Ikpoba Okha</p>
              </div>
            </div>
          </div>
          <div className="main-content-ad-items-image">
            <img src="/assets/images/men.jpeg" alt="slider" />
          </div>

          <Link href="">
            <a className="main-content-category-tag">
              <BsFillTagFill className="i" />
              <p>mobile phones & assesories</p>
            </a>
          </Link>

          <div className="main-title">
            <p>playstation 5 with two controllers</p>
          </div>
          <div className="main-price">
            <p>&#8358; {(1000000).toLocaleString()}</p>
          </div>
          <div className="likes-comments">
            <p>3 comments</p>
            <p>2 likes</p>
            <button>
              <AiFillHeart className="i" />
            </button>
          </div>
          <div className="view-ad">
            <Link href="">
              <a>
                <p> View</p>
                <AiFillEye className="i" />
              </a>
            </Link>
          </div>
        </div>
        <div className="main-content-ad-items">
          <div className="main-content-ad-items-header">
            <div className="image">
              <img src="/assets/images/p.svg" alt="profile-picture" />
            </div>
            <div className="name-location">
              <Link href="">
                <a>username</a>
              </Link>
              <div className="text-icon">
                <SlLocationPin className="i" />
                <p>Ikpoba Okha</p>
              </div>
            </div>
          </div>
          <div className="main-content-ad-items-image">
            <img src="/assets/images/laptop.jpeg" alt="slider" />
          </div>

          <Link href="">
            <a className="main-content-category-tag">
              <BsFillTagFill className="i" />
              <p>mobile phones & assesories</p>
            </a>
          </Link>

          <div className="main-title">
            <p>playstation 5 with two controllers</p>
          </div>
          <div className="main-price">
            <p>&#8358; {(1000000).toLocaleString()}</p>
          </div>
          <div className="likes-comments">
            <p>3 comments</p>
            <p>2 likes</p>
            <button>
              <AiFillHeart className="i" />
            </button>
          </div>
          <div className="view-ad">
            <Link href="">
              <a>
                <p> View</p>
                <AiFillEye className="i" />
              </a>
            </Link>
          </div>
        </div>
        <div className="main-content-ad-items">
          <div className="main-content-ad-items-header">
            <div className="image">
              <img src="/assets/images/p.svg" alt="profile-picture" />
            </div>
            <div className="name-location">
              <Link href="">
                <a>username</a>
              </Link>
              <div className="text-icon">
                <SlLocationPin className="i" />
                <p>Ikpoba Okha</p>
              </div>
            </div>
          </div>
          <div className="main-content-ad-items-image">
            <img src="/assets/images/chair.jpeg" alt="slider" />
          </div>

          <Link href="">
            <a className="main-content-category-tag">
              <BsFillTagFill className="i" />
              <p>mobile phones & assesories</p>
            </a>
          </Link>

          <div className="main-title">
            <p>playstation 5 with two controllers</p>
          </div>
          <div className="main-price">
            <p>&#8358; {(1000000).toLocaleString()}</p>
          </div>
          <div className="likes-comments">
            <p>3 comments</p>
            <p>2 likes</p>
            <button>
              <AiFillHeart className="i" />
            </button>
          </div>
          <div className="view-ad">
            <Link href="">
              <a>
                <p> View</p>
                <AiFillEye className="i" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="load-more-container">
        <button>Load More</button>
      </div>
      <div style={{padding:'10px 0'}}></div>
    </div>
  );
};

export default FavoriteAdList;
