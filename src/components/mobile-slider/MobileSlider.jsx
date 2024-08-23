import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { styled } from "@mui/material";

import Image1 from "../../assets/photos/demo1.jpg";
import Image2 from "../../assets/photos/demo2.jpg";
import Image3 from "../../assets/photos/demo3.jpg";
import Image4 from "../../assets/photos/demo4.jpg";
import Image5 from "../../assets/photos/demo5.jpg";

export default function MobileSlider() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...sliderSettings}>
      <img src={Image1} alt="image 1" />
      <img src={Image2} alt="image 2" />
      <img src={Image3} alt="image 3" />
      <img src={Image4} alt="image 4" />
      <img src={Image5} alt="image 5" />
    </Slider>
  );
}
