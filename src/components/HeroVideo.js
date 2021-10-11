import herovideo from '../assets/videos/hero.mp4'
import poster from '../assets/ui/poster.png'
import '../css/HeroVideo.css'

const HeroVideo = () => {
    return (
        <div className="hero-video-container">
            <video className="hero-video" loop={true} autoPlay={true} muted={true} poster={poster}>
                <source src={herovideo} type="video/mp4"></source>
            </video>
        </div>
    )
}

export default HeroVideo
