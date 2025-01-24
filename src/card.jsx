/* eslint-disable */
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Card (props) {
  let shoe = props.shoe;
  let index = props.index+1

  let navigate = useNavigate()
  return ( 
    <>
      <Col md="4" onClick={()=>{navigate('/detail/'+shoe.id)}}>
      {/* xs:0px~767px, md:768px~991px, lg:992px~ */}
        {/* <img src={import.meta.env.VITE_PUBLIC_URL+`shoes${index}.jpg`} alt="shoes1" width="80%"/> */}
        <img src={'https://codingapple1.github.io/shop/shoes'+index+'.jpg'} alt={"shoes"+index} width="80%" />
        <h4>{shoe.title}</h4>
        <p>{shoe.content}</p>
      </Col>
    </>
  )
}