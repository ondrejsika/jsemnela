import React from "react";
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default class MyButton extends React.Component {
  render() {

    return (
      <Link href={this.props.href}>
        <Button style={{ margin: "5px" }} variant="outline-primary">
          {this.props.children}
        </Button>
      </Link>
    );
  }
}
