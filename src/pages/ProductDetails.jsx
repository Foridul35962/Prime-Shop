import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom'
import Loading from '../components/Loading';

const ProductDetails = () => {
  const location = useLocation()

  const [product, setProduct] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getProduct = async () => {
      try {
        let id = location.pathname.split("/").pop()
        id = 1 + Number(id)
        const responce = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(responce.data)
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [])

  const [quantity, setQuantity] = useState(1)
  const handleQuantity = (e) => {
    setQuantity(e.target.value)
  }
  const navigate = useNavigate()

  return (
    <>
      {loading ? <Loading /> :
        <div className='w-dvw bg-gray-200 dark:text-white px-5 py-8 md:px-40 dark:bg-gray-800 flex flex-col gap-10'>
          <div>
            <p className='cursor-pointer text-xl font-semibold'><span onClick={() => navigate('/')}>Home</span> / <span onClick={() => navigate('/product')}>Products</span> / {product.title}</p>
          </div>
          <div className='flex items-center flex-col md:justify-between gap-5 md:flex-row bg-gray-300 dark:bg-gray-900 shadow-2xl shadow-black rounded-xl px-5 py-7 mb-5'>
            <div className='flex justify-center'>
              <img className='size-60 md:size-full aspect-square' src={product.image} alt="image" />
            </div>
            <div className='md:w-130 flex flex-col gap-3'>
              <p className='text-2xl font-semibold'>{product.title}</p>
              <p className='text-red-600 text-lg'>Price: ${product.price}</p>
              <p>{product.description}</p>
              <div className='flex gap-3 items-center'>
                <p>Quantity:</p>
                <input className='bg-white text-black rounded-xl px-2 py-1 w-15 text-lg' value={quantity} type="number" onChange={(e) => handleQuantity(e)} />
              </div>
              <button className='flex items-center gap-1 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-xl w-fit p-2 cursor-pointer transition duration-300 text-center mt-5'><AiOutlineShoppingCart className='text-xl' />Add to Cart</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default ProductDetails