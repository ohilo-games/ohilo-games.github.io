import HeroVideo from '../components/HeroVideo';
import Overlay from '../components/Overlay';
import Logo from '../components/Logo';
import Message from '../components/Message'
import ArrowButton from '../components/ArrowButton';

const Intro = () => {
    return (
        <div style={{position:'absolute',width: '100%', height: '100%',textAlign: 'center',backgroundImage:'linear-gradient(78.09deg, #140049 -22.59%, #5200FF 128.04%)'}}>
            {/* <Logo /> */}
            {/* <HeroVideo /> */}
            {/* <Overlay /> */}
            <Message />
            <ArrowButton />
        </div> 
    )
}

export default Intro
