import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class LiftingStateUpCart extends Component {
  constructor(props){
    super(props);
    this.state={
      listProduct: data,
      detailProduct: data[0],
      listCart:[]
    }
  }

  handleDetailProduct=(product)=>{
    // hàm nhận product từ component san-pham truyền ra
    //console.log(product);
    // cập nhật lại state để component render lại product mới
    this.setState({
      detailProduct: product,
    });
  };
  // tìm sp theo mã
  _findIndex=(maSP)=>{
    return this.state.listCart.findIndex((item)=>{
      return item.maSP === maSP;
    });
  }

  // thêm sp
  addProduct=(product)=>{
    let listCart = [...this.state.listCart]; // do array là biến tham chiếu, nên dùng cách của ES6 (spread operator) gắn listCart = [...this.state.listCart] để không làm thay đổi listcart ban đầu

    // tìm kiếm xem product có tồn tại trong state.listCart
    const index = this._findIndex(product.maSP)
    if(index !== -1 ){
      // tìm thấy => cập nhật lại số lượng
      listCart[index].soLuong +=1;
    } else {
      // them product mới
      const productCart = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
        donGia: product.giaBan,
      };
      listCart.push(productCart);
    }
    // không return được, do cần render lại để thay đổi dc array giỏ hàng mỗi lần thêm nên dùng setState
    this.setState({
      listCart,
    },()=>{
      console.log(listCart);
      // do hàm setState bất đồng bộ nên console vào tham số thứ 2
    })
    //console.log(productCart);
  }

  // xóa sản phẩm
  deleteProduct=(product)=>{
    //console.log(product);
    const index = this._findIndex(product.maSP);
    if(index !== -1){
      let listCart = [...this.state.listCart];
      listCart.splice(index, 1);
      this.setState({
        listCart,
    })
    }
  }
  // button + - sản phẩm
  handleUpdateQuantity=(product,status)=>{
    const index = this._findIndex(product.maSP)
    if(index !== -1 ){
      let listCart = [...this.state.listCart];
      if(status){
        listCart[index].soLuong +=1;
      } else{
        if(listCart[index].soLuong>1){
          listCart[index].soLuong -=1;
        }
      }
      this.setState({
        listCart,
    })
    }
  }

  // thêm số số lượng trong giỏ hàng
  totalQuantity=()=>{
    return this.state.listCart.reduce((total, product)=>{
      return total + product.soLuong;
    },0);

  }

  render() {
    const {listProduct, detailProduct} = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.totalQuantity()})
          </button>
        </div>
        <DanhSachSanPham 
        listProduct={listProduct} 
        detailProduct={this.handleDetailProduct} 
        addProduct={this.addProduct}/>
        <Modal 
        listCart={this.state.listCart} 
        productDel={this.deleteProduct} 
        productUpdateQuantity={this.handleUpdateQuantity}/>
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
