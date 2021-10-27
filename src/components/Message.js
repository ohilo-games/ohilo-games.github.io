import '../css/Message.css'
import { Fade } from "react-awesome-reveal";
import Illustration from '../assets/ui/Logo.png'

const Message = () => {
    return (
        <div className="message-container">
            <Fade direction="down" duration={2000}>
                <img src={Illustration} alt="Ill" height="120px"/>
                <p style={{color:'#80FFDB', fontFamily:"Nunito Sans", fontSize:'144px', fontWeight:'800', margin:'0'}}>ohilo</p>
            </Fade>
            <Fade direction="up" duration={2000}>
                <h1 style={{color:"white" , fontSize:"64px", fontFamily:"PT Sans Narrow", marginTop:"20px", marginBottom:"1px"}}>What do we do ?</h1>
                <p style={{color:"white",fontFamily:"Nunito Sans", fontSize:"24px", fontWeight:"100"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Fade>
        </div>
    )
}

export default Message
