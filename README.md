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

  ***
