import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {

  renderListProduct=()=>{
    const {listProduct} = this.props;
    return listProduct.map((product)=>{
      return(
        <SanPham 
        key={product.maSP} 
        product={product} 
        detailProduct={this.props.detailProduct} 
         // {this.props.detailProduct} tên hàm detailProduct là dc truyền từ index
        addProduct={this.props.addProduct}/>
      )
    });
  }
  render() {
    
    return (
      <div className="container">
        <div className="row">
          {/* <SanPham />
          <SanPham />
          <SanPham /> */}
          {this.renderListProduct()}
        </div>
      </div>
    );
  }
}
