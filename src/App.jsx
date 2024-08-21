import { createContext, useState } from "react";
import "./App.css";
import Description from "./components/description/Description";
import MainHeader from "./components/main-header/MainHeader";
import MobileFooter from "./components/main-footer/MobileFooter";
import PackageContainer from "./components/main-body/package-container/PackageContainer";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

export const ColorContext = createContext();

function App() {
  const [colorTheme, setColorTheme] = useState("blue");

  const handleColorThemeChange = (event) => {
    setColorTheme(event.target.value)
  }

  return (
    <ColorContext.Provider value={[colorTheme, setColorTheme]}>
      <main className={colorTheme === "blue" ? "main-blue" : "main-white"}>
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
          </ToggleButtonGroup>
        </FormControl>
        <MainHeader />
        <Description />
        <PackageContainer />
        <MobileFooter />
      </main>
    </ColorContext.Provider>
  );
}

export default App;
