import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import Listproduct from "./list-product";
import Promotion from "./promotion";
import "./../index.css"


function Baitap3(){
    return(
        <div class="bg-dark">
            <Header/>
            <Carousel/>
            <Listproduct/>
            <Promotion/>
        </div>
    )
}

export default Baitap3;
