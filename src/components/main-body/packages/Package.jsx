import { useContext } from 'react';
import { styled } from '@mui/material'
import './package.css';

import { ColorContext } from '../../../App';

export default function Package() {

  const [colorTheme, setColorTheme] = useContext(ColorContext);

  return (
    <PackageDiv>
        <h1>Packages</h1>
        <h2 className={colorTheme === 'blue' ? 'package-title-blue' : 'package-title-white'}>Base Package</h2>
        <h3>Starting at $400</h3>
        <h4>Packages Include:</h4>
        <ul>
            <li>Supply Consultation prior to event</li>
            <li>Strictly Pour Service</li>
            <li>Client-Provided alcohol at no cost to guest</li>
            <li>Up to 8 hours of professional, fun bartending</li>
            <li>Water Station</li>
            <li>Fully-Staffed Bar, including set up and tear down</li>
            <li>Fully Insured</li>
            <li>Up to 100 Guests!</li>
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
        <div className='notice'>
        <div>* Temporary Liquor License with 60 days notice will be an addtional $250</div>
        <div>* More than 100 guests will include an additional $150 charge</div>
        </div>
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
