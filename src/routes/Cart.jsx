/* eslint-disable */
import { useDispatch, useSelector } from "react-redux"
import { changeCount, changeUser } from "../store";

export default function Cart() {

  let state = useSelector((state)=>{ return state })
  // 모든 state 불러오기, 원하는것만 가져오려면 state.원하는state명

  let dispatch = useDispatch()
  // store.js에 변경요청해주는 함수
  console.log(state.user);
  console.log(state.cart);

  return (
    <div>

      {state.user}의 장바구니
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
                <tr>
                  <th scope="row">{index+1}</th>
                  <td>{state.cart[index].name}</td>
                  <td>{state.cart[index].count}</td>
                  <td><button onClick={()=>{
                    dispatch(changeCount())
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