import React, { Component } from 'react'

export default class ChangeColorCar extends Component {
    constructor(props){
        super(props);
        this.state={
            img: "./img/imgRedCar.jpg",
        };
    }
    changeColor =(linkImg)=>{
        this.setState({
            img: linkImg,
        });
    }

    render() {
        const {img}= this.state;
        return (
            <div className="container">
                <h2 className="text-warning">Change Color Car</h2>
                <div className="row">
                    <div className="col-md-6">
                        <img className="img-fluid" src={img} alt="car img"/>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-danger" onClick={()=>{this.changeColor("./img/imgRedCar.jpg")}}>Red</button>
                        <button className="btn btn-light mx-3" onClick={()=>{this.changeColor("./img/imgSilverCar.jpg")}}>Silver</button>
                        <button className="btn btn-dark" onClick={()=>{this.changeColor("./img/imgBlackCar.jpg")}} >Black</button>
                    </div>
                </div>
            </div>
        )
    }
}

