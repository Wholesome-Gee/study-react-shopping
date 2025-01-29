/* eslint-disable */
import { useDispatch, useSelector } from "react-redux"
import { changeName, increase } from "../store/userSlice";

export default function Cart() {

  let state = useSelector((state)=>{ return state })
  // 모든 state 불러오기, 원하는것만 가져오려면 state.원하는state명

  let dispatch = useDispatch()
  // store.js에 변경요청해주는 함수
  // console.log(state.user);
  // console.log(state.cart);

  return (
    <div>
      <h6>{state.user.name} {state.user.age}의 장바구니</h6>
      <button onClick={()=>{dispatch(increase(10))}}>버튼</button>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">상품명</th>
            <th scope="col">수량</th>
            <th scope="col">변경하기</th>
          </tr>
        </thead>
        <tbody>
          {
            state.cart.map((item,index)=>{
              return (
                <tr key= {index}>
                  <th scope="row">{state.cart[index].id}</th>
                  <td>{state.cart[index].name}</td>
                  <td>{state.cart[index].count}</td>
                  <td><button onClick={()=>{
                    dispatch(changeName())
                  }}>+</button></td>
                </tr>
              )

            })
          }          
        </tbody>
      </table>  
    </div>
  )
}
// tr = 행 추가, th = 열 추가(head) , hd = 열 추가