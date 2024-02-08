import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import cartReducer from "./features/cart/cartSlice";
import authReducer from "./features/auth/authSlice";
import restaurantSlice from "./features/restaurant/restaurantSlice";
import registerSlice from "./features/register/registerSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    cart: cartReducer,
    restaurant: restaurantSlice,
    register: registerSlice,
  },
});
