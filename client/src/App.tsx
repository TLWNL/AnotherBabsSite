import { useState } from "react";

import "./App.css";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import MainPage from "./components/MainPage";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Exhibitions from "./components/Exhibitions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Container fluid>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Exhibitions></Exhibitions>
      </Container> */}
    </>
  );
}

export default App;
