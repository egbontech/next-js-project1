import React, { useContext } from "react";
import {
  AiFillCamera,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { MdClose } from "react-icons/Md";
import { ProductViewContext } from "../../../pages/posts/[product]";

const SliderModal = ({ options, openModal }) => {
  const context = useContext(ProductViewContext);

  const nextSlide = () => {
    context.slideIndex === options.length - 1
      ? context.setSlideIndex(0)
      : context.setSlideIndex(context.slideIndex + 1);
  };

  const prevSlide = () => {
    context.slideIndex === 0
      ? context.setSlideIndex(options.length - 1)
      : context.setSlideIndex(context.slideIndex - 1);
  };
  if (!openModal) return false;
  return (
    <div className="image-gallery-overlay">
      <div className="image-gallery">
        <img src={options[context.slideIndex].url} alt="" />
        <button className="btn-slide next">
          <AiOutlineArrowRight className="i" onClick={nextSlide} />
        </button>
        <button className="btn-slide prev">
          <AiOutlineArrowLeft className="i" onClick={prevSlide} />
        </button>
        <button className="cancel">
          <MdClose
            className="i"
            onClick={() => context.setOpenGalleryModal(false)}
          />
        </button>
        <div className="details">
          <AiFillCamera className="i" />
          <p>
            {context.slideIndex + 1}/{options.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderModal;
