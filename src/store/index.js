import { configureStore } from "@reduxjs/toolkit";
import CarouselAPI from "./CarouselAPI";

const APIStore = configureStore({
    reducer:{
        CarouselAPI:CarouselAPI
    }
});
export default APIStore;