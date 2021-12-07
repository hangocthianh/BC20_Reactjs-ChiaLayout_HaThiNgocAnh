import React, { Component } from 'react'

export default class RenderingElements extends Component {
    username = "Ha Anh";
    age = "18";

    renderInfo() {
        return (
            <>
                <p>{this.username}</p>
                <p>{this.age}</p>
            </>
        )
    }
    render() {
        return (
            <div>
                <h3>*RenderingElements</h3>
                {/* <p>{this.username} - {this.age}</p> */}
                {this.renderInfo()}
            </div>
        )
    }
}
