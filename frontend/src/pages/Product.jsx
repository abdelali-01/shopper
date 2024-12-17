import React, { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { useParams } from "react-router-dom";
import data_product from "../components/Assets/data";
import Item from "../components/item/Item";
export default function Product() {
  const { all_product , addToCart} = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div className="product container py-5">
      <div className="product-path">
        <p>
          HOME
          <i
            class="fa-solid fa-angle-down mx-2"
            style={{ rotate: "-90deg" }}
          ></i>
          SHOP
          <i
            class="fa-solid fa-angle-down mx-2"
            style={{ rotate: "-90deg" }}
          ></i>
          {product.category}
          <i
            class="fa-solid fa-angle-down mx-2"
            style={{ rotate: "-90deg" }}
          ></i>
          {product.name}
        </p>
      </div>
      <div className="product-display d-flex gap-5">
        <div className="product-display-left d-flex gap-2">
          <div className="product-display-left-imgs d-flex flex-column gap-2">
            <img src={product.image} alt="" width={"100"} />
            <img src={product.image} alt="" width={"100"} />
            <img src={product.image} alt="" width={"100"} />
            <img src={product.image} alt="" width={"100"} />
          </div>
          <div className="product-display-left-img">
            <img src={product.image} alt="" width={"420"} />
          </div>
        </div>
        <div className="product-display-right">
          <h2 className="fw-semibold">{product.name}</h2>
          <div className="product-rate my-4">
            <i class="fa-solid fa-star" style={{ color: "var(--foor)" }}></i>
            <i class="fa-solid fa-star" style={{ color: "var(--foor)" }}></i>
            <i class="fa-solid fa-star" style={{ color: "var(--foor)" }}></i>
            <i class="fa-solid fa-star" style={{ color: "var(--foor)" }}></i>
            <i class="fa-regular fa-star" style={{ color: "var(--foor)" }}></i>
            <span>(122)</span>
          </div>
          <div className="product-price">
            <span
              className="text-black-50 fw-bold fs-5"
              style={{ textDecoration: "line-through" }}
            >
              ${product.old_price}
            </span>
            <span className="ms-4 text-danger fw-bold fs-5">
              ${product.new_price}
            </span>
          </div>
          <p className="product-mini-description fw-semibold my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cum
            excepturi tempore quae possimus dicta, libero facere ullam quis
            cumque.
          </p>
          <div className="product-size mt-5">
            <h3 className="text-black-50">Select size</h3>
            <div className="product-size-items d-flex align-items-center gap-2 my-3">
              <div className="product-size-item active-product-size-item">
                S
              </div>
              <div className="product-size-item ">M</div>
              <div className="product-size-item ">L</div>
              <div className="product-size-item ">XL</div>
              <div className="product-size-item ">XXL</div>
            </div>
          </div>
          <button onClick={()=>{
            addToCart(product.id)
          }} className="btn btn-danger rounded-0 px-5 py-2">
            Add to cart
          </button>
          <div className="product-cat-tags mt-4">
            <p className="my-1">
              <span className="fw-bold">Category : </span> {product.category}
            </p>
            <p className="my-1">
              <span className="fw-bold">tags : </span> Modern , Lalest
            </p>
          </div>
        </div>
      </div>
      <div className="product-dectription-box mt-5">
        <div className="product-description-navs d-flex ">
          <div className="product-description-nav active-product-description-nav">
            Description
          </div>
          <div className="product-description-nav ">Reviews(122)</div>
        </div>
        <div className="product-desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            totam alias iusto voluptates rem, quaerat distinctio quae minima
            voluptatem quasi dicta molestiae id accusamus quas ipsum error
            delectus, molestias pariatur ipsa nobis eos, magni debitis
            praesentium. Explicabo pariatur a nulla. Consequuntur laudantium
            illum unde accusamus rem, quae necessitatibus illo ipsa!
          </p>
        </div>
      </div>

      <div className="product-related mt-5 py-5">
        <h1 className="text-center">Related products</h1>
        <div className="related-product-items d-flex gap-3 mt-5" >
          {data_product.map((item, i) => {
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
          })}
        </div>
      </div>
    </div>
  );
}
