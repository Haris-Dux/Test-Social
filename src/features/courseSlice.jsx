import { createSlice } from "@reduxjs/toolkit";
import courseData from "./CourseData";

const initialState = {
    cart: [],
    courseData: courseData,
    totalQuantity: 0,
    totalPrice: 0,
    shippingCost: 0,
};


export const courseSlice = createSlice({
    name: "courseSlice",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cart = [];
            state.totalQuantity = null;
            state.totalPrice = null;
        },

        addToCart: (state, action) => {
            const { productWithSize } = action.payload;

            const existingItemIndex = state.cart.findIndex(
                (item) => item.id === productWithSize.id && item.selectedSize === productWithSize.selectedSize
            );

            if (existingItemIndex !== -1) {
                state.cart[existingItemIndex].quantity += 1;
            } else {
                state.cart.push({
                    ...productWithSize,
                    quantity: 1,
                });
            }
        },

        getCartTotal: (state) => {
            const { totalPrice, totalQuantity } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, quantity } = cartItem;
                    const itemTotal = price * quantity;
                    cartTotal.totalPrice += itemTotal;
                    cartTotal.totalQuantity += quantity;
                    return cartTotal;
                },
                {
                    totalPrice: 0,
                    totalQuantity: 0,
                }
            );

            const shippingCostThreshold = 3000;
            const shippingCost = totalPrice < shippingCostThreshold ? 300 : 0;

            state.totalPrice = totalPrice;
            state.totalQuantity = totalQuantity;
            state.shippingCost = shippingCost;
        },

        removeItem: (state, action) => {
            const { id, selectedSize } = action.payload;
            state.cart = state.cart.filter(
                (item) => !(item.id === id && item.selectedSize === selectedSize)
            );
        },

        increaseItemQuantity: (state, action) => {
            const { id, selectedSize } = action.payload;

            const itemToUpdate = state.cart.find(
                (item) => item.id === id && item.selectedSize === selectedSize
            );

            if (itemToUpdate) {
                itemToUpdate.quantity += 1;
            }
        },

        decreaseItemQuantity: (state, action) => {
            const { id, selectedSize } = action.payload;

            const itemToDecrease = state.cart.find(
                (item) => item.id === id && item.selectedSize === selectedSize
            );

            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
            } else {
                state.cart = state.cart.filter(
                    (item) => !(item.id === id && item.selectedSize === selectedSize)
                );
            }
        },
    },
});


export const {
    addToCart,
    getCartTotal,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
} = courseSlice.actions;

export default courseSlice.reducer;