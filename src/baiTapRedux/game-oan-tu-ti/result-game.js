import React, { Component } from 'react';
import {connect} from "react-redux";

class ResultGame extends Component {
    render() {
        const {resultGame, numOfWins, numOfPlays}= this.props;
        return (
            <div>
                <div className="display-4 text-warning">{resultGame}</div>
                <div className="h4 text-success">Number of wins: <span className="text-warning">{numOfWins}</span> </div>
                <div className="h4 text-success">Total number of plays: <span className="text-warning">{numOfPlays}</span> </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        resultGame: state.gameOanTuTiReducer.resultGame,
        numOfWins: state.gameOanTuTiReducer.numOfWins,
        numOfPlays: state.gameOanTuTiReducer.numOfPlays,
    }
}


export default connect(mapStateToProps, null)(ResultGame)