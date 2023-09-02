import React from "react";
import Slider from "react-slick";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./index.m.css";

export default function MainSlider({ children }) {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const prevSlide = () => {
    sliderRef.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.slickNext();
  };

  let sliderRef = null;

  return (
    <>
      <Slider {...settings} ref={(slider) => (sliderRef = slider)}>
        {children}
      </Slider>
      <div className="slider-arrows mb-5 mx-3">
        <button
          className="slider-arrow prev rounded-circle py-3 bg-secondary text-light fw-bold"
          onClick={prevSlide}
        >
          <ArrowBackIcon />
        </button>
        <button
          className="slider-arrow next rounded-circle py-3 bg-secondary text-light fw-bold"
          onClick={nextSlide}
        >
          <ArrowForwardIcon />
        </button>
      </div>
    </>
  );
}
