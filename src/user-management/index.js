import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json"
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: data,
      keyword: "",
      userEdit: null,
    }
  }

  // hàm tìm
  _findID = (id) => this.state.listUser.findIndex((item) => item.id === id); // cách viết khi rút gọn return


  // xóa user
  deleteUser = (user) => {
    const index = this._findID(user.id);
    if (index !== -1) {
      let listUser = [...this.state.listUser];
      listUser.splice(index, 1);
      this.setState({
        listUser,
      })
    }
  }

// hàm click vào Submit
  handleSubmit = (user) => {
    let listUser = [...this.state.listUser];
    // xét điều kiện
    if(user.id){
      // nếu id tồn tại thì UPDATE
      const index = this._findID(user.id);
      if(index !== -1){
        listUser[index] = user;
      }
    } else{
      // nếu ko thì thêm mới ADD
      //user.id= {...user, id:new Date().getTime()};
      const userNew = {...user, id: new Date().getTime()};
      listUser.push(userNew);
    }
    this.setState({
      listUser,
    })
}

// hàm tìm kiếm thông tin
handleGetKeyWord=(keyword)=>{
  //console.log(keyword);
  // const listUserSearch = this.state.listUser.filter((user)=> user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
  this.setState({
    keyword,
  })
}

handleUserEdit=(user)=>{
  this.setState({
    userEdit: user,
  })
}

render() {
  let { listUser,keyword,userEdit } = this.state;
  listUser = this.state.listUser.filter((user)=> user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
  return (
    <div className="container">
      <h1 className="display-4 text-center my-3">User Management</h1>
      <div className="d-flex justify-content-between align-items-center">
        <Search getKeyWord={this.handleGetKeyWord}/>
        <button
          className="btn btn-success"
          data-toggle="modal"
          data-target="#modelIdUser"
          onClick={()=>{
            this.setState({
              userEdit: null,
            })
          }}
        >
          Add User
        </button>
      </div>
      <Users 
        listUser={listUser} 
        userDelete={this.deleteUser} 
        getUserEdit={this.handleUserEdit}/>
      <Modal 
        getUserSubmit={this.handleSubmit} 
        userEdit={userEdit}
      />
    </div>
  );
}
}

export default Home;
