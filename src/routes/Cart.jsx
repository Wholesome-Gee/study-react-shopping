import { useSelector } from "react-redux"

export default function Cart() {

  let state = useSelector((state)=>{ return state })
  // 모든 state 불러오기, 원하는것만 가져오려면 state.원하는state명
  console.log(state.user);
  console.log(state.stock);
  
  

  return (
    <div>
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
          <tr>
            <th scope="row">1</th>
            <td>안녕</td>
            <td>안녕</td>
            <td>안녕</td>
          </tr>
        </tbody>
      </table>  
    </div>
  )
}
// tr = 행 추가, th = 열 추가(head) , hd = 열 추가