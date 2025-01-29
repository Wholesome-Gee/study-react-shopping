/* eslint-disable*/

// redux에 state 담는 파일을 store라고 함

import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: 'user',
  initialState: 'kim',
  reducers: {
    changeUser(user) {
      return 'john ' + user ;
    }
  }
})


let cart = createSlice({
  name:'cart',
  initialState: [
    {id: 0, name:'White and Black', count:2},
    {id: 2, name:'Grey Yordan', count:1},
  ],
  reducers: {
    changeCount() {
      return count + 1
    }
  }
})

export let { changeUser, changeCount } = user.actions
export default configureStore({
  reducer: {
    user : user.reducer,
    cart : cart.reducer,
  }
})