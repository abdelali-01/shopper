import React from 'react'
import data_product from '../Assets/data' ;
import Item from '../item/Item';

export default function Popular() {
  return (
    <div className='popular container-md my-5'>
      <h1 className=' text-center '>POPULAR IN WOMAN </h1>
      <div className="popular-items d-flex align-items-center gap-3 my-5">
        {data_product.map((item , index)=>{
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}
