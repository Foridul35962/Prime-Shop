import { createSlice } from "@reduxjs/toolkit";
import {successToast, errorToast, warningToast} from './notification'

const AddCart = createSlice({
    name:'cart',
    initialState:{cart:[]},
    reducers:{
        cartAdding:(state,action)=>{
            const newProduct = state.cart.find((e)=>e.id===action.payload.id)            
            if(!newProduct){
                state.cart=[...state.cart,{... action.payload,quantity:1}]
                successToast("Product Adding Successfully");
            }
            else if(newProduct){
                warningToast("Product is Already added");
            }
        },
        cartDelete:(state,action)=>{
            state.cart = state.cart.filter((e)=>{
                return e.id!==action.payload
            })
            errorToast("Product is Removed Successfully")
        },
        incrementQuantity: (state,action)=>{
            const product = state.cart.find((e)=>e.id===action.payload)
            if(product){
                product.quantity+=1
                product.price*=product.quantity
            }
        },
        decrementQuantity: (state,action)=>{
            const product = state.cart.find((e)=>e.id===action.payload)
            if(product && product.quantity>1){
                product.quantity-=1
                product.price/=(product.quantity+1)
            }
        },
        delivery:(state)=>{
            state.cart=[]
            successToast("Product is going for Delivery Successfully")
        }
    }
})
export const AddCartAction = AddCart.actions;
export default AddCart