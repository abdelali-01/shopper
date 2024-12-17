import React from 'react'

export default function NewsLetter() {
  return (
    <div className='container text-center py-5 my-5'>
      <h1 className='my-5'>Get Exclusive Offers On your Email</h1>
      <p>subscribe to our newsletter and stay updated</p>
      <div className="input w-50 m-auto d-flex justify-content-between rounded-5" style={{
          border : "1px solid #000" ,
      }}>
        <input type="email" placeholder='Put youe email here' style={{
            backgroundColor : "transparent" ,
            outline : "none" ,
            border : "none",
            padding : "10px"
        }}/>
        <button className='btn btn-dark rounded-5'>Subscribe</button>
      </div>
    </div>
  )
}
