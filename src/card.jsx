import { Col } from "react-bootstrap";

export default function Card (props) {
  let shoe = props.shoe;
  let index = props.index;
  return ( 
    <>
      <Col md="4" >
        <img src={import.meta.env.VITE_PUBLIC_URL+`shoes${index}.jpg`} alt="shoes1" width="80%"/>
        <h4>{shoe.title}</h4>
        <p>{shoe.content}</p>
      </Col>
    </>
  )
}