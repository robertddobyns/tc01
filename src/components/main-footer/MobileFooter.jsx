import { useState, useContext } from "react";
import { Button, Drawer, styled } from "@mui/material";
import { ColorContext } from "../../App";

import "./mobile-footer.css";
import DrawerContent from "../main-footer/DrawerContent";

export default function MobileFooter() {

    const [open, setOpen] = useState(false);
  const [colorTheme, setColorTheme] = useContext(ColorContext);

  return (
    <footer className="footer">
      <DrawerButton colorTheme={colorTheme} onClick={() => setOpen(true)}>Contact Us!</DrawerButton>
      <Drawer open={open} onClose={() => setOpen(false) } anchor={'bottom'}>
        <DrawerContent />
      </Drawer>
    </footer>
  );
}

const DrawerButton = styled(Button)((props) => ({
    [props.theme.breakpoints.up('xs')]: {
        width: "100vw",
        height: "75px",
        fontSize: '1.5em',
        color: 'white',
        backgroundColor: props.colorTheme === 'blue' ? 'var(--darkBlue)' : 'black'
    },
    [props.theme.breakpoints.up('md')]: {
        display: 'none'
    },

}));
