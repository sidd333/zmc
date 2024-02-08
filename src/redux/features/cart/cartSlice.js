import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

//createAsyncThunk takes an action type string and a PAYLOAD CREATOR callback function
export const getCart = createAsyncThunk("cart/getCart", async (thunkAPI) => {
  try {
    const response = await axios.get("exampleurl");
    return response;
  } catch (error) {
    thunkAPI.rejectWithValue({ error: error.message });
  }
});

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    dosmn: (state) => {
      state.items.push("something");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.cart = action.payload.cart;
      });
  },
});

export const { dosmn } = cartSlice.actions;

export default cartSlice.reducer;
