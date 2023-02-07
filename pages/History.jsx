import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
const History = () => {
  const loaderProp = ({ src }) => {
    return src;
  };

  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/18")
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
        ></div>
      </div>
    );
  });

  const avatar = {
    borderRadius: "50%",
    overflow: "hidden",
    width: "40px",
    height: "40px",
    zIndex: "333",
  };
  const circle = {};
  return (
    <>
      <div className="container">
        {moduleName}

        {document.map((item) => {
          return (
            <div className="row mb-5 pb-5" key={item.id}>
              {item.content_item.map((history, i) => {
                return (
                <div
                  key={i}
                  className="row d-flex align-items-center storyLine"
                >
                  {i % 2 == 0 ? (
                    <>
                      <div className="col-sm-6 p-0"></div>
                      <div
                        className="col-sm-6 px-2 position-relative"
                        style={{
                          borderLeftWidth: "1px",
                          borderLeftStyle: "dashed",
                          boxSizing: "border-box",
                        }}
                      >
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "#f6821f",
                            position: "absolute",
                            top: "90px",
                            left: "-11px",
                            zIndex: "333",
                          }}
                        ></div>
                        <div
                          style={{
                            borderBottomWidth: "1px",
                            borderBottomStyle: "dashed",
                            width: "70px",
                            position: "absolute",
                            top: "100px",
                            left: "-5px",
                          }}
                        ></div>
                        <div className="row mt-5 d-flex">
                          <div className="col-4">
                            <div className="d-flex justify-content-center">
                              <div
                                className="position-relative"
                                style={avatar}
                              >
                                <Image
                                  src={history.item_image}
                                  className="bigCircle"
                                  alt="photo"
                                  objectFit="cover"
                                  layout="fill"
                                  loader={loaderProp}
                                />
                              </div>
                            </div>
                            <h6 className="fw-bold brandColor text-center mt-2">
                              {history.item_short_desc}
                            </h6>
                          </div>
                          <div className="col-8">
                            <h6 className="brandColor fw-bold border-bottom border-secondary">
                              {history.item_name}
                            </h6>
                            <p style={{ textAlign: "justify" }}>
                              {history.item_long_desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div
                        className="col-sm-6 px-0 position-relative"
                        style={{
                          borderRightWidth: "1px",
                          borderRightStyle: "dashed",
                        }}
                      >
                        <div
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            backgroundColor: "#f6821f",
                            position: "absolute",
                            top: "90px",
                            right: "-11px",
                            zIndex: "333",
                          }}
                        ></div>
                        <div
                          style={{
                            borderBottomWidth: "1px",
                            borderBottomStyle: "dashed",
                            width: "70px",
                            position: "absolute",
                            top: "100px",
                            right: "-5px",
                          }}
                        ></div>
                        <div className="row">
                          <div className="col-8">
                            <h6 className="brandColor fw-bold border-bottom border-secondary">
                              {history.item_name}
                            </h6>
                            <p style={{ textAlign: "justify" }}>
                              {history.item_long_desc}
                            </p>
                          </div>
                          <div className="col-4">
                            <div className="d-flex justify-content-center">
                              <div
                                className="position-relative"
                                style={avatar}
                              >
                                <Image
                                  src={history.item_image}
                                  alt="photo"
                                  objectFit="cover"
                                  layout="fill"
                                  loader={loaderProp}
                                />
                              </div>
                            </div>
                            <h6 className="fw-bold brandColor text-center mt-2">
                              {history.item_short_desc}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className={"col-sm-6 p-0"}></div>
                    </>
                  )}
                </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default History;
