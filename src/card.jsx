/* eslint-disable */
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Card (props) {
  let shoe = props.shoe;
  let index = props.index;

  let navigate = useNavigate()
  return ( 
    <>
      <Col md="4" onClick={()=>{navigate('/detail/'+shoe.id)}}>
        <img src={import.meta.env.VITE_PUBLIC_URL+`shoes${(shoe.id)+1}.jpg`} alt="shoes1" width="80%"/>
        <h4>{shoe.title}</h4>
        <p>{shoe.content}</p>
      </Col>
    </>
  )
}