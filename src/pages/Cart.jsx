import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaRegTrashAlt } from 'react-icons/fa';
import { LuNotebookText } from 'react-icons/lu';
import { MdDeliveryDining } from 'react-icons/md';
import { LiaHandLizard } from 'react-icons/lia';
import useGeoLocation from '../store/useGeoLocation';
import { useUser } from '@clerk/clerk-react';
import { AddCartAction } from '../store/AddCart';

const Cart = () => {
  let { cart } = useSelector((store) => store.cart)

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const dispatch = useDispatch()

  //set location in hooks

  const { location, getLocation } = useGeoLocation();

  useEffect(() => {
    getLocation();
  }, []);

  //set delivery info
  const { user, isSignedIn } = useUser()
  const [name, setName] = useState(user?.fullName ?? "");
  const [address, setAddress] = useState(location?.locality ?? "")
  const [state, setState] = useState(location?.city ?? "")
  const [pc, setPc] = useState('')
  const [country, setCountry] = useState(location?.countryName ?? "")
  const [pn, setPn] = useState('')

  //call all element
  useEffect(() => {
    if (user) setName(user.fullName);
  }, [user]);

  useEffect(() => {
    if (location) {
      setAddress(location.locality || "");
      setState(location.city || "");
      setCountry(location.countryName || "");
    }
  }, [location]);

  let totalPrice=0


  return (
    <div className='w-dvw bg-gray-200 dark:text-white px-5 py-8 md:px-40 dark:bg-gray-800 flex flex-col gap-10'>
      <h1 className='text-2xl font-bold'>My Cart ({cart.length})</h1>
      <div className='flex flex-col gap-5 bg-gray-300 dark:bg-gray-900 shadow-2xl shadow-black rounded-xl px-4 md:px-5 py-7 mb-5'>
        {
          cart.length > 0 ? (
            cart.map((product, idx) => (
              <div key={idx} className='*:flex flex gap-5 bg-gray-400 items-center *:items-center rounded-xl dark:bg-gray-950 p-2 md:p-5 md:pr-8'>
                <img src={product.image} className='size-20' alt="" />
                <div className='flex-col md:flex-row w-full md:justify-between'>
                  <div className='w-full md:w-70'>
                    <p className='line-clamp-2'>{product.title}</p>
                    <p className='text-red-600'>{product.price}</p>
                  </div>
                  <div className='flex w-full md:w-1/2 items-center justify-between'>
                    <div className='bg-red-600 text-white text-lg items-center  flex gap-2.5 rounded-lg py-1 px-1.5'>
                      <button className='cursor-pointer text-xl' onClick={()=>dispatch(AddCartAction.decrementQuantity(product.id))}>-</button>
                      {product.quantity}
                      <button className='cursor-pointer' onClick={()=>dispatch(AddCartAction.incrementQuantity(product.id))}>+</button>
                    </div>
                    <FaRegTrashAlt onClick={()=>dispatch(AddCartAction.cartDelete(product.id))} className='cursor-pointer' />
                  </div>
                </div>
              </div>
            ))) : (<div className='text-2xl text-center'>You Don't Add Any Product</div>)
        }
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 bg-gray-300 dark:bg-gray-900 shadow-2xl shadow-black rounded-xl p-3 md:p-5 mb-5'>
        <div className='bg-gray-400 rounded-xl dark:bg-gray-950 p-2 md:p-5'>
          <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold my-2'>Delivery Info</h1>
            <div className='flex flex-col'>
              <label className='ml-2' htmlFor="name">Full Name</label>
              <input className='w-full bg-white text-black rounded-xl px-2 py-1' type="text" id='name' placeholder='Ex: Foridul' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='flex flex-col'>
              <label className='ml-2' htmlFor="address">Address</label>
              <input className='w-full bg-white text-black rounded-xl px-2 py-1' type="text" id='address' placeholder='Ex: Sutrapur' value={address} onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              <div>
                <label className='ml-2' htmlFor="state">State</label>
                <input className='w-full bg-white text-black rounded-xl px-2 py-1' type="text" id='state' placeholder='Ex: Old Dhaka' value={state} onChange={(e) => setState(e.target.value)} />
              </div>
              <div>
                <label className='ml-2' htmlFor="PC">Post Code</label>
                <input className='w-full bg-white text-black rounded-xl px-2 py-1' type="text" id='PC' placeholder='Ex: 1100' value={pc} onChange={(e) => setPc(e.target.value)} />
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
              <div>
                <label className='ml-2' htmlFor="country">Country</label>
                <input className='w-full bg-white text-black rounded-xl px-2 py-1' type="text" id='country' placeholder='Ex: Bangladesh' value={country} onChange={(e) => setCountry(e.target.value)} />
              </div>
              <div>
                <label className='ml-2' htmlFor="PN">Phone Number</label>
                <input className='w-full bg-white text-black rounded-xl px-2 py-1' type="number" id='PN' placeholder='Ex: +8801712345678' value={pn} onChange={(e) => setPn(e.target.value)} />
              </div>
            </div>
            <button className='bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-xl py-2 px-4 cursor-pointer transition duration-300 w-fit uppercase' type='submit'>Submit</button>
          </form>
        </div>
        <div className='flex flex-col gap-3 bg-gray-400 rounded-xl dark:bg-gray-950 p-2 md:p-5'>
          <h1 className='text-2xl font-bold my-2'>Bill Details</h1>
          <div className='*:flex *:justify-between *:items-center'>
            <div>
              <p className='flex items-center gap-1'><LuNotebookText /> Items Total</p>
              <p>{cart?.map((e)=>{totalPrice+=e.price})}{Number(totalPrice.toFixed(2))}</p>
            </div>
            <div>
              <p className='flex items-center gap-1'><MdDeliveryDining /> Delivery Charge</p>
              <p><span className='text-red-600 line-through'>$25</span> Free</p>
            </div>
            <div>
              <p className='flex items-center gap-1'><LiaHandLizard /> Handling Charge</p>
              <p>$5</p>
            </div>
          </div>
          <div className='flex justify-between text-red-600 text-lg'>
            <p>Grand Total</p>
            <p>${Number(totalPrice.toFixed(2))+5}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="promoCode">Apply Promo Code</label>
            <div className='relative'>
              <input className='w-full bg-white text-black rounded-xl p-2' type="text" id='promoCode' placeholder='Enter Promo Code' />
              <button className='absolute top-0 right-0 flex justify-center items-center gap-1 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-br-xl rounded-tr-xl p-2 cursor-pointer transition duration-300 text-center'>Apply</button>
            </div>
          </div>
          <button className='flex justify-center items-center gap-1 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-xl p-2 cursor-pointer transition duration-300 text-center mt-3'>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart