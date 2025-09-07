import React, { useEffect, useState } from 'react'
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

  //take filter data element
  const [searchElement, setSearchElement] = useState('');
  const [categoryElement, setCategoryElement] = useState(['All']);
  const [brand, setBrand] = useState('All')
  const [priceRange, setPriceRange] = useState([0, 5000])
  const [pages, setPages] = useState(1);
  const filterData = {
    searchElement,
    setSearchElement,
    categoryElement,
    setCategoryElement,
    brand,
    setBrand,
    priceRange,
    setPriceRange,
    pages,
    setPages,
    handleCategory: (e) => {
      const value = e.target.value;
      if (e.target.checked) {
        // select hobe

        setCategoryElement((prev) => prev.filter((cat) => cat !== 'All'));
        setCategoryElement((prev) => [...prev, value]);
      } else {
        // unselect hobe
        setCategoryElement((prev) => prev.filter((cat) => cat !== value));
      }

    },
    handleBrand: (e) => {
      setBrand(e.target.value)
    }
  }


  return (
    <>
      {
        loading ? (
          <Loading />
        ) :
          <div className='bg-gray-200 w-full dark:bg-gray-800 dark:text-white flex flex-col md:flex-row p-7 xl:px-20 gap-8'>
            <FilterMenu filterData={filterData} />
            <ProductItem filterData={filterData} />
          </div>
      }
    </>
  )
}

export default Product