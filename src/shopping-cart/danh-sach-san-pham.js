import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {

  renderListProduct=()=>{
    const {listProduct} = this.props;
    return listProduct.map((product)=>{
      return(
        <SanPham key={product.maSP} product={product}/>
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
