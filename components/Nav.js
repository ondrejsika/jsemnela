import Button from "../components/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default () => {
  return (
    <Row style={{ marginBottom: "30px", marginTop: "30px" }}>
      <Col>
        <h1>@jsemnela</h1>
      </Col>
      <Col sm={8} style={{ textAlign: "right" }}>
        <Button href="/">About me</Button>
        <Button href="/gallery">Gallery</Button>
        <Button href="/contact">Contact</Button>
      </Col>
    </Row>
  );
};
