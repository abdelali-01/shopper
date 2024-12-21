import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Routes , Route } from 'react-router-dom'
import Addproduct from '../../components/Addproduct/Addproduct'
import ProductList from '../../components/productList/ProductList'

export default function Admin() {
  return (
    <div className='admin-page d-flex'>
      <Sidebar/>
      <Routes>
        <Route path='/addproduct' element={<Addproduct/>}/>
        <Route path='/allproduct' element={<ProductList/>}/>
      </Routes>
    </div>
  )
}
