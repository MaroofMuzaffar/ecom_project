import React from 'react'
import Herosection from "../Components/HeroSection"
import Cart from '../Components/Cart'

export default function CartPage() {
  return (
    <>
      <Herosection title="Cart-section"/>
      <div className="container-fulid my-3">
        <Cart title="Cart"/>
      </div>
    </>
  )
}

