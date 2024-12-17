import React, { useContext, useState } from "react";
import "./navbar.css";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../contexts/ShopContext";

export default function Navbar() {
  const [navItem, setNavItem] = useState("shop");
  const {getTotalForSpan} = useContext(ShopContext);
  return (
    <div className="navbar navbar-expand-lg ">
      <div className="container-md">
        <div className="navbar-brand d-flex align-items-center">
          <Link to="/">
            <img src={logo} alt="" width={"50"} />
          </Link>
          <span className="fw-bold fs-4 ms-2 ">SHOPPER</span>
        </div>
        <div className="flex-grow-1"></div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto d-flex align-items-center gap-5">
            <li
              className={`nav-item fw-semibold ${
                navItem === "shop" ? "active-item" : ""
              }`}
              role="button"
              onClick={() => {
                setNavItem("shop");
              }}
            >
              <Link className="nav-link" to={"/"}>
              Shop
              </Link>
            </li>
            <li
              className={`nav-item fw-semibold ${
                navItem === "men" ? "active-item" : ""
              }`}
              role="button"
              onClick={() => {
                setNavItem("men");
              }}
            > 
            <Link className="nav-link" to={"/men"}>Men</Link>
            </li>
            <li
              className={`nav-item fw-semibold ${
                navItem === "women" ? "active-item" : ""
              }`}
              role="button"
              onClick={() => {
                setNavItem("women");
              }}
            >
              <Link className="nav-link" to={"women"}>Women</Link>
            </li>
            <li
              className={`nav-item fw-semibold ${
                navItem === "kids" ? "active-item" : ""
              }`}
              role="button"
              onClick={() => {
                setNavItem("kids");
              }}
            >
              <Link className="nav-link" to={"/kids"}>Kids</Link>
            </li>
          </ul>
          <div className="nav-login-cart d-flex align-items-center gap-5">
            <Link to={"/login"}>
            <button className="btn btn-outline-dark rounded-5 px-4 fw-semibold">
              Login
            </button>
            </Link>
            <Link to={"/cart"}>
            <div className="nav-cart position-relative" role="button">
              <i class="fa-solid fa-cart-shopping fs-4 "></i>
              <span className="nav-cart-conter">{getTotalForSpan()}</span>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
