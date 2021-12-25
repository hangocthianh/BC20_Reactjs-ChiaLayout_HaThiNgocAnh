import React, { Component } from 'react';
import {connect} from "react-redux"

class Computer extends Component {
    render() {
        let keyframe =`@keyframes randomItem${Date.now()}{
            0%{top: -20px;}
            25%{top: 20px;}
            50%{top: -20px;}
            75%{top: 20px;}
            100%{top: 0px;}
        }`
        const {computer}=this.props;
        return (
            <div>
                <style>
                    {keyframe}
                </style>
                <div className="p-5" style={{position: 'relative'}}>
                    <div className="img-think" >
                        <img style={{position: 'absolute', left: '25%', animation: `randomItem${Date.now()} 0.3s`}} src={computer.hinhAnh} alt={computer.hinhAnh} className="img-computer img-fluid w-50" />
                    </div>
                    <div className="speech-bubble">
                    </div>
                    <img src="./img/image-oan-tu-ti/playerComputer.png" className="img w-75" alt="./img/image-oan-tu-ti/playerComputer.png" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        computer: state.gameOanTuTiReducer.computer,

    }
}

export default connect(mapStateToProps, null)(Computer);