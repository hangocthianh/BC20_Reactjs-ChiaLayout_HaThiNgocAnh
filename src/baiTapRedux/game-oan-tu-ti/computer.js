import React, { Component } from 'react';
import {connect} from "react-redux"

class Computer extends Component {
    render() {
        const {computer}=this.props;
        return (
            <div>
                <div className="p-5">
                    <div className="img-think">
                        <img src={computer.hinhAnh} alt={computer.hinhAnh} className="img-computer img-fluid w-50" />
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