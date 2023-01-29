import React from 'react'
import Link from "next/link";
import { MdOutlineFavoriteBorder } from "react-icons/Md";

const CommentList = () => {
  return (
    <div className="comment-body-container">
    <div className="image">
      <img src="/assets/images/p.jpg" alt="" />
    </div>
    <div className="comment-body">
      <Link href="">
        <a>username</a>
      </Link>
      <div>
        <div className="comment">
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sunt suscipitlorem numquam
            </p>
          </div>
          <div className="button-container">
            <button>
              <MdOutlineFavoriteBorder className="i" />
            </button>
            <p>24</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CommentList
