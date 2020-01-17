import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "../components/Image";
import Head from "next/head";

export default () => {
  return (
    <>
      <Head>
        <title>@jsemela - About me</title>
      </Head>
      <Row>
        <Col sm={6}>
          <Image src={require("../data/nela.jpg")} />
        </Col>
        <Col sm={6}>
          <p>
            Ahoy, I'm Nela,
            <br />
            I'm half labrador half swiss shepherd.
          </p>
          <p>
            I love watter (anytime, anywhere, dirty is better than clean), mud,
            Mountains and play fetch.
          </p>
          <p>
            I was born 26th of May 2015 close to Hradec Kralove. Now, I live in
            Prague with my best owners Ondrej and Zuzka.
          </p>
        </Col>
      </Row>
    </>
  );
};
