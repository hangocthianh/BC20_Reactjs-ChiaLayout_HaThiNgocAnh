import React, { Component } from 'react';

export default class Square extends Component {
    render() {
        return (
            <button className="btn btn-light square" onClick={() => {this.props.getContent()}}>
                {this.props.content}
            </button>

        )
    }
}
