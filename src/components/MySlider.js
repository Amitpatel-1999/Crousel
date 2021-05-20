import React, { useState } from "react";
import { SlideData } from "./SlideData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const MySlider = ({ slide }) => {
  const [current, setcurrent] = useState(0);
  const length = slide.length;

  const prev = () => {
    setcurrent(current === 0 ? length - 1 : current - 1);
    console.log(current);
  };

  const next = () => {
    setcurrent(current === length - 1 ? 0 : current + 1);
    console.log(current);
  };

  return (
    <section className="container">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prev} />
      <FaArrowAltCircleRight className="right-arrow" onClick={next} />
      <div className="crousel-1">
        {SlideData.map((slide, index) => {
          var currentx = 0;
          if (current === 0) {
            currentx = length - 1;
          } else {
            currentx = current - 1;
          }
          return (
            <div
              className={index === currentx ? "slide active" : slide}
              key={index}
            >
              {index === currentx && (
                <img src={slide.image} alt="Images" className="slide-1-image" />
              )}
            </div>
          );
        })}
      </div>

      <div className="crousel-2">
        {SlideData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : slide}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="Images" className="slide-2-image" />
              )}
            </div>
          );
        })}
      </div>

      <div className="crousel-3">
        {SlideData.map((slide, index) => {
          var currentx = 0;
          if (current === length - 1) {
            currentx = 0;
          } else {
            currentx = current + 1;
          }
          return (
            <div
              className={index === currentx ? "slide active" : slide}
              key={index}
            >
              {index === currentx && (
                <img src={slide.image} alt="Images" className="slide-3-image" />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MySlider;
