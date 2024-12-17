import React, { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import Item from "../components/item/Item";

export default function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="container-md py-4">
      <div className="img">
        <img src={props.banner} alt="" className="w-100" />
      </div>
      <div className="shop-category-items-section my-4">
        <div className="shop-category-sortby d-flex align-items-center justify-content-between">
          <p className="my-0">
            <span className="fw-bold">Showing 1-12</span>
            <span> out of 36 products</span>
          </p>
          <button className="btn btn-outline-dark rounded-5 px-4 d-flex align-items-center gap-2">
            <span>Sort By</span>
            <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
        <div
          className="shop-category-items my-3"
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto auto",
            gap: "20px",
          }}
        >
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="shop-category-loadmore text-center my-5">
        <button className="btn btn-secondary rounded-5 px-4 py-2">Explore More</button>
        </div>
      </div>
    </div>
  );
}
