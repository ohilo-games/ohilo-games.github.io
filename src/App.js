import './App.css';
import Android from './Assets/google-play-badge.png';
import iOS from './Assets/iOS_Badge.svg';
import bg from './Assets/bgGraphic.png';
import icon from './Assets/AppIcon.svg';
import { FaDiscord, FaTwitter, FaLinkedinIn, FaInstagram} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <div className="Layout">
        <div className="Info">
          <div className="Details">
            <h1 className="CatchPhrase">Moving the Metaverse</h1> 
            <p className="Copy">Any Device, Anywhere, Anytime</p>
            <div className="Store">
              <div className="store-item">
                <img src={icon} alt="icon" width="95%" className="CoIcon"></img>
              </div>
              <div className="store-item">
                <img src={iOS} alt="icon" width="100%" className="iOS"></img>
              </div>
              <div className="store-item">
                <img src={Android} alt="icon" width="105%" className="Android"></img>
              </div>
            </div>     
            <div className="Socials">
              <p className="social-copy">Join the community</p>
              <div className="social-icons">
                <FaLinkedinIn size={42}className="icon-style"/>
                <FaTwitter size={42} className="icon-style"/>
                <FaDiscord size={42} className="icon-style"/>
                <FaInstagram size={42} className="icon-style"/>
              </div>
            </div> 
          </div>                                                                                                     
        </div>
        <div className="Graphic">
          <img src={bg} alt="bg" width="95%" className="Mockups"></img>
          <div className="Form">
            <input type="text" id="fname" name="fname" placeholder="Enter your E-Mail Address" />
            <button className="submit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
