/* eslint-disable */
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from 'styled-components'

let ColorBtn = styled.button`
  background : ${props=>props.color};
  color: ${ props => props.color == 'yellow' ? 'black' : 'white'};
  padding : 10px;
`

let NewBtn = styled(ColorBtn)`
`

let Box = styled.div`
  background-color : grey;
  padding: 20px;
`

export default function Detail (props) {
  let shoes = props.shoes // [{},{},{}]
  let {id} = useParams() // 0 or 1 or 2
  let shoe = shoes.find((shoe)=> shoe.id == id )
  // console.log(shoe);
  
  if (shoe) {
    return (
      <Container>
        <Box>
          <ColorBtn color="yellow">ColorBtn</ColorBtn>
          <NewBtn color="red">NewBtn</NewBtn>
        </Box>
        <Row>
          <Col md="6">
          <img src={'https://codingapple1.github.io/shop/shoes'+(shoe.id+1)+'.jpg'} width="100%" />
          </Col>
          <Col md="6">
          <h4 className="pt-5">{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
          </Col>
        </Row>
      </Container>    
    )
  } else {
    return <div>상품을 찾을 수 없습니다.</div>
  }
  
}