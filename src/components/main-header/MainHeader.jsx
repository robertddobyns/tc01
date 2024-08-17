import { styled } from '@mui/material'
import logo from '../../assets/TextLogo.svg'
import DesktopContact from './DesktopContact'
import './main-header.css'

export default function MainHeader() {
  return (
    <header className='header'>
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