import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-gray-300 dark:bg-gray-900 dark:text-white px-5 py-10 text-sm'>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 [&>*]:flex [&>*]:flex-col [&>*]:gap-2 pb-7'>
                <div>
                    <p className='text-red-600 text-2xl font-bold'>Prime Shop</p>
                    <p>Powering Your World with the Best in Electronics.</p>
                    <div>
                        <p>123 Electronics St, Style City, NY 10001</p>
                        <p>Email: support@Zaptro.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>
                <div>
                    <p className='text-xl font-semibold'>Customer Service</p>
                    <p>Contact Us</p>
                    <p>Shipping & Returns</p>
                    <p>FAQs</p>
                    <p>Order Tracking</p>
                    <p>Size Guide</p>
                </div>
                <div>
                    <p className='text-xl font-semibold'>Follow Us</p>
                    <div className='flex gap-4'>
                        <FaFacebook />
                        <FaInstagram />
                        <FaTwitter />
                        <FaXTwitter />
                    </div>
                </div>
                <div>
                    <p className='text-xl font-semibold'>Stay in the Loop</p>
                    <p>Subscribe to get special offers, free giveaways, and more</p>
                    <div className='relative w-full'>
                        <input type="text" className='bg-white w-full py-2 pr-30 pl-2 text-black text-lg rounded-xl' placeholder='Your Email Address'/>
                        <button className='absolute right-0 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-br-xl rounded-tr-xl py-[12px] px-4 cursor-pointer transition duration-300 w-fit uppercase'>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className='text-gray-600'/>
            <div className='text-center pt-3'>
                <p>© 2025 Prime Shop. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer