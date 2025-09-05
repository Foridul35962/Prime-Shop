import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const FilterMenu = ({ filterData }) => {
  const { data } = useSelector((state) => state.CarouselAPI)
  let allCategory = data?.map((currentData) => {
    return currentData['category'];
  })
  allCategory = ['All', ... new Set(allCategory)]


  let allBrand = data?.map((currentData) => {
    return currentData['brand'];
  })
  allBrand = ['All', ... new Set(allBrand)]

  const [showFilter, setShowFilter] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowFilter(true);   // md breakpoint = 768px+
      } else {
        setShowFilter(false);  // mobile
      }
    };

    handleResize(); // initial load e check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResetButton = ()=>{
    filterData.setSearchElement('');
    filterData.setCategoryElement(['All']);
    filterData.setBrand('All');
    filterData.setPriceRange([0,5000]);
  }


  return (
    <div className='md:w-[20%] w-full bg-gray-300 dark:bg-gray-900/30 shadow-xl shadow-black rounded-xl px-5 py-5 h-fit flex flex-col gap-5'>
      <div className='flex items-center justify-between md:hidden'>
        <p className='text-2xl font-bold'>Filters</p>
        <FaFilter className='text-xl cursor-pointer' onClick={() => setShowFilter(!showFilter)} />
      </div>
      {showFilter &&
        <div className='flex flex-col gap-3'>
          <input type="text" placeholder='Search...' value={filterData.searchElement} onChange={(e) => filterData.setSearchElement(e.target.value)} className='w-full bg-white p-2 text-xl md:text-lg rounded-xl text-black' />
          <div className='flex flex-col gap-1'>
            <p className='text-xl font-semibold'>Category</p>
            {
              allCategory?.map((category, idx) => (
                <div key={idx} className='flex gap-1'>
                  <input type="checkbox"
                    value={category}
                    className='accent-red-600'
                    onChange={filterData.handleCategory}
                    checked={filterData.categoryElement.includes(category)}
                    id={idx} />
                  <label htmlFor={idx} className='uppercase cursor-pointer'>{category}</label>
                </div>
              ))
            }
          </div>
          <div>
            <p className='text-xl font-semibold'>Brand</p>
            <select className='w-full' value={filterData.brand} onChange={(e) => filterData.handleBrand(e)}>
              {
                allBrand?.map((brand, idx) => (
                  <option value={brand} key={idx} className='uppercase text-black'>{brand}</option>
                ))
              }
            </select>
          </div>
          <div>
            <p className='text-xl font-semibold'>Price Range</p>
            <div>
              <p>Price Range: ${filterData.priceRange[0]} - ${filterData.priceRange[1]}</p>
              <input type="range"
                className='w-full accent-red-600'
                min={0}
                max={5000}
                value={filterData.priceRange[1]}
                onChange={(e) => filterData.setPriceRange([filterData.priceRange[0], Number(e.target.value)])} />
            </div>
          </div>
          <button onClick={handleResetButton} className='bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-xl py-2 px-4 cursor-pointer transition duration-300 w-fit uppercase'>Reset Filters</button>
        </div>
      }
    </div>
  )
}

export default FilterMenu