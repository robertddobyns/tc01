import { styled } from "@mui/material";
import React, { useContext } from "react";
import { ColorContext } from "../../../App";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Package from "../packages/Package";

import Image1 from "../../../assets/photos/demo1.jpg";
import Image2 from "../../../assets/photos/demo2.jpg";
import Image3 from "../../../assets/photos/demo3.jpg";
import Image4 from "../../../assets/photos/demo4.jpg";
import Image5 from "../../../assets/photos/demo5.jpg";
import Image6 from "../../../assets/photos/demo6.jpg";
import Image7 from "../../../assets/photos/demo7.jpg";
import Image8 from "../../../assets/photos/demo8.jpg";
import Image9 from "../../../assets/photos/demo9.jpg";
import Image10 from "../../../assets/photos/demo10.jpg";
import Image11 from "../../../assets/photos/demo11.jpg";
import Image12 from "../../../assets/photos/demo12.jpg";
import Image13 from "../../../assets/photos/demo13.jpg";
import Image14 from "../../../assets/photos/demo14.jpg";
import Image15 from "../../../assets/photos/demo15.jpg";

export default function PackageContainer() {
  const [colorTheme, setColorTheme] = useContext(ColorContext);

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
    <Container>
      <Column1>
        <Slider {...sliderSettings}>
          <img src={Image9} alt="Bar staff with umbrellas" />
          <img src={Image10} alt="Smiling Bar staff with cooler" />
          <img src={Image11} alt="Bar set up" />
          <img src={Image12} alt="Signature drinks" />
          <img src={Image13} alt="Married couple on bar" />
          <img src={Image14} alt="Bar staff assisting patron" />
          <img src={Image15} alt="Smiling bar staff holding drinks" />
          <img src={Image1} alt="Bar staff" />
          <img src={Image2} alt="Bar staff" />
          <img src={Image3} alt="Welcoming wedding sign" />
          <img src={Image4} alt="Bar staff showing peace sign" />
          <img src={Image5} alt="Bar set up" />
          <img src={Image6} alt="Bar staff with hands on hip" />
          <img src={Image7} alt="Smiling Bar staff" />
          <img src={Image8} alt="Bar staff standing behind bar" />
        </Slider>
        <Slider {...sliderSettings}>
          <img src={Image1} alt="Bar staff" />
          <img src={Image2} alt="Bar staff" />
          <img src={Image3} alt="Welcoming wedding sign" />
          <img src={Image4} alt="Bar staff showing peace sign" />
          <img src={Image5} alt="Bar set up" />
          <img src={Image6} alt="Bar staff with hands on hip" />
          <img src={Image7} alt="Smiling Bar staff" />
          <img src={Image8} alt="Bar staff standing behind bar" />
          <img src={Image9} alt="Bar staff with umbrellas" />
          <img src={Image10} alt="Smiling Bar staff with cooler" />
          <img src={Image11} alt="Bar set up" />
          <img src={Image12} alt="Signature drinks" />
          <img src={Image13} alt="Married couple on bar" />
          <img src={Image14} alt="Bar staff assisting patron" />
          <img src={Image15} alt="Smiling bar staff holding drinks" />
        </Slider>
        <Slider {...sliderSettings}>
          <img src={Image6} alt="Bar staff with hands on hip" />
          <img src={Image7} alt="Smiling Bar staff" />
          <img src={Image8} alt="Bar staff standing behind bar" />
          <img src={Image9} alt="Bar staff with umbrellas" />
          <img src={Image10} alt="Smiling Bar staff with cooler" />
          <img src={Image3} alt="Welcoming wedding sign" />
          <img src={Image4} alt="Bar staff showing peace sign" />
          <img src={Image5} alt="Bar set up" />
          <img src={Image11} alt="Bar set up" />
          <img src={Image12} alt="Signature drinks" />
          <img src={Image13} alt="Married couple on bar" />
          <img src={Image14} alt="Bar staff assisting patron" />
          <img src={Image15} alt="Smiling bar staff holding drinks" />
          <img src={Image1} alt="Bar staff" />
          <img src={Image2} alt="Bar staff" />
        </Slider>
      </Column1>
      <PackageColumn>
        <Package />
      </PackageColumn>
      <Column3>
        <Slider {...sliderSettings}>
          <img src={Image6} alt="Bar staff with hands on hip" />
          <img src={Image7} alt="Smiling Bar staff" />
          <img src={Image8} alt="Bar staff standing behind bar" />
          <img src={Image9} alt="Bar staff with umbrellas" />
          <img src={Image10} alt="Smiling Bar staff with cooler" />
          <img src={Image3} alt="Welcoming wedding sign" />
          <img src={Image4} alt="Bar staff showing peace sign" />
          <img src={Image5} alt="Bar set up" />
          <img src={Image11} alt="Bar set up" />
          <img src={Image12} alt="Signature drinks" />
          <img src={Image13} alt="Married couple on bar" />
          <img src={Image14} alt="Bar staff assisting patron" />
          <img src={Image15} alt="Smiling bar staff holding drinks" />
          <img src={Image1} alt="Bar staff" />
          <img src={Image2} alt="Bar staff" />
        </Slider>
        <Slider {...sliderSettings}>
          <img src={Image9} alt="Bar staff with umbrellas" />
          <img src={Image10} alt="Smiling Bar staff with cooler" />
          <img src={Image11} alt="Bar set up" />
          <img src={Image12} alt="Signature drinks" />
          <img src={Image13} alt="Married couple on bar" />
          <img src={Image14} alt="Bar staff assisting patron" />
          <img src={Image15} alt="Smiling bar staff holding drinks" />
          <img src={Image1} alt="Bar staff" />
          <img src={Image2} alt="Bar staff" />
          <img src={Image3} alt="Welcoming wedding sign" />
          <img src={Image4} alt="Bar staff showing peace sign" />
          <img src={Image5} alt="Bar set up" />
          <img src={Image6} alt="Bar staff with hands on hip" />
          <img src={Image7} alt="Smiling Bar staff" />
          <img src={Image8} alt="Bar staff standing behind bar" />
        </Slider>
        <Slider {...sliderSettings}>
          <img src={Image1} alt="Bar staff" />
          <img src={Image2} alt="Bar staff" />
          <img src={Image3} alt="Welcoming wedding sign" />
          <img src={Image4} alt="Bar staff showing peace sign" />
          <img src={Image5} alt="Bar set up" />
          <img src={Image6} alt="Bar staff with hands on hip" />
          <img src={Image7} alt="Smiling Bar staff" />
          <img src={Image8} alt="Bar staff standing behind bar" />
          <img src={Image9} alt="Bar staff with umbrellas" />
          <img src={Image10} alt="Smiling Bar staff with cooler" />
          <img src={Image11} alt="Bar set up" />
          <img src={Image12} alt="Signature drinks" />
          <img src={Image13} alt="Married couple on bar" />
          <img src={Image14} alt="Bar staff assisting patron" />
          <img src={Image15} alt="Smiling bar staff holding drinks" />
        </Slider>
      </Column3>
    </Container>
  );
}

const Container = styled("main")((props) => ({
  display: "flex",
  justifyContent: "space-around",
  maWidth: "100%",
}));

const Column1 = styled("div")((props) => ({
  [props.theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [props.theme.breakpoints.up("md")]: {
    display: "block",
    width: "20%",
  },
}));
const PackageColumn = styled("div")((props) => ({
  [props.theme.breakpoints.up("xs")]: {
    width: "100%",
  },
  [props.theme.breakpoints.up("sm")]: {
    width: "60%",
  },
  [props.theme.breakpoints.up("md")]: {
    width: "50%",
  },
}));
const Column3 = styled("div")((props) => ({
  [props.theme.breakpoints.up("xs")]: {
    display: "none",
  },
  [props.theme.breakpoints.up("sm")]: {
    display: "block",
    width: "40%",
  },
  [props.theme.breakpoints.up("md")]: {
    width: "20%",
  },
}));

const Image = styled("img")((props) => ({
  width: "100%",
}));
