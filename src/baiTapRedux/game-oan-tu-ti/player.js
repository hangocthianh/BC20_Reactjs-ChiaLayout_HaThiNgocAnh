import React, { Component } from 'react'
import { connect } from "react-redux";

class Player extends Component {
    render() {
        let {player}=this.props;
        return (
            <div className="p-5 playerGame">
                <div className="img-think">
                    <img src={player.find(item=>item.datcuoc).hinhAnh} alt={player.find(item=>item.datcuoc).hinhAnh} className="img-fluid w-50" />
                </div>
                <div className="speech-bubble">
                </div>
                <img src="./img/image-oan-tu-ti/player.png" className="img w-50" alt="./img/image-oan-tu-ti/player.png" />
                <div className="row justify-content-center">
                    {player.map((item, index) => {
                        let border = {};
                        if(item.datcuoc){
                            border = {border: '3px solid red'};
                        }
                        return (
                            <div className="col-md-3 px-1">
                                <button style ={border} className="btn btn-light btnItem">
                                    <img src={item.hinhAnh} alt={item.hinhAnh} className="img-fluid" />
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        player: state.gameOanTuTiReducer.player,
    }
}

export default connect(mapStateToProps, null)(Player);