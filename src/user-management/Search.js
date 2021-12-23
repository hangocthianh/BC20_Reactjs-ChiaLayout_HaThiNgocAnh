import React, { Component } from "react";

class Search extends Component {
  handleOnChange=(event)=>{
    const {value} = event.target;
    this.props.getKeyWord(value);

  }
  render() {
    return <input type="text" className="form-control mb-3 w-50" onChange={this.handleOnChange} />;
  }
}

export default Search;
