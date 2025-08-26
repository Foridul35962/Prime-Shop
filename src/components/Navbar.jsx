import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaLocationDot } from 'react-icons/fa6';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaCaretDown } from 'react-icons/fa';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import axios from 'axios';



const Navbar = () => {

  const [location, setLocation] = useState('');
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords;
      const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
      try {
        const allLocation = await axios.get(url);
        setLocation(allLocation.data);

      } catch (error) {
        console.log(error);
      }
    })
  }

  useEffect(() => {
    getLocation();
  }, [])

  return (
    <div className='flex justify-between py-3 items-center'>
      <div className='flex items-center justify-center gap-10'>
        <div>
          <Link to='/' className='font-bold'>
            <span className='text-3xl text-red-600'>P</span>
            <span className='text-2xl text-black'>rime Shop</span>
          </Link>
        </div>
        <div className='flex items-center gap-2'>
          <div>
            <FaLocationDot className='text-red-600 text-xl' />
          </div>
          <div className='flex items-center gap-1.5'>
            {location ? <div>
              <p>{location.locality}</p>
              <p>{location.city}</p>
            </div> : <div>Add Address</div>
            }
            <FaCaretDown className='cursor-pointer' onClick={handleLocation} />
          </div>
        </div>
      </div>
      <div>
        <ul className='flex gap-8 text-lg [&>*]:font-semibold'>
          <li><NavLink to='/' className={({ isActive }) => isActive ? 'border-b-3 border-red-700' : 'transform transition-all duration-300 hover:text-xl'}>Home</NavLink></li>
          <li><NavLink to='/product' className={({ isActive }) => isActive ? 'border-b-3 border-red-700' : 'transform transition-all duration-300 hover:text-xl'}>Product</NavLink></li>
          <li><NavLink to='/about' className={({ isActive }) => isActive ? 'border-b-3 border-red-700' : 'transform transition-all duration-300 hover:text-xl'}>About</NavLink></li>
          <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'border-b-3 border-red-700' : 'transform transition-all duration-300 hover:text-xl'}>Contact</NavLink></li>
          <li><NavLink to='/cart' className={({ isActive }) => isActive ? 'border-b-3 border-red-700' : 'transform transition-all duration-300 hover:text-xl'}><AiOutlineShoppingCart className='text-3xl' /></NavLink></li>
          <li className='[&>*]:cursor-pointer'>
            <SignedOut>
              <SignInButton className='bg-red-500 p-1 rounded-md text-white' />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar