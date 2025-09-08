import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import PageCount from './Pagination';
import Lottie from 'lottie-react';
import NoData from '../assets/No-Data.json'
import { AddCartAction } from '../store/AddCart';

const ProductItem = ({ filterData }) => {
  const { data } = useSelector((state) => state.CarouselAPI)
  const navigate = useNavigate();
  const goDetails = (idx, product) => {
    navigate(`/product/${idx}`, { state: product });
  }

  const filteredAllData = data?.filter((item) =>
    item.title.toLowerCase().includes(filterData.searchElement.toLowerCase()) &&
    (filterData.categoryElement.includes('All') || filterData.categoryElement.includes(item.category)) &&
    (filterData.brand === 'All' || item.brand === filterData.brand) &&
    item.price >= filterData.priceRange[0] && item.price <= filterData.priceRange[1]
  )

  const dynamicPages = Math.ceil(filteredAllData?.length / 8)

  //adding cart
  const dispatch = useDispatch()
  const handleAddingCart = (product) => {
    dispatch(AddCartAction.cartAdding(product))
  }

  return (
    <div className='flex flex-col w-full md:w-[80%] gap-5'>
      {
        filteredAllData?.length > 0 ? (
          <div className=' grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 md:gap-7'>
            {
              filteredAllData?.slice(filterData.pages * 8 - 8, filterData.pages * 8).map((product, idx) => (
                <div key={idx} className='bg-white w-full dark:bg-gray-900 shadow-lg shadow-black/50 rounded-xl p-3 cursor-pointer hover:scale-105 transform transition-all duration-200 flex flex-col gap-2'>
                  <div onClick={() => goDetails(idx, product)} className="flex flex-col gap-2">
                    <img className='rounded-2xl w-full bg-white dark:bg-gray-800 aspect-square' src={product.image} alt="" />
                    <p className='line-clamp-2 font-semibold'>{product.title}</p>
                    <p className='font-semibold'>${product.price}</p>
                  </div>
                  <button onClick={() => handleAddingCart(product)} className='flex justify-center items-center gap-1 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-xl p-2 cursor-pointer transition duration-300 text-center'><AiOutlineShoppingCart className='text-xl' />Add to Cart</button>
                </div>
              ))
            }
          </div>
        ) : (
          <div className='h-100 lg:h-dvh'>
            <Lottie animationData={NoData} className='h-100 lg:h-dvh'></Lottie>
          </div>
        )
      }

      <div className='w-full flex justify-center'>
        <PageCount pageHandler={filterData.pageHandler} pages={filterData.pages || 1} dynamicPages={dynamicPages || 1} />
      </div>
    </div>
  )
}

export default ProductItem