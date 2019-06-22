import React from 'react'
import {Count} from "./Count";

export const Player = (props) => (
    <div className="player">
        <span className="player-name">
            <button className="remove-player" onClick={() => props.removePlayer(props.id)}>X</button>
            {props.name}
        </span>
        <Count score={props.score}/>
    </div>
)