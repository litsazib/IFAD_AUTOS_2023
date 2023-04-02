import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Top from "./components/Top";
import Footer from "./components/Footer";
const Desclaimer = () => {
  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("https://autosapi.ifadgroup.com/content-module/20")
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
  const sectionTitle = document.map((item,idx) => {
    return (
      <h1 className="fw-bold" key={idx}>
      {item.module_name}
    </h1>
    );
  });


  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>Disclaimer | IFAD Autos Ltd</title>
          <meta name="description" content="All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Top />
        {moduleBanner}
      </div>
      <div className="container my-5">
      <div className="sectionTitle text-center">{sectionTitle}</div>
        {document.map((items) =>
          items.content_item.map((item) => {
            return (
              <div className="row" key={item.id}>
                <h4>{item.item_name}</h4>
                <p className="mb-5">{item.item_long_desc}</p>
              </div>
            );
          })
        )}
      </div>
      <Footer />
    </>
  );
};

export default Desclaimer;
