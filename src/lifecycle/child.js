import React, { Component } from 'react'

export default class Child extends Component {

    constructor(props){
        super(props);
        this.state={
            numberChild: 5,
            username: "Ha",
        };
        this.interval = null;
    }

    // UNSAFE_componentWillReceiveProps(nextProps){
    //     console.log("UNSAFE_componentWillReceiveProps", nextProps);
    // xét lại state bằng this.setState({})
    // }

    static getDerivedStateFromProps(nextProps, currentState){ 
        // của phiên bản mới, thay thế cho UNSAFE_componentWillReceiveProps
        // để dừng phải có khai báo this.state
        console.log("getDerivedStateFromProps", nextProps, currentState);

        if(nextProps.number === currentState.numberChild){
            // không xét lại state bằng this.setState({}) dc
            // mà cập nhật lại state" username bằng return
            return {
                username: "Ngoc",
            }
        }
        return null; // phải có return
        
    }


    componentDidMount(){
        this.interval = setInterval(()=>{
            console.log("Hello!")
        }, 1000);// cứ 1s sẽ log ra 1 dòng Hello!
    }

    componentWillUnmount(){
        clearInterval(this.interval); // hàm của js
    }
    render() {
        return (
            <div>
                <h3>Child</h3>
                <p>Username: {this.state.username} - numberChild: {this.state.numberChild};</p>
            </div>
        )
    }
}
