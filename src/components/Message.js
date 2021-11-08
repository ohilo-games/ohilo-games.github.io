import "../css/Message.css";
import { Fade } from "react-awesome-reveal";
import Illustration from "../assets/ui/Ohilo_logo.svg";
import LogoType from "../assets/ui/Ohilo_LogoType.png";

const Message = () => {
  return (
    <div className="message-container">
      <Fade direction="down" duration={2000}>
        <img src={Illustration} alt="Ill" height="150px" />
        <img
          src={LogoType}
          alt="logo"
          height="120px"
          style={{ margin: "35px 0px 10px 0px" }}
        />
      </Fade>
      <Fade direction="up" duration={2000}>
        <h1
          style={{
            color: "white",
            fontSize: "64px",
            fontFamily: "PT Sans Narrow",
            marginTop: "20px",
            marginBottom: "1px",
          }}
        >
          Metaverse for Social & Casual Motion Gaming
        </h1>
        <p
          style={{
            color: "white",
            fontFamily: "Nunito Sans",
            fontSize: "24px",
            fontWeight: "100",
          }}
        >
          We are building a whole new metaverse for us playful beings where our
          body is the controller. Our growing set of social and casual motion
          games will keep you active and engaged whether you are taking a short
          break from work or looking for a recreation with friends and family.
          The only currency on Ohilo is Play. The more you play, the more Play
          you earn.
        </p>
      </Fade>
    </div>
  );
};

export default Message;
