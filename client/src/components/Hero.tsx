import { Container, Row, Col } from "react-bootstrap";

function Hero() {
  return (
    <>
      <Container
        fluid
        className="heroContainer vh-100 d-flex justify-content-center align-items-center"
      >
        <span className="mx-auto text-center">
          {" "}
          <h1 className="heroText1">
            Bobby <br></br>Veldhuizen
          </h1>
          <h3 className="heroText">
            Painter & <br></br>Printmaker
          </h3>
        </span>
      </Container>
    </>
  );
}

export default Hero;
