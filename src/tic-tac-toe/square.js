import React, { Component } from 'react';

export default class Square extends Component {
    render() {
        return (
            <td onClick ={()=>{
                this.props.getContent()
            }}>
                {this.props.content}
            </td>
        )
    }
}
