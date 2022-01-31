import "./productList.css";
import React from "react";
import Product from "../product/Product"
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. Its Vishrut Agarwalla</h1>
        <p className="pl-desc">
          Vishrut is a creative portfolio that works on your beautiful
          homes,stunning portfolio styles and much more.
        </p>
      </div>
      <div className="pl-list">
          {products.map(item => (
            <Product key={item.id} img={item.img} link={item.link}/>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
