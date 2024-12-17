import React from 'react'
import exlusive_img from "../Assets/exclusive_image.png"

export default function Offers() {
  return (
    <div className='offers d-flex align-items-center justify-content-between' style={{
        width : "70%" ,
        margin : "100px auto" ,
        padding : "30px" ,
        backgroundColor  : ""
    }}>
      <div className="offers-left">
        <h1 style={{fontSize : "40px"}}>Exclusive</h1>
        <h1 style={{fontSize : "40px"}}>Offers for you </h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button className='btn rounded-5 px-4 text-white' style={{
            backgroundColor : "var(--foor)"
        }}>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exlusive_img} alt=""  width={"300"}/>
      </div>
    </div>
  )
}
