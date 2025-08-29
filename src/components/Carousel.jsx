import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCarouselAPI } from '../store/CarouselAPI';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Carousel = () => {
  const dispatch = useDispatch();
  const { CarouselData, loading } = useSelector((state) => state.CarouselAPI);
  const data = CarouselData?.products || [];
  console.log(data);

  useEffect(() => {
    dispatch(fetchCarouselAPI())
  }, [])

  // slick setting
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='w-dvw h-fit bg-blue-800'>
      <div className='container mx-auto'>
        <Slider {...settings}>
          {data?.slice(0, 7)?.map((product) => (
            <div className="!flex justify-center">
              <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-900 p-4 rounded-lg w-full">
                <div className="flex flex-col gap-2 flex-1">
                  <h1 className="text-red-700 text-xl font-bold">
                    Powering Your World with the Best in Electronics.
                  </h1>

                  <div className="text-xl text-white font-semibold">
                    {product.title.length > 100 ? product.title.slice(0, 100) + "..." : product.title}
                  </div>

                  <div className="text-gray-300">
                    {product.description.length > 300 ? product.description.slice(0, 300) + "..." : product.description}
                  </div>

                  <button className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-xl py-2 px-4 cursor-pointer transition duration-300 w-fit">
                    Shop Now
                  </button>
                </div>

                <div className="flex-shrink-0">
                  <img className="w-32 h-32 object-contain" src={product.image} alt={product.title} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel