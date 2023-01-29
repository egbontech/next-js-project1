import React, { useContext, useEffect } from "react";
import { ProductViewContext } from "../../../pages/posts/[product]";

const PostImages = ({ options }) => {
  const context = useContext(ProductViewContext);

  const updateSlide = (e) => {
    context.setSlideIndex(e);
  };
  const nextSlide = () => {
    context.slideIndex === options.length - 1
      ? context.setSlideIndex(0)
      : context.setSlideIndex(context.slideIndex + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [context.slideIndex]);
  return (
    <>
      <div className="product-images">
        <img src={options[context.slideIndex].url} alt="" onClick={() => context.setOpenGalleryModal(true)}/>
      </div>
      <div className="product-image-gallery">
        {options.map((item, index) => {
          return (
            <div
              className={
                context.slideIndex == index
                  ? "gallery-item gallery-image-border"
                  : "gallery-item "
              }
              key={index}
              onClick={(e) => updateSlide(index)}
            >
              <img src={item.url} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PostImages;
