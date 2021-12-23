import React, { Component } from "react";
import UserItem from "./UserItem";
import {connect} from "react-redux";

class Users extends Component {
  renderListUser=()=>{
    let {userList, keyword} = this.props;
    userList = this.props.userList.filter((user)=> user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
    return userList?.map((user)=>{
      return(
        <UserItem 
        key = {user.id} 
        user={user}
        />
      )
    })
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.renderListUser()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{ // tham số state là tham số mặc định.
  return {
    // key: value
    userList: state.userReducer.userList,
    keyword: state.userReducer.keyword,
  }

}

export default connect(mapStateToProps, null)(Users);
