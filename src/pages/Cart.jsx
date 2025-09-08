import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  let {cart} = useSelector((store)=>store.cart)
  cart= new Set(cart)
  console.log(cart);
  
  return (
    <div></div>
  )
}

export default Cart