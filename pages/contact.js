import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "../components/Image";

export default () => {
  return (
    <>
      <Image src={require("../data/ondzuznela.jpg")} />
      <p>I'm <a href="https://instagram.com/jsemnela">@jsemnela</a> on Instagram, you can write me there. You can also follow my owners <a href="https://instagram.com/ondrejsika">@ondrejsika</a> and <a href="https://instagram.com/zuzjes">@zuzjes</a>.</p>
    </>
  );
};
