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

---

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

---

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

---

## Lifecycle과 useEffect 2..🔥

- useEffect의 dependency
  - `useEffect(()=>{})`
    - Component가 mount/update 시에 useEffect가 실행됨
  - `useEffect(()=>{},[])`
    - Component가 mount 시에 useEffect가 실행됨
  - `useEffect(()=>{},[count])`
    - Component가 update 시에 useEffect가 실행됨
  - `useEffect(()=>{ return()=>{ code } })`
    - Component가 unmount 시에 useEffect가 실행됨
    - return 다음 코드는 useEffect가 동작되기 전에 먼저 실행된다. = clean up function
      - data를 받아오거나, 타이머가 설정되어있을때  
        기존 data요청이나 타이머를 제거하기 위해 사용

---

## 리액트에서 서버와 통신하려면 ajax 1..🔥

- `npm i axios`
  ```jsx
  import axios from "axios";
  function App() {
    let data = axios
      .get("severURL")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    return <div>{data}</div>;
  }
  ```

---

## 리액트에서 서버와 통신하려면 ajax 2 : post, fetch..🔥

- axios로 post 요청
  ```jsx
  import axios from "axios";
  function App() {
    let data = axios
      .post("severURL", { name: "kim" })
      .then((response) => {
        console.log(reaponse);
      })
      .catch((error) => {
        console.log(error);
      });
    return <div></div>;
  }
  ```
- axios로 동시에 URL1, URL2에 GET/POST 요청

  ```jsx
  Promise.all([axios.get("URL1")], [axios.get("URL2")])
    .then((resonse) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  ```

  ***

## 리액트에서 탭 UI 만들기..🔥

- Component에서 props를 조금 더 쉽게 쓰는법
  ```jsx
  // App.jsx
  <NameComponent name="Wholesome-Gee"
  function NameComponent({name}) {
    return <div>{name}</div>
  }
  ```
  ***

## 멋있게 컴포넌트 전환 애니메이션 주는 법 (transition)..🔥

- 애니메이션 적용하는 방법

  - 애니메이션 동작 전 className 만들기
  - 애니메이션 동작 후 className 만들기 (transition 포함)
  - 원하는곳에 애니메이션 동작 후 className 부착해주기

  ```css
  start {
    opacity: 0;
  }
  end {
    opacity: 1;
  }
  ```

  ```jsx
  function TabContent({ tab }) {
    let [fade, setFade] = useState("");

    useEffect(() => {
      let a = setTimeout(() => {
        setFade("end");
      }, 10);
      // react의 automatic batching 기능때문에 setTimeout 함수로 setFade의 실행시점을 늦춰준다.
      // automatic batching은 html 재렌더링을 일으키는 state함수가 중첩되어 있으면
      // state함수마다 재렌더링을 실행하지 않고, 모든 인접 state함수 실행 후 마지막 state함수에서만 재렌더링을 1회 하는 개념
      return () => {
        clearTimeout(a);
        setFade("");
      };
    }, [tab]);
    return (
      <div className={`start ${fade}`}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
      </div>
    );
  }
  ```

---

## props 싫으면 Context API 써도 됩니다..🔥

- Context는 state를 담는 보관함 개념 ( 중첩되어있는 자식 component들에게 props를 전달 할 수 있음)
- 그러나, 성능저하 이슈가 있어 잘 쓰진 않고, redux같은 외부 라이브러리를 자주 사용

  ```jsx
  {createContext} from 'react'

  export let Context1 = createContext() // state 보관함 생성
  function App () {
    let [재고] = useState([10,11,12])
    return(
      <>
        <Routes>
          <Route path="/detail/:id" element={
            <Context1.Provider value={재고}> // Detail Coponent에 Context 전달
              <Detail/>
            </Context1.Provider>
          }></Route>
        </Routes>
      </>
    )
  }
  ```

  ```jsx
  import { useContext } from "react";
  import { Context1 } from "../App.jsx";

  let { 재고 } = useContext(Context1);
  // useContext는 Context 해체 함수

  export default function Detail() {
    return <div> {재고} </div>;
    // [10,11,12]
  }
  ```

---

## 장바구니 페이지 만들기 & Redux 1 : Redux Toolkit 설치..🔥

