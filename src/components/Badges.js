import '../css/Badges.css';
import AndroidBadge from '../assets/ui/google-play-badge.svg'
import iOSBadge from '../assets/ui/app-store-badge.svg'
const Badges = () => {
    return (
        <div className="badges-container">
            <img src={AndroidBadge} alt="Android" className="AndroidBadge"></img>
            <img src={iOSBadge} alt="iOS" className="iOSBadge"></img>
        </div>
    )
}

export default Badges
