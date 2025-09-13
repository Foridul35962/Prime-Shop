import { useNavigate } from 'react-router-dom'
import banner from '../assets/banner1.jpg'

const MidBanner = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-gray-200 dark:bg-gray-800 md:py-24'>
        <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover h-[550px] md:h-[600px]' style={{backgroundImage:`url(${banner})`, backgroundPosition:'center', backgroundAttachment:'fixed'}}>
          <div className='absolute inset-0 md:rounded-2xl bg-black/60 flex flex-col text-white items-center text-center justify-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4'>Next-Gen Electronics at Your Fingertips</h1>
            <p className='text-lg md:text-xl mb-6'>Discover the latest tech innovations with unbeatable prices and free shipping on all orders.</p>
            <button onClick={()=>navigate('/product')} className='bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-xl py-2 px-4 cursor-pointer transition duration-300 w-fit uppercase'>Shop Now</button>
          </div>
        </div>
    </div>
  )
}

export default MidBanner