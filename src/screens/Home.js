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
        <div>
            <Fade direction="up" duration={2000}>
                <ComingSoon />
            </Fade>
            <Fade direction="up" delay={500} duration={2000}>
                <Badges />
            </Fade>
        </div>
    )
}

export default Home
