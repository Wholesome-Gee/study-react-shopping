/* eslint-disable */
import { useContext, useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import { Context1 } from "../App"
import { useDispatch } from "react-redux";
import { addCart } from "../store/cartSlice";

let ColorBtn = styled.button`
  background : ${props => props.color};
  color: ${props => props.color == 'yellow' ? 'black' : 'white'};
  padding : 10px;
`

let NewBtn = styled(ColorBtn)`
`
let Warning = styled.div`
  background-color: red;
  color: white;
  font-size:24px
`


let Box = styled.div`
  background-color : grey;
  padding: 20px;
`

export default function Detail(props) {

  // let {재고} = useContext(Context1)
  // useContext는 Context 해체함수.. [10,11,12]

  let shoes = props.shoes // [{},{},{}]
  let { id } = useParams() // 0 or 1 or 2
  let shoe = shoes.find((shoe) => shoe.id == id)
  // console.log(shoe);
  let [popUp, setPopUp] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setPopUp(false)
    }, 2000)
  }, [])

  let [warning, setWarning] = useState(false)
  let [value, setValue] = useState("")
  let [tab, setTab] = useState(0)
  let [fade, setFade] = useState('')

  let dispatch = useDispatch()

  useEffect(() => {
    // '1'
    if (isNaN(value)) {
      alert('문자는 안됩니다')
      setValue('')
    }
  }, [value])

  useEffect(() => {
    let a = setTimeout(() => {
      setFade('end')
    }, 10);
    return () => {
      clearTimeout(a)
      setFade('')
    }
  }, [])


  if (shoe) {
    console.log(shoe);

    return (
      <Container className={`start ${fade}`}>
        {popUp ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}
        <Box>
          <ColorBtn color="yellow">ColorBtn</ColorBtn>
          <NewBtn color="red">NewBtn</NewBtn>
        </Box>
        <Row>
          <Col md="6">
            <img src={'https://codingapple1.github.io/shop/shoes' + (shoe.id + 1) + '.jpg'} width="100%" />
          </Col>
          {warning ? <Warning>문자는 안돼</Warning> : null}
          <input type="text" value={value} onChange={(e) => {
            setValue(e.target.value)
          }} />
          <Col md="6">
            <h4 className="pt-5">{shoe.title}</h4>
            <p>{shoe.content}</p>
            <p>{shoe.price}원</p>
            <button className="btn btn-danger" onClick={() => {
              dispatch(addCart(shoe))
            }}>주문하기</button>
          </Col>
        </Row>
        {/* 탭메뉴 */}
        <Nav variant="tabs" defaultActiveKey="link-0" style={{ marginTop: "10px" }}>

          <Nav.Item>
            <Nav.Link eventKey="link-0" onClick={() => { setTab(0) }}>버튼0</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" onClick={() => { setTab(1) }}>버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" onClick={() => { setTab(2) }}>버튼2</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent tab={tab} shoe={shoe} ></TabContent>
      </Container>
    )

  } else {
    return <div>상품을 찾을 수 없습니다.</div>
  }
}

// Component

function TabContent({ tab, shoe }) {

  let [fade, setFade] = useState('')
  useEffect(() => {
    let a = setTimeout(() => {
      setFade('end')
    }, 10);
    return () => {
      clearTimeout(a)
      setFade('')
    }
  }, [tab])
  return (
    <div className={`start ${fade}`}>
      {[<div>{shoe.title}</div>, <div>{shoe.content}</div>, <div>{shoe.price}</div>][tab]}
    </div>
  )
}
//   if( tab == 0 ){
//     return <div>내용0</div>
//   } else if( tab==1 ){
//     return <div>내용1</div>
//   } else if( tab==2 ){
//     return <div>내용2</div>
//   }
// }