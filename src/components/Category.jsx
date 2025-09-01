import React from 'react'
import { useSelector } from 'react-redux'

const Category = () => {
  const { data } = useSelector((state) => state.CarouselAPI)
  let allCategory = data?.map((currentData) => {
    return currentData['category'];
  })
  allCategory = [... new Set(allCategory)]


  return (
    <div className='bg-[#101829] py-7'>
      <div className="flex flex-wrap justify-evenly text-center gap-2">
        {
          allCategory?.map((category, idx) => (
            <button key={idx} className='bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-xl py-2 px-4 cursor-pointer transition duration-300 w-fit uppercase'>{category}</button>
          ))
        }
      </div>
    </div>
  )
}

export default Category