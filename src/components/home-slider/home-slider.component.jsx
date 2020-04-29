import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./home-slider.styles.scss";
import ImgOne from "../../assets/amanda-vick-ohWf6YuzOQk-unsplash.jpg";
import ImgTwo from "../../assets/felipe-galvan-AhfrA5VQNpM-unsplash.jpg";
import ImgThree from "../../assets/angela-bailey-jlo7Bf4tUoY-unsplash.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = (props) => {
  const slides = [
    {
      img: ImgOne,
      lineOne: "Be hip this summer",
      lineTwo: "Choose what you like",
      linkto: "/shop",
    },
    {
      img: ImgTwo,
      lineOne: "Refreshing style",
      lineTwo: "Awesome discounts and surprises",
      linkto: "/shop",
    },
    {
      img: ImgThree,
      lineOne: "Start Your Journey",
      lineTwo: "Bringing Fashion into your homes",
      linkto: "/shop",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: false,
  };

  const generateSlides = () =>
    slides
      ? slides.map((item, i) => (
          <div key={i}>
            <div
              className="slider-banner"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item.img})`,
                minheight: "90vh",
              }}
            >
              <div className="slider-title">
                <div className="slider-text">{item.lineOne}</div>
                <div className="slider-underline">{item.lineTwo}</div>
                <div className="sliderbutton-container">
                  <Link to="/shop" className="slider-button">
                    Shop now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      : null;

  return (
    <div className="slider-container">
      <Slider {...settings}>{generateSlides()}</Slider>
    </div>
  );
};

export default HomeSlider;
