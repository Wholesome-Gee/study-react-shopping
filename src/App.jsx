
import { Navbar,Container,Nav, Row, Col } from 'react-bootstrap'
import './App.css'
import bgImg from './img/bg.png'
import data from './data'
import { useState } from 'react'

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
        <Col md="4">
          <img src={import.meta.env.VITE_PUBLIC_URL+'shoes1.jpg'} alt="shoes1" width="80%"/>
          <h4>{shoes[0].title}</h4>
          <p>{shoes[0].content}</p>
        </Col>
        <Col md="4">
          <img src={import.meta.env.VITE_PUBLIC_URL+'shoes2.jpg'} alt="shoes2" width="80%"/>
          <h4>{shoes[1].title}</h4>
          <p>{shoes[1].content}</p>
        </Col>
        <Col md="4">
          <img src={import.meta.env.VITE_PUBLIC_URL+'shoes3.jpg'} alt="shoes3" width="80%"/>
          <h4>{shoes[2].title}</h4>
          <p>{shoes[2].content}</p>
        </Col>
        {/* xs:0px~767px, md:768px~991px, lg:992px~ */}
      </Row>
    </Container>

    </>
    
  )
}

export default App
