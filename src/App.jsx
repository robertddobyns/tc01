import { createContext, useState } from "react";
import {styled} from '@mui/material'
import "./App.css";
import Description from "./components/description/Description";
import MainHeader from "./components/main-header/MainHeader";
import MobileFooter from "./components/main-footer/MobileFooter";
import PackageContainer from "./components/main-body/package-container/PackageContainer";
import {
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import MobileSlider from "./components/mobile-slider/MobileSlider";

export const ColorContext = createContext();

function App() {
  const [colorTheme, setColorTheme] = useState("blue");

  const handleColorThemeChange = (event) => {
    setColorTheme(event.target.value)
  }

  const handleTheme = () => {
    switch(colorTheme) {
      case 'blue':
        return 'main-blue';
      case 'white':
        return  'main-white';
      case 'dark': 
      return 'main-dark';
    }
  }

  return (
    <ColorContext.Provider value={[colorTheme, setColorTheme]}>
      <main className={handleTheme()}>
        <FormControl sx={{position: 'absolute', top: 0, left: 0, backgroundColor: 'rgb(0,255,0)'}}>
          <ToggleButtonGroup
            size='small'
            aria-labelledby="Color-Label-Group"
            name="Color-Label-Group"
            value={colorTheme}
            onChange={handleColorThemeChange}
          >
            <ToggleButton value='blue' key='blue'>Blue</ToggleButton>
            <ToggleButton value='white' key='white'>White</ToggleButton>
            <ToggleButton value='dark' key='dark'>Dark</ToggleButton>
          </ToggleButtonGroup>
        </FormControl>
        <MainHeader />
        <Description />
        <PackageContainer />
        <MobileSliderContainer>
          <MobileSlider />
        </MobileSliderContainer>
        <MobileFooter />
      </main>
    </ColorContext.Provider>
  );
}

export default App;

const MobileSliderContainer = styled('div')((props) => ({
  [props.theme.breakpoints.up('xs')]: {
     display: 'block'
  },
  [props.theme.breakpoints.up('sm')]: {
      display: 'none'
  },

}));
