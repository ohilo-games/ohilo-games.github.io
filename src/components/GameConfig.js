import Phaser from 'phaser'
import { IonPhaser } from '@ion-phaser/react'
import { useHistory } from "react-router-dom";
import '../css/GameConfig.css'

export var history;
export var state; 

const GameConfig = ({initialize,scenes}) => {
    
    history = useHistory();
    
    state = {
        // initialize:true,
        game:{
          width: window.innerWidth,
          height: window.innerHeight,
          type: Phaser.AUTO,
          backgroundColor: '#ffffff',
        //   transparent:true,
          scene:scenes,
          physics:{
            default:'arcade',
            arcade:{debug:true},
            // matter:{debug:true}
          }        
      }
    }

    const {game}=state;
    
    return (
        <div className="game">
            <IonPhaser game={game} initialize={initialize} />
        </div>
    )
}
export default GameConfig

