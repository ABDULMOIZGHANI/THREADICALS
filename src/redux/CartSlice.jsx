import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cartProducts : [],
    totalPrice: 0,
    totalQuantity: 0,
    
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addToCart (state,action) {
            const newItem = action.payload;
            const itemIndex = state.cartProducts.find((item)=> item.id === newItem.id )
            if (itemIndex) {
                // Agr product pehly say cart mai hai tw ussy wapis add krny k bajayee uski quantity ko increase krna. 
                itemIndex.quantity++;
                itemIndex.totalPrice += newItem.price;
            }else{
                state.cartProducts.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    image: newItem.image,
                    totalPrice: newItem.totalPrice,
                    quantity:1,
                })
            }
            state.totalQuantity++;
            state.totalPrice += newItem.price;
            
        },
        removeFromCart (state,action) {
            const id = action.payload;
            const itemIndex = state.cartProducts.find((item)=> item.id === id )
            if(itemIndex){
                state.totalPrice -= itemIndex.price;
                state.totalQuantity -= itemIndex.quantity;
                state.cartProducts = state.cartProducts.filter((item)=> item.id !== id)
            }
            
        },
        increaseQuantity (state,action) {
            const id = action.payload;
            const findItem = state.cartProducts.find((item)=> item.id === id )
            if (findItem.quantity < 10) {
                if (findItem) {
                    findItem.quantity++;
                    state.totalQuantity++;
                    state.totalPrice += findItem.price;
                }
            }
            
        },
        decreaseQuantity (state,action) {
            const id = action.payload;
            const findItem = state.cartProducts.find((item)=> item.id === id )
            if (findItem.quantity > 1) {
                if (findItem) {
                    findItem.quantity--;
                    state.totalQuantity--;
                    state.totalPrice -= findItem.price;
                }
            }
            
        },
    },
});


export const {addToCart} = CartSlice.actions
export const {removeFromCart} = CartSlice.actions
export const {increaseQuantity} = CartSlice.actions
export const {decreaseQuantity} = CartSlice.actions
export default CartSlice.reducer