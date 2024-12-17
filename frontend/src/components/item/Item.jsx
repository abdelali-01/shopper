import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {

  return (
    <div className="card" role="button">
      <Link to={`/product/${props.id}`}>
      <img src={props.image} alt="" className="card-img-top" onClick={()=>{
        window.scrollTo(0,0)
      }}/>
      </Link>
      <div className="item-info p-3">
        <h6>{props.name}</h6>
        <div className="item-price">
          <span className="new-price">${props.new_price}</span>
          <span
            className="old-price text-black-50 ms-4"
            style={{
              textDecoration: "line-through",
            }}
          >
            ${props.old_price}
          </span>
        </div>
      </div>
    </div>
  );
}
