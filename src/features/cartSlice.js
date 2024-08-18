import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        totalAmount:0
    },
    reducers: {
        addItem: (state, action) => {
            const existingItem = state.cartItems.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
            state.totalAmount+=action.payload.price
        },
        removeItem: (state, action) => {
            const existingItem = state.cartItems.find((item) => item.id === action.payload);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
                }
                state.totalAmount-=existingItem.price
            }
        },
        
        fullRemove: (state, action) => {
            const existingItem = state.cartItems.find((item) => item.id === action.payload);
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
            state.totalAmount-=(existingItem.price * existingItem.quantity )
        },


    },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem,fullRemove } = cartSlice.actions

export default cartSlice.reducer