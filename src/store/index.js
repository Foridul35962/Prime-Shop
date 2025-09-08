import { configureStore } from "@reduxjs/toolkit";
import CarouselAPI from "./CarouselAPI";
import AddCart from "./AddCart";

const APIStore = configureStore({
    reducer:{
        CarouselAPI:CarouselAPI,
        cart:AddCart.reducer
    }
});
export default APIStore;