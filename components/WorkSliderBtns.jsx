"use client";
import React from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({
  containerStyle,
  btnStyles,
  iconsStyles,
  className,
}) => {
  const swiper = useSwiper();
  const iconClassName = iconsStyles || className;
  return (
    <div className={containerStyle}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <span className="sr-only">Previous</span>
        <PiCaretLeftBold className={iconClassName} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <span className="sr-only">Next</span>
        <PiCaretRightBold className={iconClassName} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
