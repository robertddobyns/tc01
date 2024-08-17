import { useState } from "react";
import { Button, Drawer, styled } from "@mui/material";

import "./mobile-footer.css";
import DrawerContent from "./DrawerContent";

export default function MobileFooter() {

    const [open, setOpen] = useState(false);

  return (
    <footer className="footer">
      <DrawerButton onClick={() => setOpen(true)}>Contact Us!</DrawerButton>
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
        backgroundColor: "var(--darkBlue)",
        fontSize: '1.5em',
        color: 'white'
    },
    [props.theme.breakpoints.up('sm')]: {
        display: 'none'
    },

}));
