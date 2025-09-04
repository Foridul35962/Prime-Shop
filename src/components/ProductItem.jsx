import {  useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const ProductItem = () => {
  const { data } = useSelector((state) => state.CarouselAPI)

  return (
    <div className='w-full md:w-[80%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-7'>
      {
        data?.map((product, idx) => (
          <div key={idx} className='bg-white dark:bg-gray-900 shadow-xl shadow-black rounded-xl p-3 flex flex-col gap-2'>
            <img className='rounded-2xl w-full bg-white aspect-square' src={product.image} alt="" />
            <p className='line-clamp-2 font-semibold'>{product.title}</p>
            <p className='font-semibold'>${product.price}</p>
            <button className='flex items-center gap-1 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-xl p-2 cursor-pointer transition duration-300 text-center'><AiOutlineShoppingCart className='text-xl' />Add to Card</button>
          </div>
        ))
      }
    </div>
  )
}

export default ProductItem