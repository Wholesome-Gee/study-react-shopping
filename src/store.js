/* eslint-disable*/

// redux에 state 담는 파일을 store라고 함

import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";

let cart = createSlice({
  name:'cart',
  initialState: [
    {id: 0, name:'White and Black', count:2},
    {id: 2, name:'Grey Yordan', count:1},
  ],
})


export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer,
  }
})