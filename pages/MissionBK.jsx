import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import {linkBreak} from '../utils/common'


const Mission = () => {
  const loaderProp =({ src }) => {
    return src;
  }   



  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/23")
      .then((res) => res.json())
      .then((data) => setDocument(data));
  }, []);

  const moduleName = document.map((item) => {
    return (
      <h4 className="brandColor text-center my-5 mb-0 fw-bold" key={item.id}>
        {item.module_name}
      </h4>
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

  return (
    <>
      <div className="container mt-5">
        {/* {moduleName} */}

        {document.map((item) => {
          return (
            <div className="mb-5" key={item.id}>
              {item.content_item.map((vision, i) => {
                return (
                  <div key={i} className="row d-flex align-items-center">
                    {!i % 2 == 0 ? (
                      <>
                        <div className={"col-sm-4 p-0"}>
                          <Image
                            className="img-fluid trscla"
                            width={600}
                            height={400}
                            src={vision.item_image}
                            alt="image"
                            loader={loaderProp}
                          />
                        </div>
                        <div className="col-sm-8 order-sm-2 order-1 px-5 my-5">
                          <h4 className="brandColor fw-bold text-center">
                            {vision.item_name}
                          </h4>
                          <div className="sectionDesc">
                          {linkBreak(vision.item_long_desc)}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-sm-6 order-2 p-0 text-center">
                          <Image
                            className="img-fluid"
                            width={600}
                            height={400}
                            src={vision.item_image}
                            alt="image"
                            loader={loaderProp}
                          />
                        </div>
                        <div className="col-sm-6 order-sm-1 order-2 px-5 my-5">
                          <h4 className="brandColor fw-bold text-center">
                            {vision.item_name}
                          </h4>
                          {vision.item_long_desc}
                        </div>
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

export default Mission;
