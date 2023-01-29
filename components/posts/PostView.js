import React, { useContext } from "react";
import Goback from "../general/Goback";
import Link from "next/link";
import { BsFillTagFill } from "react-icons/Bs";
import { HiOutlineShare } from "react-icons/Hi";
import { FaWhatsapp } from "react-icons/Fa";
import { RiShareForwardLine } from "react-icons/Ri";
import { AiOutlineInfoCircle, AiOutlinePhone } from "react-icons/ai";
import { ProductViewContext } from "../../pages/posts/[product]";
import { MdOutlineFavoriteBorder } from "react-icons/Md";
import CommentInput from "./posts/CommentInput";
import CommentList from "./posts/CommentList";
import Footer from "../general/Footer";
import PostImages from "./posts/PostImages";

const PostView = ({ pageName ,options}) => {
  
  const context = useContext(ProductViewContext);

  return (
    <div className="main-content">
      <div className="profile-settings-container">
        <div className="back-button-header-container">
          <Goback />
          <p>{pageName}&apos;s Post</p>
        </div>
       <PostImages options={options}/>
        <div style={{ padding: "0 15px" }}>
          <Link href="/">
            <a className="main-content-category-tag">
              <BsFillTagFill className="i" />
              <p>mobile phones & assesories</p>
            </a>
          </Link>
          <div className="product-title">
            <h2>
              Graphics design and many other services Graphics design and many
              other services
            </h2>
          </div>
          <button
            className="see-post-description"
            onClick={() => context.setOpenDescModalContext(true)}
          >
            <p>More Detials</p>
            <AiOutlineInfoCircle />
          </button>
          <div className="price-contact">
            <div className="price">
              <p> &#8358; {(1000000).toLocaleString()}</p>
            </div>
            <div className="contact-container">
              <div className="seller-contact">
               
              <p className="number">08073588951</p>
              </div>
            
                <div className="call-whatsapp-btn">
                  <Link href="tel:080">
                    <a className="text-icon">
                      <AiOutlinePhone className="i" />
                      <p>Call</p>
                    </a>
                  </Link>
                  <Link href="/">
                    <a className="text-icon" target="_blank">
                      <FaWhatsapp className="i" />
                      <p>Whatsapp</p>
                    </a>
                  </Link>
                </div>
            
            </div>
          </div>
          <div className="like-button-share-links">
            <div className="like-btn-container">
              <div className="like-btn">
                <button>
                  <MdOutlineFavoriteBorder className="i" />
                </button>

                <button>
                  <HiOutlineShare
                    className="i"
                    onClick={() => context.setOpenSocialModal(true)}
                  />
                </button>
              </div>
              <Link href="">
                <a className="like-link">5 like(s)</a>
              </Link>
            </div>
          </div>
          <CommentInput />
          <div style={{ marginBottom: "10px" }}>
            <Link href="">
              <a className="number-of-comments-box">comments(5)</a>
            </Link>
          </div>
          <div>
          <CommentList/>        
          <CommentList/>        
          <CommentList/>        
          <CommentList/>        
          <CommentList/>  
          </div>
             
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default PostView;
