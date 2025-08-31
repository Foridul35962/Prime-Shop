import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Async thunk
export const fetchCarouselAPI = createAsyncThunk(
  "CarouselAPI/fetchData",
  async () => {
    const response = await axios.get("https://fakestoreapi.in/api/products?limit=150");
    return response.data;
  }
);

const CarouselAPI = createSlice({
  name: "CarouselAPI",
  initialState: {
    CarouselData: null,
    loading: false,
    error: null,
    data:null
  },
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarouselAPI.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarouselAPI.fulfilled, (state, action) => {
        state.loading = false;
        state.CarouselData = action.payload;
        state.data = action.payload?.products || [];
      })
      .addCase(fetchCarouselAPI.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default CarouselAPI.reducer;