import React, { Component } from 'react'

export default class ListKeys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listUser: [
                { username: "Nam", age: 19 },
                { username: "Hanh", age: 20 },
                { username: "Hoa", age: 21 },
            ],
        };
    }
    renderListUser = () => {
        return this.state.listUser.map((user, index) => {
            return (
                <li key={index}>
                    Username: {user.username} - age: {user.age}
                </li>
            );
        })
    }

    render() {
        return (
            <div>
                <h2>List Keys</h2>
                <ul>
                    {this.renderListUser()}
                    {/* {
                        this.state.listUser.map((user, index) => {
                            return (
                                <li key={index}>
                                    Username: {user.username} - age: {user.age}
                                </li>
                            );
                        })
                    } */}
                </ul>
            </div>
        )
    }
}
