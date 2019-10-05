import React from "react";
import Head from "next/head";
import Gallery from "../components/Gallery";

export default () => {
  return (
    <>
      <Head><title>@jsemela - About me</title></Head>
      <Gallery
        images={[
          require("../data/nela9.jpg"),
          require("../data/nela8.jpg"),
          require("../data/nela7.jpg"),
          require("../data/nela6.jpg"),
          require("../data/nela5.jpg"),
          require("../data/nela4.jpg"),
          require("../data/nela3.jpg"),
          require("../data/nela2.jpg"),
          require("../data/nela1.jpg")
        ]}
      />
    </>
  );
};
