import React from 'react'
import "./css/style.css"
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollection from '../components/newCollection/NewCollection'
import NewsLetter from '../components/newletter/NewsLetter'

export default function Shop() {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}
