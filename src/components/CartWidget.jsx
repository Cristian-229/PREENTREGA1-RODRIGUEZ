import React from 'react'
import '../styles/navbar.css'
import cart from '../assets/cart.svg'


const CartWidget = () => {
  return (
    <>
    <img className="cart" src={cart} alt="cart" />
    <span>(3)</span>
    </>
  )
}

export default CartWidget