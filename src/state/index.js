import React, { Component } from 'react'
// nếu state thay đổi thì component sẽ render lại
// state dùng virtual dom

export default class State extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : "Cybersoft",
            isLogin : false,
        }
    }

    handleLogin =()=>{
        // this.state.isLogin = true;: ko dc, không gắn trực tiếp dc, mà phải dùng hàm setState
        this.setState({
            isLogin: true,
        },()=>{
            // do hàm setState bị bất đồng bộ nên muốn xem console kết quả phải thêm callback function ở tham số thứ 2 của hàm
            console.log(this.state.isLogin);
        })
    }
    handleLogout =()=>{
        this.setState({
            isLogin: false,
        })
    }
    renderHTML() {
        // tóan tử 3 ngôi
        return this.state.isLogin ? (
            <div>
                <h2>Hello {this.state.username}</h2>
                <button className="btn btn-danger" onClick={this.handleLogout}>Logout</button>
            </div>
        ) : (
            <div>
                <h2>Vui lòng login</h2>
                <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
            </div>
        )
    }
    render() {
        return (
            <div>
                <h1 className="text-info">State</h1>
                {this.renderHTML()}
            </div>
        )
    }
}
