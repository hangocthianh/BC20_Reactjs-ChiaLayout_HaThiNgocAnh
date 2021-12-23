import React, { Component } from "react";
import {connect} from "react-redux";
import {actDeleteUser, actEditUser} from "./../redux/actions"

class UserItem extends Component {
  render() {
    const {user} = this.props;
    return (
      <tr>
        <td>{user.fullname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={()=>{
              this.props.editUser(user);
            }}
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={()=>{
            this.props.deleteUser(user)
          }}>Delete</button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps=(dispatch)=>{ // dispatch là một hàm để đưa action vào reducer
  return{
    deleteUser: (user)=>{ // root này nhận vào giá trị là 1 hàm
      // cách 1
      // const action = {
      //   type: "DELETE_USER", // tên type tự đặt dc nên viết theo kiểu giá trị của const
      //   payload: user,
      // };
      //dispatch(action);
      // cách 2 khi có folder action riêng
      dispatch(actDeleteUser(user));
      
    },
    editUser:(user)=>{
      // const action={
      //   type: "EDIT_USER",
      //   payload: user,
      // };
      // dispatch(action);
      dispatch(actEditUser(user));
    },
  }
}

export default connect(null, mapDispatchToProps)(UserItem);
