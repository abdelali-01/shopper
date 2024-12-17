import React, { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import all_product from "../components/Assets/all_product";

export default function Cart() {
  const { cartItems, removeFromCart, getTotal } = useContext(ShopContext);
  return (
    <div className="cart container-md py-5 ">
      <table className="cart-titles w-100 text-center">
        <thead>
          <tr>
            <th className="fw-bold">Products</th>
            <th className="fw-bold">Title</th>
            <th className="fw-bold">Price</th>
            <th className="fw-bold">Quantity</th>
            <th className="fw-bold">Total</th>
            <th className="fw-bold">Remove</th>
          </tr>
          <tr>
            <hr />
          </tr>
        </thead>
        <tbody className="cart-product-items">
          {all_product.map((e, i) => {
            if (cartItems[e.id] > 0) {
              return (
                <>
                  <tr key={i} className="item ">
                    <td>
                      <img src={e.image} alt="" width={"60"} />
                    </td>
                    <td>
                      <span
                        style={{
                          width: "150px",
                        }}
                      >
                        {e.name}
                      </span>
                    </td>
                    <td>
                      <span className="fw-bold text-danger">
                        ${e.new_price}
                      </span>
                    </td>
                    <td>
                      <span>{cartItems[e.id]}</span>
                    </td>
                    <td>
                      <span className="fw-bold text-danger">
                        ${e.new_price * cartItems[e.id]}
                      </span>
                    </td>
                    <td>
                      <i
                        onClick={() => {
                          removeFromCart(e.id);
                        }}
                        class="fa-solid fa-trash"
                        role="button"
                      ></i>
                    </td>
                  </tr>
                  <tr>
                    <hr />
                  </tr>
                </>
              );
            } else {
              return <></>;
            }
          })}
        </tbody>
      </table>

      <div className="subcart d-flex mt-5 gap-5">
        <div className="subcart-left flex-grow-1">
          <h3 className="fw-bold my-3">Cart total</h3>
          <div className="subcart-left-item d-flex align-items-center justify-content-between">
            <span>Subtotal</span>
            <span>${getTotal()}</span>
          </div>
          <hr />
          <div className="subcart-left-item d-flex align-items-center justify-content-between">
            <span>Shipping Free</span>
            <span>Free</span>
          </div>
          <hr />
          <div className="subcart-left-item d-flex align-items-center justify-content-between">
            <span className="fw-bold">Total</span>
            <span className="fw-bold text-danger">${getTotal()}</span>
          </div>
          <button className="btn btn-danger rounded-0 mt-4">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="subcart-right">
          <label htmlFor="code-promo" className="text-black-50">
            If you have a promo code , Enter it here{" "}
          </label>
          <div
            className="code-promo-input d-flex align-items-center justify-content-between mt-2 p-0"
            style={{
              border: "1px solid",
            }}
          >
            <input
              type="text"
              id="code-promo"
              placeholder="Promo code"
              style={{
                backgroundColor: "transparent",
                border: "none",
                outline: "none",
                width: "80%",
                padding: "0 10px",
              }}
            />
            <button className="btn btn-dark rounded-0 m-0 ">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
