import { styled } from '@mui/material'
import logo from '../../assets/TextLogo.svg'

export default function MainHeader() {
  return (
    <Header>
        <Logo src={logo} alt="Tin Can logo" />
    </Header>
  )
}


const Header = styled('header')(props =>({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [props.theme.breakpoints.up('sm')]: {
        // backgroundColor: 'yellow'
    },
    [props.theme.breakpoints.up('md')]: {
        // backgroundColor: 'lightblue'
    },
}))
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