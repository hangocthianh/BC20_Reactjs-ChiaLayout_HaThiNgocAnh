import React, { Component } from 'react'
import Computer from './computer'
import Player from './player'
import ResultGame from './result-game'
import "./style.css"
export default class GameOanTuTi extends Component {
    render() {
        return (
            <div className="gameOanTuTi">
                <div className="row mt-2">
                    <div className="col-4">
                        <Player/>
                    </div>
                    <div className="col-4">
                        <ResultGame/>
                        <button className="h3 btn btn-success mt-3">PLAY GAME</button>
                    </div>
                    <div className="col-4">
                        <Computer/>
                    </div>
                </div>

            </div>
        )
    }
}
