import '../css/Message.css'
import { Fade } from "react-awesome-reveal";
import Illustration from '../assets/ui/Homepage.svg'

const Message = () => {
    return (
        <div className="message-container">
            <Fade direction="down" duration={2000}>
                <img src={Illustration} alt="Ill" height="300px"/>
            </Fade>
            <Fade direction="up" duration={2000}>
                <h1 style={{color:"black" , fontSize:"64px", fontFamily:"PT Sans Narrow", margin:"5 0 0 0"}}>What do we do ?</h1>
                <p style={{color:"black",fontFamily:"Nunito Sans", fontSize:"18px"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Fade>
        </div>
    )
}

export default Message
