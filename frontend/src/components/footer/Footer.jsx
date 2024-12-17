import React from "react";
import footer_img from "../Assets/logo_big.png";
import "./footer.css"

export default function Footer() {
  return (
    <div
      className="text-center"
      style={{
        backgroundColor: "var(--three)",
      }}
    >
      <div className="container py-5">
        <div className="footer-logo d-flex align-items-center justify-content-center  gap-4">
          <img src={footer_img} alt="" />
          <span className="fw-semibold fs-2">SHOPPER</span>
        </div>
        <ul
          className="footer-items d-flex justify-content-center gap-4 py-4 fw-semibold"
          style={{
            listStyle: "none",
          }}
        >
          <li className="footer-item">Company</li>
          <li className="footer-item">Products</li>
          <li className="footer-item">Offices</li>
          <li className="footer-item">About</li>
          <li className="footer-item">Contact</li>
        </ul>
        <div className="footer-social-media-icons d-flex justify-content-center gap-5">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-whatsapp"></i>
        </div>
        <div className="footer-copy-right mt-5">
            <hr />
            <p className="text-black-50">Copyright @ 2024 - All Right Reserved.</p>
        </div>
      </div>
    </div>
  );
}
