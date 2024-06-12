import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  travel: [],
}

export const CartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {

      let newCart = [...state.travel]

      newCart.push(action.payload.travel);
      state.travel = newCart
    },
    removeFromCart: (state, action) => {
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart } = CartSlice.actions

export default CartSlice.reducer