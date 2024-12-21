import React, { useState } from 'react'
import "./addproduct.css"
import upload_area from "../../Assets/upload_area.svg"

export default function Addproduct() {
    const [image , setImage] = useState(false);

    const handleImage = (e)=>{
        setImage(e.target.files[0]);        
    }
  return (
    <div className='p-3 m-5 flex-grow-1' style={{
        backgroundColor : "var(--three)" ,
        boxShadow : "0px .1px 6px "
    }}>
        <form action="">
            <div className="addproduct-field d-flex flex-column">
                <label htmlFor="name">Product Name</label>
                <input type="text" id='name' name='name' placeholder='Type the product name'/>
            </div>
            <div className="addproduct-pricing d-flex gap-3 w-100 my-2">
                <div className="addproduct-field d-flex flex-column  flex-grow-1">
                    <label htmlFor="price">Price</label>
                    <input type="text" id='price' name='old_price' placeholder='Type here'/>
                </div>
                <div className="addproduct-field d-flex flex-column flex-grow-1">
                    <label htmlFor="new_price">Offer Price</label>
                    <input type="text" id='new_price' name='new_price' placeholder='Type here'/>
                </div>
            </div>
            <div className="addproduct-field d-flex flex-column">
                <label htmlFor="category">Product Category</label>
                <select name="category" id="category">
                    <option disabled hidden selected>Select Category</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kids">Kids</option>
                </select>
            </div>
            <div className="addproduct-img my-2 position-relative">
                <label htmlFor="img-field">
                      <img src={image?URL.createObjectURL(image):upload_area} alt="" style={{
                        width : "100%",
                        height : "400px" ,
                        objectFit : "cover" ,

                      }}/>
                      {image ? <i class="fa-solid fa-x" onClick={()=>{
                        setImage(false);
                      }} style={{
                        position : "absolute" ,
                        backgroundColor : "#fff" ,
                        width : "25px", 
                        height : "25px",
                        borderRadius :"50%",
                        top : "5px" ,
                        display : "flex" ,
                        alignItems :"center" ,
                        justifyContent : "center" ,
                        right :"5px"
                      }}></i>: <></>}
                </label>
                <input onChange={handleImage} type="file" id='img-field' name='image' hidden/>
            </div>
            <button className='btn btn-success rounded-1 text-center'>Add product</button>
        </form>
    </div>
  )
}
