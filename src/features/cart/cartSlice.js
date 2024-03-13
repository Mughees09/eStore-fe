import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
} 


export const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
          
            const existingProduct = state.cart.find((product) => product.id === action.payload.id);
            
            if(existingProduct){
                existingProduct.quantity += 1;
            }else{
                
                state.cart.push({...action.payload, quantity:1})
            }



        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((prod) => 
            prod.id !== action.payload)
            
        },
        incrementQuantity: (state, action) => {
          
            
            const existingProduct = state.cart.find((product) => product.id === action.payload);
            
            if(existingProduct){
                existingProduct.quantity += 1;
            }



        },
        decrementQuantity: (state, action) => {
          
            const existingProduct = state.cart.find((product) => product.id === action.payload);
           
            if(existingProduct && existingProduct.quantity > 1 ){
                existingProduct.quantity -= 1;
            }



        },
    }
})

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} = cartSlice.actions;

export default cartSlice.reducer;