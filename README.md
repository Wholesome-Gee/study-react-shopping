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

## 코드 길어지면 import export 하면 됩니다..🔥

- 너무 긴 코드는 src폴더 내에 따로 jsx파일로 만들어서 Component화 시키고 export

  ```jsx
  // /src/data.jsx

  // export default는 한개, export는 여러개 변수/함수 export가능

  export function LongCode() {
    // 함수 실행문
  }

  export let data = ["a", "b", "c"];
  ```

- Component import 하기
  ```jsx
  // App.jsx
  import { LongCode, data } from "./data";
  ```

---

## 리액트 라우터 1 : 셋팅이랑 기본 라우팅..🔥

- 리액트 Router는 여러 페이지를 만들때 사용

  - `npm i react-router-dom@6`
  - main.jsx에 **\<App/>** 을 **\<BrowserRouter>** 로 감싸준다.
  - App.jsx에 Routes, Route, Link를 import하고 Routes 사용

    ```jsx
    import { Routes, Route, Link } from "react-router-dom";

    function App() {
      return (
        <>
          <Link to="/"> Home </Link>
          <Link to="/login"> Login </Link>
          // 중간코드 생략
          <Routes>
            <Route path="/detail" element={<Home />} />
            <Route path="/login" element={<Login />} />
            // path는 url 경로, element는 경로에 접속했을 때 보여줄 html
            // path="*" 는 지정한 route외에 다른 url 입력 시 적용되며 보통 404page를 보여줌
            // <Route path="*" element={<div>404page</div} />

          </Routes>
        </>
      );
    }
    ```

---

## 리액트 라우터 2 : navigate, nested routes, outlet..🔥

- navigate()는 페이지 이동을 도와주는 React router 함수

  - ( )안에 url 경로 및 -1(이전페이지), 1(다음페이지)을 쓸 수 있다.

  ```jsx
  import { useNavigate } from "react-router-dom";
  function App () {
    let navigate = useNavigate()
    return (
      <button onClick={() => {navigate(-1);}}>Pre</button>
      <button onClick={() => {navigate("/");}}>Home</button>
      <button onClick={() => {navigate(1);}}>Next</button>
  )}
  ```

- nested routes는 route안의 route를 의미한다.
- nested routes를 사용할 땐 부모 Route에 **\<Outlet>** 을 설정해줘야 한다
  - outlet은 nested routes가 보여질 위치를 의미한다.
- nested routes는 부모 route와 함께 보여진다.

  ```jsx
  // App.jsx
  <Routes>
    <Route path="/about" element={<About />}>
      <Route path="member" element={<div>member 페이지</div>}
      // /about/member
      <Route path="location" element={<div>location 페이지</div>}
      // /about/location
    </Route>
  </Routes>

  // About.jsx

  import { Outlet } from 'react-router-dom';
  export default function About () {
    return (
      <div> About page </div>
      <Outlet></Outlet>
    )
  }
  ```

---

## 리액트 라우터 3 : URL 파라미터로 상세페이지 100개 만들기..🔥

- URL 파라미터 사용방법 = `<Route path="detail/:id" element={<Detail/>}/>`
  - 유저가 'localhost:0000/detail/123' url로 접속시 Detail Component에 123이 URL파라미터로 전송됨
  ```jsx
  // Detail.jsx
  import { useParams } from "react-router-dom";
  export default function Detail(props) {
    let { id } = useParams(); // id = 123
  }
  ```

## styled-components 쓰면 CSS 파일 없어도 되는데..🔥

- styled-components은 CSS를 jsx파일 안에서 정의 할 수 있다.
- `npm i styled-components`
- jsx 파일에서 `import styled from 'styled-components'`

  ```jsx
  // App.jsx
  import styled from "styled-components";
  export let ColorBtn = styled.button`
    background-color: ${(props) => props.color}
    color: ${(props) => (props.color == "yellow" ? "black" : "white")}
    padding: 10px
  `;
  // styled-components는 Components이며 props를 받을 수 있다.
  // styled-components는 Components이며 export를 할 수 있다.
  // styled-components는 javascript 문법을 사용할 수 있다.
  let NewBtn = styled(ColorBtn)`
    padding: 20px;
  `;
  // styled-components의 복사 방법
  function App() {
    return (
      <>
        <ColorBtn color="yellow">ColorBtn</ColorBtn>
        <NewBtn color="red">NewBtn</NewBtn>
      </>
    );
  }
  ```

## Lifecycle과 useEffect 1..🔥

- Component의 LifeCycle
  - mount = Component가 실행
  - update = Component가 수정
  - unmount = Component가 종료
- useEffect()는 Component가 mount,update,unmount될 때 부가기능(side Effect)를 실행해준다.
- useEffect()는 jsx가 모두 렌더링 된 후 실행된다.
- useEffect()는 시간이 오래걸리는 연산작업, 서버에서 데이터 가져오는 작업, 타이머(setTimeout)작업에 유용하다.

  ```jsx
  import { useEffect } from "react";
  function App() {
    useEffect(() => {
      for (let i = 0; i < 10000, i++; ) {
        console.log(i);
      }
    }, []);
    return <div>html까지 모두 렌더링 후 useEffect가 실행됩니다.</div>;
  }
  ```
