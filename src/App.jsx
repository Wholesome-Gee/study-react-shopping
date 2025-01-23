
import { Navbar,Container,Nav, Row, Col } from 'react-bootstrap'
import './App.css'
import bgImg from './img/bg.png'

function App() {
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
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col md="4">
          <img src={import.meta.env.VITE_PUBLIC_URL+'shoes2.jpg'} alt="shoes2" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        <Col md="4">
          <img src={import.meta.env.VITE_PUBLIC_URL+'shoes3.jpg'} alt="shoes3" width="80%"/>
          <h4>상품명</h4>
          <p>상품설명</p>
        </Col>
        {/* xs:0px~767px, md:768px~991px, lg:992px~ */}
      </Row>
    </Container>

    </>
    
  )
}

export default App
