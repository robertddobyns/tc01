import { styled } from '@mui/material'
import logo from '../../assets/TextLogo.svg'

export default function MainHeader() {
  return (
    <Header>
        <Logo src={logo} />
    </Header>
  )
}


const Header = styled('header')(props =>({
    width: '100%',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))
const Logo = styled('img')(props => ({
    [props.theme.breakpoints.up('xs')]: {
        marginTop: '20px',
        width: '80vw',
    },
    [props.theme.breakpoints.up('sm')]: {
        height: '200px',
    },
    [props.theme.breakpoints.up('md')]: {
        marginTop: '50px',
        height: '100px',
    },
}))