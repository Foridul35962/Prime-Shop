import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaLocationDot } from 'react-icons/fa6';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaCaretDown } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';
import { MdLightMode } from 'react-icons/md';
import { HiMenuAlt1 } from 'react-icons/hi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import axios from 'axios';
import Menubar from './Menubar';



const Navbar = () => {

  const [location, setLocation] = useState('');
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const { latitude, longitude } = pos.coords;
      const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
      try {
        const allLocation = await axios.get(url);
        setLocation(allLocation.data);
        setHandleLocation(false);

      } catch (error) {
        console.log(error);
      }
    })
  }

  useEffect(() => {
    getLocation();
  }, [])

  const [handleLocation, setHandleLocation] = useState(false);
  const [mode, setMode] = useState(false);

  const [menuBar, setMenuBar] = useState(false);

  return (
    <>
      <div className='fixed top-0 w-full left-0 bg-white dark:bg-gray-700 dark:text-white z-10'>
        <div className='container mx-auto flex justify-between py-3 px-4 md:px-6 lg:px-0 items-center'>
          <div className='flex items-center justify-center gap-10'>
            <div>
              <Link to='/' className='font-bold'>
                <span className='text-3xl text-red-600'>P</span>
                <span className='text-2xl'>rime Shop</span>
              </Link>
            </div>
            <div className='items-center gap-2 hidden md:flex'>
              <div>
                <FaLocationDot className='text-red-600 text-xl' />
              </div>
              <div className='flex items-center gap-1.5'>
                {location ? <div>
                  <p>{location.locality}</p>
                  <p>{location.city}</p>
                </div> : <div>Add Address</div>
                }
                <FaCaretDown className='cursor-pointer' onClick={() => setHandleLocation(!handleLocation)} />
              </div>
            </div>
          </div>
          <div className={`${handleLocation ? '' : 'hidden'} fixed z-50 h-30 w-70 top-15 left-10 md:left-70 bg-white dark:bg-gray-600 rounded-xl shadow-2xl`}>
            <MdOutlineCancel className='absolute top-2 right-2 text-xl cursor-pointer' onClick={() => setHandleLocation(!handleLocation)} />
            <div className='flex flex-col h-full items-center justify-center text-xl gap-1.5'>
              <p>Change Location</p>
              <button onClick={getLocation} className='bg-red-600 text-white rounded-xl py-1 px-1.5 cursor-pointer'>Detect My Location</button>
            </div>
          </div>
          <div className='hidden lg:block'>
            <ul className='flex gap-8 text-lg [&>*]:font-semibold items-center'>
              <li><NavLink to='/' className={({ isActive }) => isActive ? 'border-b-3 border-red-700' : 'transform transition-all duration-300 hover:text-xl'}>Home</NavLink></li>
              <li><NavLink to='/product' className={({ isActive }) => isActive ? 'border-b-3 border-red-700' : 'transform transition-all duration-300 hover:text-xl'}>Product</NavLink></li>
              <li><NavLink to='/about' className={({ isActive }) => isActive ? 'border-b-3 border-red-700' : 'transform transition-all duration-300 hover:text-xl'}>About</NavLink></li>
              <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'border-b-3 border-red-700' : 'transform transition-all duration-300 hover:text-xl'}>Contact</NavLink></li>
              <li><NavLink to='/cart' className={({ isActive }) => isActive ? 'border-b-3 border-red-700' : 'transform transition-all duration-300 hover:text-xl'}><AiOutlineShoppingCart className='text-3xl' /></NavLink></li>
              <li className='text-xl cursor-pointer hover:scale-105'
                onClick={() => {
                  setMode((mode) => {
                    const newMode = !mode;
                    document.documentElement.classList.toggle('dark', newMode);
                    return newMode;
                  })
                }}>{mode ? <MdLightMode /> : <MdDarkMode />}
              </li>
              <li className='[&>*]:cursor-pointer'>
                <SignedOut>
                  <SignInButton className='bg-red-500 p-1 rounded-md text-white' />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </li>
            </ul>
          </div>
          <div onClick={() => setMenuBar(!menuBar)} className='cursor-pointer lg:hidden'>
            {menuBar ? <HiMenuAlt1 className='size-6' /> : <HiMenuAlt3 className='size-6' />}
          </div>
        </div>
      </div>
      <Menubar menuBar={menuBar} mode={mode} setMode={setMode} setMenuBar={setMenuBar} location={location} setHandleLocation={setHandleLocation} handleLocation={handleLocation}/>
    </>
  )
}

export default Navbar