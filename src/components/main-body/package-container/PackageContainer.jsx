import { styled } from "@mui/material";
import React, {useContext} from "react";
import { ColorContext } from "../../../App";

import Package from "../packages/Package";

import Image1 from "../../../assets/photos/demo1.jpg";
import Image2 from "../../../assets/photos/demo2.jpg";
import Image3 from "../../../assets/photos/demo3.jpg";
import Image4 from "../../../assets/photos/demo4.jpg";
import Image5 from "../../../assets/photos/demo5.jpg";

export default function PackageContainer() {

  const [colorTheme, setColorTheme] = useContext(ColorContext);

  return (
    <Container>
      <Column1>
        <Image className={colorTheme === 'white' ? 'image-white': undefined} src={Image1} alt="image 1" />
        <Image className={colorTheme === 'white' ? 'image-white': undefined} src={Image2} alt="image 2" />
        <Image className={colorTheme === 'white' ? 'image-white': undefined} src={Image3} alt="image 3" />
        <Image className={colorTheme === 'white' ? 'image-white': undefined} src={Image4} alt="image 4" />
        <Image className={colorTheme === 'white' ? 'image-white': undefined} src={Image5} alt="image 5" />
      </Column1>
      <PackageColumn>
        <Package />
      </PackageColumn>
      <Column3>
        <Image className={colorTheme === 'white' ? 'image-white': undefined} src={Image5} alt="image 5" />
        <Image className={colorTheme === 'white' ? 'image-white': undefined} src={Image4} alt="image 4" />
        <Image className={colorTheme === 'white' ? 'image-white': undefined} src={Image2} alt="image 2" />
        <Image className={colorTheme === 'white' ? 'image-white': undefined} src={Image3} alt="image 3" />
        <Image className={colorTheme === 'white' ? 'image-white': undefined} src={Image1} alt="image 1" />
      </Column3>
    </Container>
  );
}

const Container = styled("main")((props) => ({
  display: "flex",
  justifyContent: "space-around",
  maWidth: '100%'
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
