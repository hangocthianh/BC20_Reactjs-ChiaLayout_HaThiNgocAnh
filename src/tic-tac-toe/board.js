import React, { Component } from 'react';
import Square from './square';

export default class Board extends Component {
    renderSquare(i){
        
        return <Square content={this.props.content} getContent={this.props.getContent}/>;
    }
    render() {
        return (
            <div>
                <h3>Next player: X</h3>
                <table className="square">
                    <tr >
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </tr>
                    <tr >
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </tr>
                    <tr >
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </tr>
                </table>
                
            </div>
        )
    }
}
