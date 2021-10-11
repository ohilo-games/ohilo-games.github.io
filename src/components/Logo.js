import logo from '../assets/ui/Logo_W.png'
import '../css/Logo.css'

const Logo = () => {
    return (
        <div className="logoIntro-container">
            <img src={logo} alt="logoIntro" className="logo"></img>
            <a className="sign-in" href={`https://zoom.us/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_ZOOM_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_ZOOM_REDIRECT_URL}`}>
                Sign In / Sign Up
            </a>
        </div>
    )
}

export default Logo
