import React from "react";
import hero_img from "../Assets/hero_image.png"

export default function Hero() {
  return (
    <div className="container-md d-flex align-items-center justify-content-between">
      <div className="hero-left">
        <p className="my-0">NEW ARRIVALS ONLY</p>
        <p className="fw-bold fs-1 my-0">new </p>
        <p className="fw-bold fs-1 my-0">collections </p>
        <p className="fw-bold fs-1 my-0">for everyone </p>
        <button className="btn d-flex align-items-center text-white rounded-5 py-2 fw-semibold my-4" style={{
            backgroundColor : "var(--foor)"
        }}>
          <span>Lalest collection </span>
          <i class=" ms-4 fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="" width={"400"}/>
      </div>
    </div>
  );
}
