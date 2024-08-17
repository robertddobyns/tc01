import { styled } from '@mui/material'
import logo from '../../assets/icon.png'

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
    overflow: 'hidden',
}))
const Logo = styled('img')(props => ({
    [props.theme.breakpoints.up('xs')]: {
        height: '200px',
    },
    [props.theme.breakpoints.up('sm')]: {
        height: '300px',
    },
    [props.theme.breakpoints.up('md')]: {
        marginTop: '50px',
        height: '400px',
    },
}))