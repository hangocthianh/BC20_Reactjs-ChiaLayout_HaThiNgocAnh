import React, { Component } from "react";
import {connect} from "react-redux"
import {actOnSubmit} from './../redux/actions'

class Modal extends Component {
  constructor(props) {
    // hàm khởi tạo constructor chỉ chạy một lần đầu tiên
    super(props);
    this.state = {
      id: "",
      fullname: "",
      username: "",
      email: "",
      phoneNumber: "",
      type: "USER",
    };
    this.closeModal = React.createRef();
  }
  handleOnChange = (event) => {
    const {name, value}= event.target;
    console.log(name, value);
    this.setState({
      [name]:value,
    }, ()=>{
      console.log(this.state);
    })
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    //console.log(this.state);
    this.props.submitUser(this.state);
    console.log(this.closeModal);
    // DOM đến nút close
    this.closeModal.current.click();
  }

  UNSAFE_componentWillReceiveProps(nextProps){
    // hàm của react chỉ cần sử dụng, ko khao báo gì
    // component này sẽ nhận những props mới/tương lai từ index.js truyền qua
    // component là của phiên bản cũ
    console.log("componentWillReceiveProps", nextProps);
    if(nextProps && nextProps.userEdit){
      this.setState({
        id: nextProps.userEdit.id,
        fullname: nextProps.userEdit.fullname,
        username: nextProps.userEdit.username,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type,
      })
    } else{
      // reset lại form
      this.setState({
        id: "",
        fullname: "",
        username: "",
        email: "",
        phoneNumber: "",
        type: "USER",
      })
    }
  }

  render() {
    // khi 
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.userEdit ? "EDIT USER" : "ADD USER"}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={this.closeModal}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="username" onChange={this.handleOnChange} 
                  // value={this.props.userEdit?.username} : cách này lấy dc giá trị ra nhưng ko edit dc
                  value={this.state.username}
                  />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="fullname" 
                  onChange={this.handleOnChange} 
                  value={this.state.fullname}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" onChange={this.handleOnChange} 
                  value={this.state.email}/>
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber" onChange={this.handleOnChange}
                  value={this.state.phoneNumber}/>
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" name="type" onChange={this.handleOnChange}
                  value={this.state.type}>
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    userEdit: state.userReducer.userEdit,
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    submitUser:(user)=>{
      dispatch(actOnSubmit(user));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
