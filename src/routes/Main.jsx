/* eslint-disable */
import { Container, Row } from "react-bootstrap"
import bgImg from '../img/bg.png'
import Card from "../card"

export default function Main(props) {
  let shoes = props.shoes
  return (
    <>
      <div className="main-bg" style={{ backgroundImage: `url(${bgImg})`}}></div>
      <Container>
        <Row>
          {
            shoes.map((shoe,index)=>{
              return (
                <Card shoe={shoe} index={index+1} key={index} />
              )
            })
          }
          {/* xs:0px~767px, md:768px~991px, lg:992px~ */}
        </Row>
        </Container>    
    </>
  )
}