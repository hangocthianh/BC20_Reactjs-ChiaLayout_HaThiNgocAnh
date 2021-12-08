import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json"
class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      listUser: data,
    }
  }

  // hàm tìm
  _findID=(id)=>{
    return this.state.listUser.findIndex((item)=>{
      return item.id === id;
    })
  }

// xóa user
  deleteUser=(user)=>{
    const index = this._findID(user.id);
    if(index !== -1){
      this.state.listUser.splice(index, 1);
      this.setState({
        listUser: data,
      })
    }
  }

  render() {
    const {listUser} = this.state;
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users listUser={listUser} userDelete={this.deleteUser}/>
        <Modal />
      </div>
    );
  }
}

export default Home;
