import React, { useEffect } from 'react'
import FilterMenu from '../components/FilterMenu'
import ProductItem from '../components/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCarouselAPI } from '../store/CarouselAPI'
import Loading from '../components/Loading'

const Product = () => {
  const { loading } = useSelector((state) => state.CarouselAPI)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCarouselAPI())
  }, [])

  return (
    <>
      {
        loading ? (
          <Loading />
        ) :
          <div className='bg-gray-200 w-full dark:bg-gray-800 dark:text-white flex flex-col md:flex-row p-7 xl:px-20 gap-8'>
            <FilterMenu />
            <ProductItem />
          </div>
      }
    </>
  )
}

export default Product