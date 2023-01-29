import React, { useEffect, useState } from "react";
import SliderBtn from "./SliderBtn";
const options = [
  {
    url: "/assets/images/slide.jpeg",
  },

  {
    url: "/assets/images/cover.jpg",
  },
  {
    url: "/assets/images/chair.jpeg",
  },
];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const prevSlide = () => {
    slideIndex === 0
      ? setSlideIndex(options.length - 1)
      : setSlideIndex(slideIndex - 1);
  };
  const nextSlide = () => {
    slideIndex === options.length - 1
      ? setSlideIndex(0)
      : setSlideIndex(slideIndex + 1);
  };
  const updateSlide = (e) => {
    setSlideIndex(e);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex],nextSlide);
  return (
    <>
      <div className="slider">
        <img src={options[slideIndex].url} alt="slider" />
        <SliderBtn moveSlide={nextSlide} direction="next" />
        <SliderBtn moveSlide={prevSlide} direction="prev" />
        <div className="container-dots">
          {options.map((item, index) => {
            return (
              <div
                key={index}
                className={index == slideIndex ? "dot active" : "dot"}
                onClick={(e) => updateSlide(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
