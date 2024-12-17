import React from 'react'
import new_collections from "../Assets/new_collections"
import Item from '../item/Item'

export default function NewCollection() {
  return (
    <div className='new-collection container-md '>
      <h1 className='text-center my-5'>NEW COLLECTIONS</h1>
      <div className="new-collection-items" style={{
        display : "grid" ,
        gridTemplateColumns : "auto auto auto auto" ,
        gap  :"20px"
      }}>
        {new_collections.map((item , i)=>{
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}
