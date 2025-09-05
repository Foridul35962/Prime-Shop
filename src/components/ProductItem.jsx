import {  useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const ProductItem = () => {
  const { data } = useSelector((state) => state.CarouselAPI)
  const navigate = useNavigate();
  const goDetails = (idx, product)=>{
    navigate(`/product/${idx}`, {state:product});
  }

  return (
    <div className='w-full md:w-[80%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-7'>
      {
        data?.map((product, idx) => (
          <div key={idx} onClick={()=>goDetails(idx, product)} className='bg-white dark:bg-gray-900 shadow-lg shadow-black/50 rounded-xl p-3 flex flex-col gap-2 cursor-pointer hover:scale-110 transform transition-all duration-200'>
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