/* eslint-disable */
import { Container, Row } from "react-bootstrap"
import bgImg from '../img/bg.png'
import Card from "../card"
import axios from "axios"
import { useEffect, useState } from "react"


export default function Main(props) {
  let shoes = props.shoes
  let setShoes = props.setShoes
  let [number,setNumber] = useState(2)
  let [loading,setLoading] = useState(false)
  
  return (
    <>
      <div className="main-bg" style={{ backgroundImage: `url(${bgImg})`}}></div>
      <Container>
        <button onClick={()=>{
          let copy = [...shoes]
          copy.sort((a,b) => a.title > b.title ? 1:-1)
          props.setShoes(copy)
          }}>가나다순 정렬</button>
        <Row>
          {
            shoes.map((shoe,index)=>{
              return (
                <Card shoe={shoe} index={index} key={index} />
              )
            })
          }
          { loading ? <div>로딩중</div> : null}
          { number < 4 ? 
          <button onClick={()=>{
            setLoading(true)
            if(number<4){
            axios.get('https://codingapple1.github.io/shop/data'+number+'.json')
            .then((r)=>{
              setNumber(number-5)
              console.log(r.data);
              let copy = [...shoes, ...r.data]
              setShoes(copy)
              setNumber(number+1)
              setLoading(false)
            }
            ).catch((error)=>{
              console.error(error);
              setLoading(false)
            })
          }
          }}>더보기</button>
          :
          null
          }
          
        </Row>
        </Container>    
    </>
  )
}