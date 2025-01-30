/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name:'cart',
  initialState: [
    {id: 0, name:'White and Black', count:2},
    {id: 2, name:'Grey Yordan', count:1},
  ],
  reducers: {
    changeCount(state, action){
      let item = state.find(state=> state.id == action.payload.id);
      item.count += 1
    }
    ,
    addCart(state, action){
      let isExist = state.find(state => state.id == action.payload.id)
      
      let item = {
        id: action.payload.id,
        name: action.payload.title,
        count: 1,
      }

      if(isExist){
        isExist.count += 1
      } else {
        state.push(item)
      }

    },
    removeCart(state, action){
      let index = state.findIndex(state => state.id == action.payload.id);
      if(index >= 0){
        state.splice(index,1)
      }
    }
  }
})

export default cart
export let { changeCount, addCart, removeCart } = cart.actions