import { Col, Container, Row } from "react-bootstrap";

function AboutMe() {
  return (
    <>
      <Container
        fluid
        className="vh-100 d-flex justify-content-center align-items-center aboutMeContainer"
      >
        {/* <span className="justify-content-end"> */}
        <Row>
          <Col md={8}>
            <p className="aboutText">
              Within my work I research “the alternative.” Different ways of
              seeing, thinking and living as described in counterculture
              movements, speculative fiction and anti-hegemonic philosophical
              thought, influence my practice. In my paintings I use a broad
              range of materials, oil paint, wall paint, acrylics, spray paint,
              permanent marker, lacquer, epoxy, sand, dirt, glue, silicone,
              dragon blood, white spirit, flowers, and more. The
              unpredictability of mixing these materials makes me feel like an
              alchemist or witch of sorts. By mixing not only materials but also
              styles I aim at exploring ambivalence and ambiguity - concepts
              which I believe to be powerful, as things can be both ways at the
              same time. An escalator cannot break, but will just become stairs.
              And as such uselessness constitutes a function in itself. My
              paintings could be referred to as ‘ambiguous abstractions,’
              floating somewhere between abstraction and representation. Maybe
              paintings are useless and as such reflect on nothing other than
              themselves, maybe they simultaneously have the power to change the
              conditions of the world, exactly because they don't serve any
              purpose. My grandfather told me nothing is something, and I am
              stuck with that, probably for the rest of my life. Inside his
              cigarette box was written that those who know do not speak. I do
              speak sometimes.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutMe;
