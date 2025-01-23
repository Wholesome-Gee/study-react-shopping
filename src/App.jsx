
import { Navbar,Container,Nav, Row } from 'react-bootstrap'
import './App.css'
import bgImg from './img/bg.png'
import data from './Data'
import { useState } from 'react'
import Card from './card'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.jsx'
import About from './routes/About.jsx'

function App() {
  let [shoes] = useState(data)
  let navigate = useNavigate();
  //페이지 이동 도와주는
  
  return (
    <>
     

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link onClick={()=>{ navigate(-1) }}>이전</Nav.Link> */}
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
            {/* <Nav.Link onClick={()=>{ navigate(1) }}>다음</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to={'/'}> Home </Link>
      <Link to={'/detail'}> Detail </Link> */}

      <Routes>
        <Route path="/" element={
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
        }/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>위치임</div>}/>
        </Route>
        <Route path="*" element={<div>404page</div>}/>
      </Routes>

      

    </>
    
  )
}

export default App
