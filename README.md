# React 공부

## 새로운 프로젝트 생성 & Bootstrap 사용하기..🔥

- 새로운 프로젝트 생성
  - 터미널에 폴더경로를 Desktop으로 맞춰놓고 `npm create vite@latest`
  - App.jsx, App.css, index.css 초기화
- Bootstrap 사용하기

  - `npm install react-bootstrap bootstrap`
  - index.html에 link 태그 추가
    ```html
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    ```
  - https://react-bootstrap.netlify.app/ 에서 Bootstrap Component 검색 후 사용 - 사용 할 파일 상단에 `import { 컴포넌트 } from 'react-bootstrap'`

    ```js
    import { Button, Navbar, Container, Nav } from "react-bootstrap";

    function App() {
      return (
        <>
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Button variant="primary">Primary</Button>
        </>
      );
    }
    ```

---

## 이미지 넣는 법 & public 폴더 이용하기..🔥

- 이미지 넣는법
  - css 에서 이미지 넣기 ( bg.jpg위치: /src/images )
    ```css
    .main-bg {
      background-image: url("./images/bg.jpg");
    }
    ```
  - html 에서 이미지 넣기 1 ( bg.jpg위치: /src/images )
    ```js
    import bgImg from './images/bg.jpg';
    function App() {
      return (
        <>
          <div style={{ backgroundImage:`url(${bgImg})`}}
        </>
      )
    }
    ```
- public 폴더 이용하기
  - html 에서 이미지 넣기 2 ( bg.jpg위치: /public/images)
    - 루트경로에 **.env** 파일 생성
    - .env 파일에 `VITE_PUBLIC_URL=/images/` 추가
      ```js
      import bgImg from "./images/bg.jpg";
      function App() {
        return (
          <>
            <img src={import.meta.env.VITE_PUBLIC_URL + "bg.jpg"} alt="bgImg" />
          </>
        );
      }
      ```
- BootStrap에서 grid 기능 사용할 때, `import { Container, Row, Col } from 'react-bootstrap'`
  ```js
  import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
  function App() {
    return (
      <>
        <Container>
          <Row>
            <Col xs="4" md="4" lg="4">
              <p> xs:0px~767px, md:768px~991px, lg: 992px~ </p>
            </Col>
            <Col xs="4" md="4" lg="4">
              <p> xs:0px~767px, md:768px~991px, lg: 992px~ </p>
            </Col>
            <Col xs="4" md="4" lg="4">
              <p> xs:0px~767px, md:768px~991px, lg: 992px~ </p>
            </Col>
            // 한 행당 기본 12열로 나누어져있음
          </Row>
        </Container>
      </>
    );
  }
  ```

---
