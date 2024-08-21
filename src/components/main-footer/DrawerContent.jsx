import { useContext } from 'react';
import './drawer-content.css'
import { Typography } from "@mui/material";
import { ColorContext } from '../../App';

export default function DrawerContent() {

  const [colorTheme, setColorTheme] = useContext(ColorContext);

  return (
    <div className="drawerContent">
      <Typography sx={{textAlign: 'center', color: 'var(--darkBlue)'}} variant="h5">We Would Love To Hear From You!</Typography>
       <div className="name">Sabrina Hughes: <a className={colorTheme === 'blue' ? 'links-blue' : 'links-white'} href="tel:402-238-8150">(402)238-8150</a></div>
       <div className="name">Nichoel Stuhr: <a className={colorTheme === 'blue' ? 'links-blue' : 'links-white'} href="tel:402-312-0526">(402)312-0526</a></div>
       <div className="name">Email: <a className={colorTheme === 'blue' ? 'links-blue' : 'links-white'} href="mailto:cheers@thetincania.com">cheers@thetincania.com</a></div>
    </div>
  );
}
