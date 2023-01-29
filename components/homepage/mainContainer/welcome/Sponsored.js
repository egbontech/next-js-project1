import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Sponsored = () => {
  return (
    <>
      <div className="sponsored-container-header">
        <div className="header">
          <h2>Hot Ads</h2>
        </div>
      </div>
      <div className="sponsored-container snaps">
        <Link href="/posts/test5">
          <a className="sponsored-item">
            <div className="image">
              <img src="/assets/images/phone.jpeg" alt="slider" />
            </div>
            <div className="title">
              <p>
                <Skeleton />
              </p>
            </div>
            <div className="price">
              <p>
                <Skeleton
                  style={{ width: "90px", height: "12px", marginLeft: "5px" }}
                />
              </p>
            </div>
          </a>
        </Link>
        <Link href="/posts/test6">
          <a className="sponsored-item">
            <div className="image">
              <img src="/assets/images/men.jpeg" alt="slider" />
            </div>
            <div className="title">
              <p>playstation 5 with two controllers with two controllers </p>
            </div>
            <div className="price">
              <p>&#8358; {(1000000).toLocaleString()}</p>
            </div>
          </a>
        </Link>
        <Link href="/posts/test7">
          <a className="sponsored-item">
            <div className="image">
              <img src="/assets/images/chair.jpeg" alt="slider" />
            </div>
            <div className="title">
              <p>playstation 5 with two controllers with two controllers</p>
            </div>
            <div className="price">
              <p>&#8358; {(7000000).toLocaleString()}</p>
            </div>
          </a>
        </Link>
        <Link href="">
          <a className="sponsored-item">
            <div className="image">
              <img src="/assets/images/phone.jpeg" alt="slider" />
            </div>
            <div className="title">
              <p>playstation 5 with two controllers with two controllers</p>
            </div>
            <div className="price">
              <p>&#8358; {(1000000).toLocaleString()}</p>
            </div>
          </a>
        </Link>
        <Link href="">
          <a className="sponsored-item">
            <div className="image">
              <img src="/assets/images/women.png" alt="slider" />
            </div>
            <div className="title">
              <p>
                Website design,web appliaction and mobile app development in edo
                state
              </p>
            </div>
            <div className="price">
              <p>&#8358; {(4000).toLocaleString()}</p>
            </div>
          </a>
        </Link>
        <Link href="">
          <a className="sponsored-item">
            <div className="image">
              <img src="/assets/images/women.png" alt="slider" />
            </div>
            <div className="title">
              <p>playstation 5 with two controllers with two controllers</p>
            </div>
            <div className="price">
              <p>&#8358; {(1000).toLocaleString()}</p>
            </div>
          </a>
        </Link>
        <Link href="">
          <a className="sponsored-item">
            <div className="image">
              <img src="/assets/images/women.png" alt="slider" />
            </div>
            <div className="title">
              <p>playstation 5 with two controllers with two controllers</p>
            </div>
            <div className="price">
              <p>&#8358; {(110000).toLocaleString()}</p>
            </div>
          </a>
        </Link>
        <Link href="">
          <a className="sponsored-item">
            <div className="image">
              <img src="/assets/images/women.png" alt="slider" />
            </div>
            <div className="title">
              <p>playstation 5 with two controllers with two controllers</p>
            </div>
            <div className="price">
              <p>&#8358; {(50000).toLocaleString()}</p>
            </div>
          </a>
        </Link>
        <Link href="">
          <a className="sponsored-item">
            <div className="image">
              <img src="/assets/images/laptop.jpeg" alt="slider" />
            </div>
            <div className="title">
              <p>playstation 5 with two controllers with two controllers</p>
            </div>
            <div className="price">
              <p>Contact For Price</p>
            </div>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Sponsored;
