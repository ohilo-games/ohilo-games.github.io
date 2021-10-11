import {Link } from "react-tiger-transition";
import '../css/GameDetails.css'
import React from 'react';

const GameDetails = ({game}) => {
    return (
        <div className="gamedeets-card">
            <div className="game-deets">
                <h1>{game.name}</h1>
                <Link
                to={{
                    pathname: "/game",
                    state: {scenes: game.scenes}
                }}
                >
                    <button className="game-button">START</button>
                </Link>
                <p style={{fontSize: '1.5em', padding:'0px 50px'}}>
                    {game.description}
                </p>
            </div>
        </div>
    )
}
export default GameDetails
