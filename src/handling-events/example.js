import React, { Component } from 'react'

export default class ExampleHandlingEvents extends Component {
    // constructor(props){
    //     super(props);
    //     //binding 
    //     this.handleLogin = this.handleLogin.bind(this);
    // }
    username = "Cybersoft";
    isLogin = false;

    // các cách để xử lý khi từ khóa this ko xác định: 1 dùng arrow function, hoặc 2 gọi .bind như ỏ trên
    handleLogin =()=>{
        this.isLogin = true;
    }
    renderHTML() {
        // tóan tử 3 ngôi
        return this.isLogin ? (
            <div>
                <h1>Hello {this.username}</h1>
                <button className="btn btn-danger">Logout</button>
            </div>
        ) : (
            <div>
                <h1>Vui lòng login</h1>
                <button className="btn btn-success" onClick={this.handleLogin}>Login</button>
            </div>
        )

        // if (this.isLogin) {
        //     return (
        //         <div>
        //             <h1>Hello {this.username}</h1>
        //             <button className="btn btn-danger">Logout</button>
        //         </div>
        //     );
        // } else {
        //     return (
        //         <div>
        //             <h1>Vui lòng login</h1>
        //             <button className="btn btn-success">Login</button>
        //         </div>
        //     );
        // }
    }
    render() {
        return (
            <div>
                <h3>Example Handling Events</h3>
                {this.renderHTML()}
            </div>
        )
    }
}
