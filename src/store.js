/* eslint-disable*/

// redux에 state 담는 파일을 store라고 함

import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";
import cart from "./store/cartSlice";

export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer,
  }
})