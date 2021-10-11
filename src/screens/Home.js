import './Home.css';
import { Fade } from "react-awesome-reveal";
import Header from '../components/Header'
import GamePreview from '../components/GamePreview'
import GameDetails from '../components/GameDetails'
import GameCarousel from '../components/GameCarousel'

import mockup from '../assets/ui/mockup.png'
import AndroidBadge from '../assets/ui/google-play-badge.svg'
import iOSBadge from '../assets/ui/app-store-badge.svg'

import {useState} from 'react'

window.dataLayer=window.dataLayer || [];

const Home = () => {
    window.dataLayer.push({
        'event' : 'screenName',
        'name' : 'Home Screen'
    })
    const gameInfo={
            name:'GoldenThrow',
            scenes:[],
            description:'aksd aksdk ahdh aidh'
        }

    const [game, setGame]= useState(gameInfo);
    
    return (
        <div>
            <Fade direction="down" duration={2000}>
                <Header />
            </Fade>
            <div className="home-grid-container">
                <div className="mockup-container">
                    <img src={mockup} alt="mockup" className="mockup"></img>
                    <img src={iOSBadge} alt="ios" className="ios-badge1"></img>
                    <img src={AndroidBadge} alt="android" className="android-badge1"></img>
                </div>
                <Fade direction="left" duration={2000} className="gamepreview-container">
                    <GamePreview />
                </Fade>

                <Fade direction="right" duration={2000} className="gamedetails-container">
                    <GameDetails game={game}/>
                </Fade>

                <Fade direction="right" duration={2000} className="gamescarousal-container">
                    <GameCarousel changeGame={setGame}/>
                </Fade>
            </div>
        
        </div>
    )
}

export default Home
