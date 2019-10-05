import React from "react";
import Image from "react-bootstrap/Image";

export default class MyImage extends React.Component {
  render() {
    return (
      <Image
        fluid={true}
        src={this.props.src}
        style={{ marginBottom: "30px" }}
      />
    );
  }
}
