
import { Navbar,Container,Nav, Row } from 'react-bootstrap'
import './App.css'
import bgImg from './img/bg.png'
import data from './data'
import { useState } from 'react'
import Card from './card'

function App() {
  let [shoes] = useState(data)
  
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg" style={{ backgroundImage: `url(${bgImg})`}}></div>

      <Container>
      <Row>
        {
          shoes.map((shoe,index)=>{
            return (
              <Card shoe={shoe} index={index+1} key={index}/>
            )
          })
        }
        {/* xs:0px~767px, md:768px~991px, lg:992px~ */}
      </Row>
    </Container>

    </>
    
  )
}

export default App
