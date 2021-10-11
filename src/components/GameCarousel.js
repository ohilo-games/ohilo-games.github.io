import '../css/GameCarousel.css'
import Carousel from 'react-elastic-carousel'
import img1 from '../assets/ui/Javelin_Card.png'
import img2 from '../assets/ui/Juggling_Card.png'

// import JugglingGame from '../gameScenes/Football/football'
// import OnboardingScene from '../gameScenes/Javelin/OnboardingScene';
// import InstructionsScene from '../gameScenes/Javelin/InstructionsScene';
// import GameplayScene from '../gameScenes/Javelin/GameplayScene';
// import PostgameScene from '../gameScenes/Javelin/PostgameScene';


const GameCarousel = ({changeGame}) => {
    function clickedGame(){
            changeGame({
                name:'JugglerKnight',
                scenes:[],
                description:'askjd akjsd kad akjd askjbda dkjab adjhb ajhbd af fabdahbduhiodlhalksnak dkl landoiuba dahbdoabhdkljanslkhdkslsalklakm'
            })
    }

    function featuredGame(){
        changeGame({
            name:'GoldenThrow',
            scenes:[],
            description:'askjd akjsd kad akjd askjbda dkjab adjhb ajhbd'
        })
}

    return (
        <div className="carousel-container">
            <Carousel
            itemPadding={[0, 5]} 
            itemsToScroll={2} 
            itemsToShow={3.5}
            >
                <div className="card" onClick={featuredGame} >
                    <img src={img1} alt={img1} style={{width:'100%', height:'100%'}}></img>
                </div>
                <div className="card" onClick={clickedGame}>
                    <img src={img2} alt={img2} style={{width:'100%', height:'100%'}}></img>
                </div>
                <div className="card">
                    <h2>Coming Soon</h2>
                </div>
                <div className="card">
                    <h2>Coming Soon</h2>
                </div>
            </Carousel>

        </div>
    )
}

export default GameCarousel
