import React, { Component } from 'react';
import Child from "./child";
import ChildFnc from './childFnc';
import ChildrenComponent from './children';

export default class Communication extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "Cybersoft",
            age: 4,
        };
    }
    changeInfo=()=>{
        this.setState({
            username: "Ha Anh",
            age: 28,
        });
    }
    reset=(username, age)=>{
        // hàm reset để nhận lại giá trị của component con
        // 2 đối số (username, age) ko cần đặt tên trùng với props
        this.setState({
            username,
            age,
        });
    }
    render() {
        const {username, age}= this.state;
        return (
            <div>
                <h2>Communication</h2>
                <p>UserName: {username} - age: {age}</p>
                <button className="btn btn-info" onClick={this.changeInfo} >Change Info</button>
                <hr/>
                <Child username={username} age={age} resetInfo={this.reset}/>
                <hr/>
                <ChildFnc username={username} age={age} />
                <hr/>
                <ChildrenComponent>
                    <p> Username: abc -  Age: {age} </p>
                    <div>Ha Anh</div>
                    {/* bao nhiêu thẻ html cũng dc */}
                </ChildrenComponent>
            </div>
        )
    }
}
