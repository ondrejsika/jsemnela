import App from "next/app";

import Nav from "../components/Nav";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container style={{ maxWidth: "45em" }}>
        <Nav />
        <Component {...pageProps} />
        <p style={{ marginTop: "30px" }}>Made for LinuxDays 2019</p>
        <style jsx global>{`
          body {
            overflow-y: scroll;
          }
          p {
              font-size: 20px;
          }
        `}</style>
      </Container>
    );
  }
}
