import React,{ useContext }from "react";
import { MdClose } from "react-icons/Md";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
  WhatsappShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from "react-share";
import { ProductViewContext } from "../../../pages/posts/[product]";



function SocialLinkModal({ openModal }) {

  const context = useContext(ProductViewContext)

  if (!openModal) return false;
  return (
    <div>
      <div className="desc-modal-overlay" onClick={() => context.setOpenSocialModal(false)}>
        <div className="desc-container social-modal"onClick={(e) => e.stopPropagation()}>
          <button className="button"onClick={() => context.setOpenSocialModal(false)}>
            <MdClose />
          </button>
          <div className="social-link-container">
            <div className="header">
              <h2>Share Post</h2>
            </div>
            <div className="icons">
              <FacebookShareButton url="egbontech.com" hashtag="#egbontech">
                <FacebookIcon size={50} round={true} />
              </FacebookShareButton>
              <TwitterShareButton url="egbontech.com" hashtag="#egbontech" title="I am sharing this egbontech post" hashtags={['egbon','test','wow']}>
                <TwitterIcon size={50} round={true} />
              </TwitterShareButton>
              <WhatsappShareButton url="egbontech.com" hashtag="#egbontech" title="I am sharing this egbontech post" >
                <WhatsappIcon size={50} round={true} />
              </WhatsappShareButton>
              <TelegramShareButton url="egbontech.com" hashtag="#egbontech"title="I am sharing this egbontech post">
                <TelegramIcon size={50} round={true} />
              </TelegramShareButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialLinkModal;
