import logo from '../assets/ui/Logo_B.png';
import AndroidBadge from '../assets/ui/google-play-badge.svg'
import iOSBadge from '../assets/ui/app-store-badge.svg'

import '../css/Header.css';

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="logo" className="logo"></img>
            <img src={AndroidBadge} alt="android" className="android-badge"></img>
            <img src={iOSBadge} alt="ios" className="ios-badge"></img>
            <div className="text">
                <p>CHECKOUT OUR GAMES ON <br/>DIFFERENT PLATFORMS</p>
            </div>

        </div>
    )
}

export default Header
