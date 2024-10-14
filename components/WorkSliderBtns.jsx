"use client";
import React from "react";
import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyle, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyle}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <span className="sr-only">Previous</span>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <span className="sr-only">Next</span>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
