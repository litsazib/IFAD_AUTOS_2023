import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Top from "./components/Top";
import Footer from "./components/Footer";
const Terms = () => {
  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/19")
      .then((res) => res.json())
      .then((data) => setDocument(data));
  }, []);
  const moduleBanner = document.map((item) => {
    return (
      <div className="row" key={item.id}>
        <div
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${item.module_image})`,
            width: "100%",
            height: "400px",
            backgroundSize: "cover",
          }}
          className="coverPhoto d-flex justify-content-center align-items-center position-relative"
        >
        </div>
      </div>
    );
  });
  const sectionTitle = document.map((item) => {
    return (
      <h1 className="fw-bold">
        {item.module_name}
      </h1>
    );
  });




  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>Terms of use</title>
          <meta name="description" content="All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Top />
        {moduleBanner}
      </div>
      <div className="container my-5">
        <div className="sectionTitle text-center">{sectionTitle}</div>
        {document.map((items) =>
          items.content_item.map((items,idx) => {
            return (
              <div className="row" key={idx}>
                <h4>{items.item_name}</h4>
                <p className="mb-5">{items.item_long_desc}</p>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </>
  );
};

export default Terms;
