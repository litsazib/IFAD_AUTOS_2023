import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Top from "./components/Top";
import Footer from "./components/Footer";
import Image from "next/image";
const Management = () => {
  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/27")
      .then((res) => res.json())
      .then((data) => setDocument(data));
  }, []);

  const moduleName = document.map((item) => {
    return (
      <h1 className="brandColor text-center my-5 fw-bold" key={item.id}>
        {item.module_name}
      </h1>
    );
  });

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
          <h1 className="fw-bold position-relative text-white">
            {item.module_name}
          </h1>
        </div>
      </div>
    );
  });
  const avatar = {
    overflow: "hidden",
    width: "100px",
    height: "100px",
    zIndex: "333",
  };
  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>{moduleName}</title>
          <meta name="description" content="All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Top />
        {moduleBanner}
      </div>
      <div className="container position-relative my-5">
        {document.map((doc) => {
          return (
            <div className="row row-cols-1 row-cols-md-2 g-4" key={doc.id}>
              {doc.content_item.map((item, i) => {
                return (
                  <div className="col" key={i}>
                    <div className="card mb-3 border p-4 h-100">
                      <div className="row g-0">
                        <div className="col-md-12">
                          <div className="row">
                            <div className="col-sm-3 col-4">
                          <div className="position-relative" style={avatar}>
                            <Image
                              src={item.item_image}
                              alt="photo"
                              objectFit="cover"
                              layout="fill"
                            />
                          </div>
                          </div>
                          <div className="col-sm-9 col-8">
                          <h3 className="card-title">{item.item_name}</h3>
                            <p className="card-text">
                              <small className="text-muted">
                                {item.item_short_desc}
                              </small>
                            </p>
                            </div>
                        </div>
                          <div className="card-body px-0"> 
                            <p className="card-text" style={{textAlign:"justify"}}>{item.item_long_desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Management;
