import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "../components/Image";

export default class Gallery extends React.Component {
  render() {
    return (
      <Row>
        {this.props.images.map(image => {
          return (
            <Col sm={4}>
              <Image src={image} />
            </Col>
          );
        })}
      </Row>
    );
  }
}
