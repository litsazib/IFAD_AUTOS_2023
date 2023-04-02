import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import bg2 from "../public/values/statistics.webp";
const Statistics = () => {
  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("https://autosapi.ifadgroup.com/content-module/25")
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


  return (
    <>
      <div className="container-fluid">
        {moduleName}
      </div>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${bg2.src})`,
          width: "100%",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row py-5">
            {document.map((doc) => {
              return (
                <div className="col-sm-6 offset-sm-6" key={doc.id}>
                  <div className="row row-cols-2 g-3 g-lg-5">
                    {doc.content_item.map((item) => {
                      return (
                        <div className="col" key={item.id}>
                          <div className="p-3 bg-white border-redius">
                            <h1 className="brandColor fw-bold text-center">
                              {item.item_short_desc}
                            </h1>
                            <h4 className="text-center">{item.item_name}</h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
