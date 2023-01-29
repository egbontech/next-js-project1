import Link from "next/link";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item,index) => (
      <div className="main-content-ad-items" key={index}>
        <div className="main-content-ad-items-header">
          <div
            className="image"
            style={{ marginBottom: "15px", marginRight: "10px" }}
          >
            <Skeleton circle height={35} width={35} />
          </div>
          <div className="name-location">
           <Skeleton style={{ width: "120px", height: "12px" }} />
           <Skeleton style={{ width: "90px", height: "12px" }} />
          </div>
        </div>
        <div className="main-content-ad-items-image">
          <Skeleton height={140} />
        </div>

        <Skeleton style={{ width: "100px", height: "12px" }} />

        <div className="main-title">
          <p>
            <Skeleton style={{ width: "140px", height: "12px" }} />
          </p>
        </div>
        <div className="main-price">
          <p>
            <Skeleton style={{ width: "90px", height: "12px" }} />
          </p>
        </div>
        <div className="main-title">
          <p>
            <Skeleton />
          </p>
        </div>
      </div>
    ));
};

export default CardSkeleton;
