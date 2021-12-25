import React, { Component } from 'react'
import { connect } from "react-redux";
import {actChonKeoBuaBao} from "../../redux/actions/gameOanTuTi"

class Player extends Component {
    render() {
        let {player}=this.props;
        return (
            <div className="p-5 playerGame">
                <div className="img-think">
                    <img src={player.find(item=>item.datCuoc).hinhAnh} alt={player.find(item=>item.datCuoc).hinhAnh} className="img-fluid w-50" />
                </div>
                <div className="speech-bubble">
                </div>
                <img src="./img/image-oan-tu-ti/player.png" className="img w-50" alt="./img/image-oan-tu-ti/player.png" />
                <div className="row justify-content-center">
                    {player.map((item, index) => {
                        let border = {};
                        if(item.datCuoc){
                            border = {border: '3px solid red'};
                        }
                        return (
                            <div className="col-md-3 px-1">
                                <button style ={border} className="btn btn-light btnItem" onClick={()=>{
                                    this.props.datCuoc(item.ma)
                                }}>
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
const mapDispatchToProps=dispatch=>{
    return{
        datCuoc:(maCuoc)=>{
            dispatch(actChonKeoBuaBao(maCuoc))

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);