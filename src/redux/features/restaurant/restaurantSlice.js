import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  initialState: {},
  name: "restaurant",
  reducers: {
    getRestaurant: (state) => {
      //do something
    },
  },
});

export const { getRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;
