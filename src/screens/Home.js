import { Fade } from "react-awesome-reveal";
import ComingSoon from '../components/ComingSoon'
import Badges from '../components/Badges'

window.dataLayer=window.dataLayer || [];

const Home = () => {
    window.dataLayer.push({
        'event' : 'screenName',
        'name' : 'Home Screen'
    })
    
    return (
        <div style={{position:'absolute',width: '100%', height: '100%',textAlign: 'center',backgroundImage:'linear-gradient(78.09deg, #140049 -22.59%, #5200FF 128.04%)'}}>
            <Fade direction="up" cascade duration={1000}>
                <ComingSoon />
                <Badges />
            </Fade>
        </div>
    )
}

export default Home
