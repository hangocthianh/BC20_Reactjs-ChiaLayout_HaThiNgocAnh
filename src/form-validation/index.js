import React, { Component } from 'react'

export default class FormValidation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // tên các thuộc tính ở values và errors phải giống nhau.
            values: {
                manv: "",
                tennv: "",
                email: "",
            },
            errors: {
                // để chứa các giá trị bị sai/lỗi
                manv: "",
                tennv: "",
                email: "",
                
            },
            
            formValid: false,
            manvValid: false,
            tennvValid: false,
            emailValid: false,
        };
        
    }
    handleOnChange = (event) => {
        const { name, value } = event.target;
        this.setState(
            {
                // ...this.state.values để giữ các thông tin thêm trước
                values: { ...this.state.values, [name]: value },
            },
            () => {
                console.log(this.state);
            })
    }
    handleError = (event) => {
        const { name, value } = event.target;
        // let mess="";
        // tóan tử 3 ngôi: đk ? "ĐK đúng": "ĐK sai"
        let mess = value.trim() === "" ? "Vui lòng nhập " + name : "";
        // if(value.trim()===""){
        //     // lỗi
        //     mess="Vui lòng nhập" + name;
        // } else{
        //     mess="";
        // }
        let { manvValid, tennvValid, emailValid } = this.state;
        // if(name==="manv"){
        //     manvValid = mess ===""?true: false;
        // }
        switch (name) {
            case "manv":
                manvValid = mess === "" ? true : false;
                if(value && !value.lenghth <=4){
                    manvValid = false;
                    mess = "Độ dài ký từ phải từ 5 trở lên!"
                }
                break;
            case "tennv":
                tennvValid = mess === "" ? true : false;
                if(value && !value.lenghth <=8){
                    tennvValid = false;
                    mess = "Độ dài ký từ phải từ 8 trở lên!"
                }
                break;
            case "email":
                emailValid = mess === "" ? true : false;
                if(value && !value.match("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$")){
                    emailValid = false;
                    mess = "Email chưa hợp lệ!"
                }
                break;
            default:
                break;
        }
        this.setState({
            errors: { ...this.state.errors, [name]: mess },
            manvValid,
            tennvValid,
            emailValid,
            formValid: manvValid && tennvValid && emailValid,
        },
            () => {
                console.log(this.state);
                //this.handleFormValid();
            })
    }
    // handleFormValid=()=>{
    //     const{manvValid, tennvValid, emailValid}= this.state;
    //     this.setState({
    //         formValid: manvValid && tennvValid && emailValid,
    //     })
    // }
    render() {
        return (
            <div className="container p-5">
                <h3 className="title">*FormValidation</h3>
                <form>
                    <div className="form-group">
                        <label>Mã Nhân Viên</label>
                        <input type="text" className="form-control" name="manv"
                            onChange={this.handleOnChange}
                            onBlur={this.handleError} />
                    </div>
                    {this.state.errors.manv && (
                        <div className="alert alert-danger">{this.state.errors.manv}</div>)}
                    {/* // mệnh đề && cả 2 đều đúng mới ra đúng */}
                    <div className="form-group">
                        <label>Tên Nhân Viên</label>
                        <input type="text" className="form-control" name="tennv"
                            onChange={this.handleOnChange}
                            onBlur={this.handleError} />
                    </div>
                    {this.state.errors.tennv && (
                        <div className="alert alert-danger">{this.state.errors.tennv}</div>)}
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email"
                            onChange={this.handleOnChange}
                            onBlur={this.handleError} />
                    </div>
                    {this.state.errors.email && (
                        <div className="alert alert-danger">{this.state.errors.email}</div>)}
                    <button type="submit" className="btn btn-success" disabled={!this.state.formValid}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
