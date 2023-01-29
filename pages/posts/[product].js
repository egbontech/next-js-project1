import LeftSideBar from "../../components/homepage/LeftSidebar";
import RightSideBar from "../../components/homepage/RightSidebar";
import FrontEnd from "../../layouts/FrontEnd";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PostView from "../../components/posts/PostView";
import DescriptionModal from "../../components/posts/posts/DescriptionModal";
import { createContext } from "react";
import SocialLinkModal from "../../components/posts/posts/SocialLinkModal";
import SliderModal from "../../components/posts/posts/SliderModal";

export const ProductViewContext = createContext();

const options = [
  {
    url: "/assets/images/phone.jpeg",
  },

  {
    url: "/assets/images/women.png",
  },
  {
    url: "/assets/images/chair.jpeg",
  },
  {
    url: "/assets/images/men.jpeg",
  },
];

export default function Home() {
  const [pageName, setPageName] = useState("");
  const [Loading, setLoading] = useState(true);
  const [openDescModalContext, setOpenDescModalContext] = useState(false);
  const [openSocialModal, setOpenSocialModal] = useState(false);
  const [openGalleryModal,setOpenGalleryModal] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0);
  const router = useRouter();

  const { product } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    setPageName(product);
    setLoading(false);   
  }, [router.query.product, router.isReady,product]);

  if (Loading) {
    return (
      <>
        <FrontEnd>
          <div className="home-container">
            <LeftSideBar />
            <div className="main-content">
              <div className="profile-container">
                <h1>Loading</h1>
              </div>
            </div>
            <RightSideBar />
          </div>
        </FrontEnd>
      </>
    );
  } else {
    return (
      <>
        <ProductViewContext.Provider
          value={{
            openDescModalContext,
            setOpenDescModalContext,
            openSocialModal,
            setOpenSocialModal,
            slideIndex,
            setSlideIndex,
            openGalleryModal,
            setOpenGalleryModal
          }}
        >
          <FrontEnd>
            <SliderModal options={options} openModal = {openGalleryModal}/>
            <DescriptionModal openModal={openDescModalContext} />
            <SocialLinkModal openModal={openSocialModal} />
            
            <div className="home-container">
              <LeftSideBar />
              <PostView pageName={pageName} options={options}/>
              <RightSideBar />
            </div>
          </FrontEnd>
        </ProductViewContext.Provider>
      </>
    );
  }
}
