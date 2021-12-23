import React, { Component } from 'react';
import Board from './board'

export default class Game extends Component {
    constructor(props){
        super(props);
        this.state={
            boxContent:"",
        }
    }
    renderContent=()=>{
        this.setState({
            boxContent: "X",
        })
    }
    render() {
        return (
            <div>
                <h2>TIC-TAC-TOE</h2>
                <Board content={this.state.boxContent} getContent={this.renderContent} />
            </div>
        )
    }
}
