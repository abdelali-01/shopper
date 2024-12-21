import React from 'react'
import {Link} from "react-router-dom"

export default function Sidebar() {
  return (
    <div className='p-3' style={{backgroundColor  :"var(--three)" , width : "300px" , height : "calc(100vh - 70px)"}}>
      <Link to={"/addproduct"} >
        <div className="sidebar-item d-flex align-items-center gap-3 fs-5 fw-semibold p-2 my-2 rounded-2" style={{
          backgroundColor : "#fff"
        }}>
        <i class="fa-solid fa-folder-plus text-danger fs-3"></i>
        <span>Add product</span>
        </div>
      </Link>
      <Link to={"/allproduct"} >
        <div className="sidebar-item d-flex align-items-center gap-3 fs-5 fw-semibold p-2 my-2 rounded-2" style={{
          backgroundColor : "#fff"
        }}>
        <i class="fa-solid fa-list text-danger fs-3"></i>
        <span>Product List</span>
        </div>
      </Link>
    </div>
  )
}
