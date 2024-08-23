import { useContext } from 'react'
import { styled } from '@mui/material'
import logo from '../../assets/TextLogo.svg'
import DesktopContact from './DesktopContact'
import { ColorContext } from '../../App'

import './main-header.css'


export default function MainHeader() {

const [colorTheme, setColorTheme] = useContext(ColorContext);

const handleTheme = () => {
    switch(colorTheme) {
      case 'blue':
        return 'header-blue';
      case 'white':
        return  'header-white';
      case 'dark':
        return 'header-dark'
    }
  }

  return (
    <header className={handleTheme()}>
        <Logo src={logo} alt="Tin Can logo" />
        <DesktopContact />
    </header>
  )
}

const Logo = styled('img')(props => ({
    [props.theme.breakpoints.up('xs')]: {
        width: '80vw',
        marginTop: '20px',
    },
    [props.theme.breakpoints.up('sm')]: {
        width: '50vw',
        marginTop: '20px'
    },
    [props.theme.breakpoints.up('md')]: {
        width: '50vw',
    },
}))