import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCarouselAPI } from '../store/CarouselAPI';

const Carousel = () => {
    const dispatch = useDispatch();
    const { CarouselData, loading } = useSelector((state) => state.CarouselAPI);
    const data = CarouselData?.products || [];

    useEffect(() => {
        dispatch(fetchCarouselAPI())
    }, [])
    return (
        <div>Carousel</div>
    )
}

export default Carousel