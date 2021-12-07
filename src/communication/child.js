import React, { Component } from 'react'

export default class Child extends Component {
    handleResetInfo=()=>{
        const username = "Cybersoftt";
        const age = 4;
        this.props.resetInfo(username,age);
    }
    render() {
        //const propsUsername = this.props.username;
        const {username, age} = this.props;
        return (
            <div>
                <h2>Child Component</h2>
                <p>
                    {/* {propsUsername} */}
                    {username} - {age}
                </p>
                <button className="btn btn-danger" onClick={this.handleResetInfo}>Reset Info</button>
            </div>
        )
    }
}
