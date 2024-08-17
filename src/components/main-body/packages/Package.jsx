import { styled } from '@mui/material'
import './package.css';

export default function Package() {
  return (
    <PackageDiv>
        <h1>Packages</h1>
        <h2>Base Package</h2>
        <h3>Starting at $400</h3>
        <h4>Packages Include:</h4>
        <ul>
            <li>Full Supply Consultation prior to event</li>
            <li>Strickly Pour Service</li>
            <li>Client-Provided alcohol at no cost to guest</li>
            <li>Up to 8 hours of professional, fun bartending</li>
            <li>Water Station</li>
            <li>Bar, including set up before and tear down after event</li>
            <li>Fully Insured</li>
            <li>Up to 100 Guests! ($150 for more than 100)</li>
        </ul>
        <h2>Bonus Package</h2>
        <h3>For only $250</h3>
        <ul>
            <li>Stir Sticks</li>
            <li>Cups (16oz / 12oz)</li>
            <li>Napkins</li>
            <li>Garnishes</li>
            <li>Ice</li>
            <li>Personalized Bar Menu</li>
        </ul>
        <div className='notice'>* Temporary Liquor License with 60 days notice will be an addtional $250</div>
    </PackageDiv>
  )
}

const PackageDiv = styled('div')(params => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontStyle: 'oblique',
    height: '100vh'
}))
