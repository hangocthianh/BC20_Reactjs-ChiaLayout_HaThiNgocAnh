import React, { Component } from 'react';
import PureChild from './pure-child';
import Child from './child';

export default class LifeCycle extends Component {
    constructor(props){
        super(props);
        console.log("constructor -  chỉ chạy 1 lần duy nhất");
        this.state={
            number: 0,
            statusChild: true,
        }
    }
    UNSAFE_componentWillMount(){
        console.log("componentWillMount -  chỉ chạy 1 lần duy nhất");
    }

    // chạy tới hàm render

    componentDidMount(){
        // giúp call API
        console.log("componentDidMount -  chạy sau hàm render - chỉ chạy 1 lần duy nhất");
    }
    UNSAFE_componentWillUpdate(){
        console.log("componentWillUpdate - chạy khi set lại state hoặc state thay đổi");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate - chạy khi set lại state hoặc state thay đổi");
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate - chạy khi set lại state hoặc state thay đổi - chạy trc componentWillUpdate và componentDidUpdate");

        // if(nextState.number == 2){
        //     return true;
        // }
        // return false;
        // bắt buộc return về kiểu boonle(true/false)
        return true; // set lại state
       // return false;: ko set lại state thì 2 hàm sau ko chạy
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    render() {
        console.log("render");
        return (
            <div>
                <h3>LifeCycle (xài Component, ko xài function</h3>
                <h4>Number: {this.state.number}</h4>
                <button className="btn btn-success" onClick={()=>{
                    this.setState({
                        number: this.state.number + 1,
                    })
                }}
                    >Click</button>
                <hr/>
                <PureChild/>
                <hr/>
                
                {this.state.statusChild &&<Child number={this.state.number}/>}
                <button className="btn btn-info" onClick={()=>{
                    this.setState({
                        statusChild: false,
                    })
                }}>
                    Change status Child</button>
            </div>
        )
    }
}
