import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const SliderBtn = ({ moveSlide, direction }) => {
  return (
    <button
      className={direction == "prev" ? "btn-slide prev" : "btn-slide next"}
      onClick={moveSlide}
    >
      {direction == "prev" ? (
        <AiOutlineArrowLeft className="i" />
      ) : (
        <AiOutlineArrowRight className="i" />
      )}
    </button>
  );
};

export default SliderBtn;
