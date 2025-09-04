import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCarouselAPI } from '../store/CarouselAPI';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Loading from './Loading';

const Carousel = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.CarouselAPI);

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
    autoplay: true,          // Enable auto play
    autoplaySpeed: 3000,     // Time between slides (3s)
    pauseOnHover: true       // Stop autoplay on hover
  };

  return (
    <>
      {
        loading ? (
          <Loading />
        ) : <div className='relative w-dvw bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]'>
          <Slider {...settings}>
            {data?.slice(0, 7)?.map((product, idx) => (
              <div key={idx} className="!flex justify-center sm:h-dvh">
                <div className="flex flex-col sm:flex-row container mx-auto items-center gap-6 p-4 rounded-lg w-full">
                  <div className="flex flex-col gap-5 w-full sm:w-3/5">
                    <h1 className="text-red-700 text-sm font-bold">
                      Powering Your World with the Best in Electronics.
                    </h1>

                    <div className="text-2xl lg:text-5xl text-white font-bold uppercase">
                      {product.title.length > 50 ? product.title.slice(0, 50) + "..." : product.title}
                    </div>

                    <div className="text-gray-300">
                      {product.description.length > 150 ? product.description.slice(0, 150) + "..." : product.description}
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-xl py-2 px-4 cursor-pointer transition duration-300 w-fit">
                      Shop Now
                    </button>
                  </div>

                  <div className="w-full sm:w-2/5">
                    <img className="rounded-full hover:scale-105 transition-all shadow-2xl shadow-red-400" src={product.image} alt="image" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      }
    </>
  );
}

export default Carousel