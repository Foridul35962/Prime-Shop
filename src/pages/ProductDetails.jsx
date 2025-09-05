import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {
    const location = useLocation()
    console.log(location.state);
    
  return (
    <div>{location.state.title}</div>
  )
}

export default ProductDetails