import React, { Component } from 'react'
import ExampleHandlingEvents from './example';

export default class HandlingEvent extends Component {
    handlingEvents(){
        console.log(123);
    }
    handlingEventsParams(username){
        console.log(username);
    }

    render() {
        return (
            <div>
                <h3>Handling Event</h3>
                <button className="btn btn-success" onClick={this.handlingEvents}>HandlingEvents</button>
                <button 
                className="btn btn-info" 
                onClick={()=>{
                    console.log(456);
                }}>HandlingEvents</button>
                <button 
                className="btn btn-danger" 
                onClick={()=>{this.handlingEventsParams("HaHa")
                }}>HandlingEvents Params</button>
                <hr/>
                <ExampleHandlingEvents/>
            </div>
        )
    }
}
