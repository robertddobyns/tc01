import { useContext } from "react";
import { styled } from "@mui/material";
import line from "../../assets/HL.svg";
import './description.css'
import { ColorContext } from "../../App";

export default function Description() {

  const[colorTheme, setColorTheme] = useContext(ColorContext);

  const handleTheme = () => {
    switch(colorTheme) {
      case 'blue':
        return 'subText-blue';
      case 'white':
        return  'subText-white';
      case 'dark':
        return 'subText-dark'
    }
  }

  return (
    <Section>
      <DividingLine src={line} alt="horizontal line" />
      <Title>The Midwest&rsquo;s Premier Mobile Bar</Title>
      <div className={handleTheme()}>Full Service Bartending For Any Occassion</div>
      <DividingLine src={line} alt="horizontal line" />
    </Section>
  );
}

const Title = styled('div')(props => ({
  [props.theme.breakpoints.up('xs')]: {
    fontSize: '1.5em'
  },
  [props.theme.breakpoints.up('sm')]: {
    fontSize: '2em'
  },
}))

const Section = styled('section')(props => ({
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [props.theme.breakpoints.up('xs')]: {
    marginTop: '0px'
  },
  [props.theme.breakpoints.up('md')]: {
    marginTop: '0px'
  },
}))

const DividingLine = styled('img')(props => ({
  [props.theme.breakpoints.up('xs')]: {
    width: '95vw',
    margin: '20px'
  },
  [props.theme.breakpoints.up('sm')]: {
    width: '60vw',
    margin: '30px'
  },
}))
