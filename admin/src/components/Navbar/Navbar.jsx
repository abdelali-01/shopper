import React from 'react'
import logo from '../../Assets/logo.png'
import admin from "../../Assets/admin.png"

export default function Navbar() {
  return (
    <div className='navbar' style={ {
      boxShadow : "1px -3px 9px "
    }}>
      <div className="container-md">
        <div className="navbar-brand d-flex align-items-center gap-3">
            <img src={logo} alt="" />
            <div className="navbar-brand-text d-flex flex-column">
                <span className="fw-bold fs-4">SHOPPER</span>
                <span className="text-danger fs-6">Admin Panel</span>
            </div>
        </div>
        <div className="navbar-profile-admin">
            <img src={admin} role='button' alt="" style={{
              width : "50px",
              height : "50px",
              borderRadius : "50%",
              objectFit : "cover" ,
              border : "1px solid"
            }}/>
        </div>
      </div>
    </div>
  )
}
