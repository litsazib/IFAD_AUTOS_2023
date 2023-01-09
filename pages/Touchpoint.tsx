import Head from "next/head";
import React from "react";
import Homeslider from "./components/Homeslider";
import Top from "./components/Top";
import TouchPoint from "./components/TouchPoint";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";

const Touchpoint = () => {
  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>Mission & Vision</title>
          <meta name="description" content="All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Top />
        <Homeslider />
        <TouchPoint />
      </div>
      <Footer />
    </>
  );
};

export default Touchpoint;
