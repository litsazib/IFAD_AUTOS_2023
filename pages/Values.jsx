import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";


const Values = () => {
  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/24")
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
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),url(${item.module_image})`,
            width: "100%",
            height: "730px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}
          className="coverPhoto d-flex justify-content-center align-items-center position-relative"
        >
          {/* VALUES TITLE*/}

          <h1 className="fw-bold position-relative text-white">
            {/* {item.module_name} */}
          </h1>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="container-fluid">
        {moduleBanner}
      </div>
      <div
        className="container position-relative"
        style={{ marginTop: "-150px" }}
      >
        {document.map((doc) => {
          return (
            <div className="row py-2" key={doc.id}>
              {doc.content_item.map((item, i) => {
                const {item_image,item_name,item_long_desc} = item
                return (
                  <div className="col-sm-3 mb-4" key={item.id}>
                    <div className="valueBox p-4 text-center">
                    <div className="text-center mt-4">
                      <img src={item_image} className="mx-4 img-icon-height text-center" alt=""/>
                    </div>
                      <h4 className="mt-4 fw-bold text-white">
                        {item_name}
                      </h4>
                      <p className="text-white fs-6 text-justify fw-light">
                        {item_long_desc}
                      </p>
                    </div>
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

export default Values;
