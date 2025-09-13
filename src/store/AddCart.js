import { createSlice } from "@reduxjs/toolkit";

const AddCart = createSlice({
    name:'cart',
    initialState:{cart:[]},
    reducers:{
        cartAdding:(state,action)=>{
            state.cart=[...state.cart,action.payload]
        },
        cartDelete:(state,action)=>{
            state.cart = state.cart.filter((e)=>{
                return e.id!==action.payload
            })
        }
    }
})
export const AddCartAction = AddCart.actions;
export default AddCart