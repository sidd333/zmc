import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//createAsyncThunk takes an action type string and a PAYLOAD CREATOR callback function
export const signUp = createAsyncThunk(
  "auth/signUp",
  async (data, thunkAPI) => {
    try {
      if (localStorage.getItem("token"))
        return thunkAPI.rejectWithValue({ error: "logged in alreadys" });
      // throw new Error("USER already logged in");

      const response = await axios.post(
        `${process.env.REACT_APP_URL}/auth/register`,
        data
      );

      return response.data;
    } catch (error) {
      console.log(error.message);
      // data.rejectWithValue({ error: error.message });
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = {
          username: action.payload.userdata.name,
          _id: action.payload.userdata._id,
          location: action.payload.userdata.location,
        };

        localStorage.setItem("token", action.payload.token);
      })
      .addCase(signUp.rejected, (state, action) => {
        console.log(action.payload.error);
      });
  },
});

export const { dosmn } = authSlice.actions;

export default authSlice.reducer;
