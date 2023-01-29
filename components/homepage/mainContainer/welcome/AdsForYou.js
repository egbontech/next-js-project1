import Link from "next/link";
import React from "react";
import { BsFillTagFill } from "react-icons/Bs";
import { AiFillEye, AiFillHeart } from "react-icons/ai";
import { SlLocationPin } from "react-icons/Sl";
import Tippy from "@tippyjs/react";
import { BsQuestionCircle } from "react-icons/Bs";

const AdsForYou = () => {
  return (   
  <div className="main-content-ad-container">
    <div className="header-text-icon">
      <h2>Recommneded For You </h2>
      <Tippy
        content={
          <span style={{ fontSize: "10px" }}>
            Ads from pages you follow
          </span>
        }
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
          <Link href="/posts/test1">
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
          <Link href="/posts/test2">
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
          <Link href="/posts/test3">
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
          <Link href="/posts/test4">
            <a>
              <p> View</p>
              <AiFillEye className="i" />
            </a>
          </Link>
        </div>
      </div>
    </div>
    <div className="load-more-container">
      <button>
        Load More
      </button>
    </div>
  </div>
  );
};

export default AdsForYou;
