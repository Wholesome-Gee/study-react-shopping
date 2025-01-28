/* eslint-disable*/

// redux에 state 담는 파일을 store라고 함

import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: 'user',
  initialState: 'kim'
})

let stock = createSlice({
  name:'stock',
  initialState: [10,11,12]
})

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
  }
})