- html table 만들기
  ```html
  <!-- thead = 제목줄, tbody = 본문줄 -->
  <!-- tr = 가로줄, th는 세로줄(제목), td는 세로줄(본문) -->
  <table className="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">상품명</th>
        <th scope="col">수량</th>
        <th scope="col">변경하기</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>안녕</td>
        <td>안녕</td>
        <td>안녕</td>
      </tr>
    </tbody>
  </table>
  ```
- Redux는 state를 모아두는 저장소(store) ( redux를 사용하면 props를 안써도 됨 )
- Redux 세팅

  - `npm i @reduxjs/toolkit react-redux`
  - /src/store.js 생성
    ```jsx
    import { configureStore } from "@reduxjs/toolkit";
    export default configureStore({
      reducer: {},
    });
    ```
  - main.jsx의 BrowserRouter를 Provider로 감싸기

    ```jsx
    import store from "./store.js";
    import { Provider } from "react-redux"; // react-redux에서 Provider import

    createRoot(document.getElementById("root")).render(
      <StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </StrictMode>
    );
    ```

    - App.jsx와 그 하위 Component에서 store에 담긴 state들을 꺼내 쓸 수 있음

---

## Redux2 : store에 state 보관하고 쓰는 법..🔥

- store에 state 만들기

  ```jsx
  import { configureStore, createSlice } from "@reduxjs/toolkit";

  // state를 slice라고 함. slice 생성
  let name = createSlice({
    name: "name",
    initialState: "kim",
  });

  let arr1 = createSlice({
    name: "arr1",
    initialState: [10, 11, 12],
  });

  // slice export
  export default configureStore({
    reducer: {
      name: name.reducer,
      arr1: arr1.reducer,
    },
  });
  ```

  ```jsx
  import { useSelector } from "react-redux";
  let state = useSelector((state) => {
    return state;
  });
  //모든 state 불러오기

  let state = useSelector((state) => {
    return state.name;
  });
  //특정 state 불러오기
  ```

---

## Redux3 : store의 state변경하는 법..🔥

- store의 state 변경하기 Step

  - store.js에 state변경 함수 정의
    ```jsx
    //store.js
    let user = createSlice({
      name: "user",
      initialState: "kim",
      reducers: {
        // reducers에 state변경 함수 정의
        changeName(state) {
          // state는 기존 state 값이 담겨있다.
          return "john " + state; // = john kim
        },
      },
    });
    ```
  - 정의 된 함수를 export
    ```jsx
    //store.js
    export let { changeName } = user.actions;
    //user state에 있는 changeName 함수를 export
    ```
  - Component에서 함수 import 및 useDispatch()

    ```jsx
    //Component.jsx
    import { useDispatch } from "react-redux";
    import { chageName } from "../store.js";
    let dispatch = useDispatch();
    // useDispatch는 store.js에 요청을 보내주는 함수
    return (
      <button
        onClick={() => {
          dispatch(changeName());
        }}
      ></button>
    );
    ```

---

## Redux 4 : state가 object/array일 경우 변경하는 법..🔥

- redux의 state 변경함수에 parameter를 전달할 수 있다.

  ```jsx
  //store.js
  let user = createSlice({
    name: "user",
    initialState: { name: 'kim', age:20}
    reducers: {
      changeName(state,action) {
        // action은 parameter 박스
        state.name = 'park'
      },
      increase(state,action) {
        state.age += action.payload    // increase(50)
        // payload는 전달받은 parameter박스를 open해주는 역할
      }
    },
  });

  export let { changeName, increase } = user.actions
  ```

- store.js에 적힌 state들도 파일 분할 할 수 있다.

  - /src/store/userSlice.jsx

    ```jsx
    /* eslint-disable */
    import { createSlice } from "@reduxjs/toolkit";

    let user = createSlice({
      name: "user",
      initialState: { name: "kim", age: 20 },
      reducers: {
        changeName(state) {
          state.name = "park";
        },
        increase(state, action) {
          state.age += action.payload;
        },
      },
    });

    export default user;
    export let { changeName, increase } = user.actions;
    ```

    - store.js에서 `import user from './store/userSlice'` 이런식으로 경로 지정
