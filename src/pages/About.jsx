import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const About = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className='bg-gray-200 dark:bg-gray-800 dark:text-white p-7 md:px-30'>
                <div className='bg-gray-300 dark:bg-gray-900 shadow-2xl shadow-black rounded-xl px-5 py-7
                 flex flex-col gap-5'>
                    <h1 className='text-4xl text-center font-bold'>About Prime Shop</h1>
                    <div>
                        Welcome to <span className='text-red-600'>Prime Shop</span>, your one-stop destination for the latest and greatest in electronics. From cutting-edge gadgets to must-have accessories, we are here to power up your tech life with premium products and unbeatable service.
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl text-red-600 font-semibold'>Our Mission</h1>
                        <p>At <span className='text-red-600'>Prime Shop</span>, our mission is to make innovative technology accessible to everyone. We are passionate about connecting people with the tools and tech they need to thrive in a digital world — all at competitive prices and delivered with speed and care.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl text-red-600 font-semibold'>Why Choose Zaptro?</h1>
                        <ul className="list-disc pl-6">
                            <li>
                                Top-quality electronic products from trusted brands
                            </li>
                            <li>
                                Lightning-fast and secure shipping
                            </li>
                            <li>
                                Reliable customer support, always ready to help
                            </li>
                            <li>
                                Easy returns and hassle-free shopping experience
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl text-red-600 font-semibold'>Our Vision</h1>
                        <p>We envision a future where technology elevates everyday life. At <span>Prime Shop</span>, we are committed to staying ahead of the curve, offering cutting-edge solutions that are both practical and affordable.</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-2xl text-red-600 font-semibold'>Join the Prime Shop Family</h1>
                        <p>Whether you are a tech enthusiast, a professional, or just looking for something cool and functional — Zaptro has something for everyone.</p>
                    </div>
                    <div className='w-full flex justify-center my-3'>
                    <button onClick={() => navigate('/product')} className='bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-xl py-2 px-4 cursor-pointer transition duration-300 w-fit uppercase'>Start Shopping</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About