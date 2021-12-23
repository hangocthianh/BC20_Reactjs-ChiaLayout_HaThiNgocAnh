import React, { Component } from "react";
import {connect} from "react-redux";
import {actGetKeywork} from './../redux/actions'

class Search extends Component {
  handleOnChange=(event)=>{
    const {value} = event.target;
    this.props.keyWord(value);

  }
  render() {
    return <input type="text" className="form-control mb-3 w-50" onChange={this.handleOnChange} />;
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    keyWord:(key)=>{
      dispatch(actGetKeywork(key));
    }
  }
}

export default connect(null, mapDispatchToProps)(Search);
