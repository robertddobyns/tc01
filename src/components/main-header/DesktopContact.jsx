import { styled, } from '@mui/material'
import './desktop-contact.css'

export default function DesktopContact() {
  return (
    <DivStyled className="contact">
       <span>Sabrina Hughes: <a href="tel:402-238-8150">(402)238-8150</a></span>
       <span>Nichoel Stuhr: <a href="tel:402-312-0526">(402)312-0526</a></span>
       <span>Email: <a href="mailto:cheers@thetincania.com">cheers@thetincania.com</a></span>
    </DivStyled>
  )
}

const DivStyled = styled('div')(props => ({
    [props.theme.breakpoints.up('xs')]: {
        display: 'none'
    },
    [props.theme.breakpoints.up('md')]: {
        display: 'flex'
    },
}))
