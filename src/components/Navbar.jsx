import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaLocationDot } from 'react-icons/fa6';
import { AiOutlineShoppingCart } from 'react-icons/ai';



const Navbar = () => {

  const [isLocation, setIsLocation] = useState(false);

  return (
    <div className='flex justify-between py-3 items-center'>
      <div className='flex items-center justify-center gap-10'>
        <div>
          <Link to='/' className='font-bold'>
            <span className='text-3xl text-red-600'>P</span>
            <span className='text-2xl text-black'>rime Shop</span>
          </Link>
        </div>
        <div className='flex'>
          <div>
            <FaLocationDot className='text-red-600 text-xl' />
          </div>
          <div>
            {isLocation ? <div></div> : <div>Add Address</div>}
          </div>
        </div>
      </div>
      <div>
        <ul className='flex gap-8 text-lg [&>*]:font-semibold'>
          <li><NavLink to='/' className={({isActive})=>isActive?'border-b-3 border-red-700': 'transform transition-all duration-300 hover:text-xl'}>Home</NavLink></li>
          <li><NavLink to='/product' className={({isActive})=>isActive?'border-b-3 border-red-700': 'transform transition-all duration-300 hover:text-xl'}>Product</NavLink></li>
          <li><NavLink to='/about' className={({isActive})=>isActive?'border-b-3 border-red-700': 'transform transition-all duration-300 hover:text-xl'}>About</NavLink></li>
          <li><NavLink to='/contact' className={({isActive})=>isActive?'border-b-3 border-red-700': 'transform transition-all duration-300 hover:text-xl'}>Contact</NavLink></li>
          <li><NavLink to='/cart' className={({isActive})=>isActive?'border-b-3 border-red-700': 'transform transition-all duration-300 hover:text-xl'}><AiOutlineShoppingCart className='text-3xl'/></NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar