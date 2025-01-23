/* eslint-disable */
import { Col, Container, Row } from "react-bootstrap";

export default function Detail (props) {
  let shoes = props.shoes
  return (
    <Container>
      <Row>
        <Col md="6">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </Col>
        <Col md="6">
        <h4 className="pt-5">{shoes[0].title}</h4>
        <p>{shoes[0].content}</p>
        <p>{shoes[0].price}원</p>
        <button className="btn btn-danger">주문하기</button> 
        </Col>
      </Row>
      </Container>    
  )
}