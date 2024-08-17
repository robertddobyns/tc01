import './drawer-content.css'
import { Typography } from "@mui/material";

export default function DrawerContent() {
  return (
    <div className="drawerContent">
      <Typography sx={{textAlign: 'center', color: 'var(--darkBlue)'}} variant="h5">We Would Love To Hear From You!</Typography>
       <div className="name">Sabrina Hughes: <a href="tel:402-238-8150">(402)238-8150</a></div>
       <div className="name">Nichoel Stuhr: <a href="tel:402-312-0526">(402)312-0526</a></div>
       <div className="name">Email: <a href="mailto:cheers@thetincania.com">cheers@thetincania.com</a></div>
    </div>
  );
}
