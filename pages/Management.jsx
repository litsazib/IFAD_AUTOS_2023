import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Top from "./components/Top";
import Footer from "./components/Footer";
import Image from "next/image";
const Management = () => {
  const loaderProp =({ src }) => {
    return src;
  }   


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
        </div>
      </div>
    );
  });
  const settionTitle = document.map((item,idx) => {
    return (
      <h1 className="fw-bold mb-5" key={idx}>
        {item.module_name}
      </h1>
    );
  });



  const avatar = {
    overflow: "hidden",
    width: "100%",
    height: "180px",
    paddingLeft:"10px",
    zIndex: "333",
  };
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };
  return (
    <>
    <Head>
      <title>BOD | IFAD Autos Ltd</title>
    </Head>
      <div className="container-fluid">
        <Top />
        {moduleBanner}
      </div>
      <div className="container position-relative my-5">
      <div className="sectionTitle text-center">
        {settionTitle}
      </div>
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
                            <div className="col-sm-4 col-4">
                              <div className="position-relative" style={avatar}>
                                <Image
                                  src={item.item_image}
                                  className="rounded"
                                  alt="photo"
                                  objectFit="cover"
                                  layout="fill"
                                  loader={loaderProp}
                                />
                              </div>
                            </div>
                            <div className="col-sm-8 col-8 px-3">
                              <h3 className="card-title">{item.item_name}</h3>
                              <p className="card-text">
                                <small className="text-muted">
                                  {item.item_short_desc}
                                </small>
                              </p>
                            </div>
                          </div>
                          <div className="card-body px-0">
                            <p
                              className="card-text"
                              style={{ textAlign: "justify" }}
                            >
                              <ReadMore>{item.item_long_desc}</ReadMore>
                            </p>
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
