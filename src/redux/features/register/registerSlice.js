import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "register",
  initialState: {
    toggle: 1,
  },
  reducers: {
    setToggle: (state, action) => {
      state.toggle += action.payload.value;
    },
  },
});

export const { setToggle } = registerSlice.actions;

export default registerSlice.reducer;
