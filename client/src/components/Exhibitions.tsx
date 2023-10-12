import { Col, Container, Row, Table } from "react-bootstrap";

function Exhibitions() {
  return (
    <>
      <Container fluid className="vh-100 exhibitionsOuter">
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <th>Exhibition</th>
                <th>Date</th>
                <th>Location</th>
              </thead>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Exhibitions;
