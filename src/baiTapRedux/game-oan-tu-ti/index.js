import React, { Component } from 'react'
import Computer from './computer'
import Player from './player'
import ResultGame from './result-game'
import { connect } from "react-redux";
import { actPlayGame, actEndGame } from "../../redux/actions/gameOanTuTi"
import "./style.css"
class GameOanTuTi extends Component {
    render() {
        return (
            <div className=" gameOanTuTi">
                <div className="row mt-5">
                    <div className="col-3">
                        <Player />
                    </div>
                    <div className="col-6">
                        <ResultGame />
                        <button className="h3 btn btn-success mt-3" onClick={() => {
                            this.props.playGame();
                        }}>PLAY GAME</button>
                    </div>
                    <div className="col-3">
                        <Computer />
                    </div>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        playGame: () => {
            let count = 0;
            let randomComputer = setInterval(() => {
                dispatch(actPlayGame());
                count++;
                if (count > 15) {
                    clearInterval(randomComputer);
                    dispatch(actEndGame());
                }
            }, 100);
        }
    }
}

export default connect(null,mapDispatchToProps)(GameOanTuTi)
