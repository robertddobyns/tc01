import { useContext } from 'react';
import './drawer-content.css'
import { Typography } from "@mui/material";
import { ColorContext } from '../../App';

export default function DrawerContent() {

  const [colorTheme, setColorTheme] = useContext(ColorContext);

  const handleTheme = () => {
    switch(colorTheme) {
      case 'blue':
        return 'drawerContent-blue';
      case 'white':
        return  'drawerContent-white ';
      case 'dark':
        return 'drawerContent-dark'
    }
  }

  const handleTypography = () => {
    switch(colorTheme) {
      case 'blue':
        return {
          textAlign: 'center',
          color: 'var(--darkBlue)'
        };
      case 'white':
        return  {
          textAlign: 'center',
          color: 'black'
        };
      case 'dark':
        return {
          textAlign: 'center',
          color: 'white'
        }
    }
  }

  return (
    <div className={handleTheme()}>
      <Typography sx={handleTypography()} variant="h5">We Would Love To Hear From You!</Typography>
       <div className="name">Sabrina Hughes: <a className={handleTheme()} href="tel:402-238-8150">(402)238-8150</a></div>
       <div className="name">Nichoel Stuhr: <a className={handleTheme()} href="tel:402-312-0526">(402)312-0526</a></div>
       <div className="name">Email: <a className={handleTheme()} href="mailto:cheers@thetincania.com">cheers@thetincania.com</a></div>
    </div>
  );
}
