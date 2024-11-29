import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      state.items = state.items.filter(item => item.id != action.payload.id);

      // Another way to do it:
      // const index = state.items.findIndex((basketItem) => basketItem.id === action.payload.id)

      // let newBasket = [...state.items];

      // if (index >= 0) {
      //   newBasket.splice(index, 1);
      // } 

      // state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items
  .reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;