import React from "react";
import Product from "./product";
export default function Listproduct() {
    return (
        <section id="smartphone" className="container-fluid pt-5 pb-5 bg-light text-dark">
            <h1 className="text-center">BEST SMARTPHONE</h1>
            <div className="row">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
        </section>

    )
}