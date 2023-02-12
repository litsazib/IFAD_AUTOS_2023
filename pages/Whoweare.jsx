import Head from "next/head";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Top from "./components/Top";
import Image from "next/image";
import Footer from "./components/Footer";
import Mission from "./Mission";
import Values from "./Values";
import History from "./History";
import Statistics from "./Statistics";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Timeline from './components/timeline/Timeline';
const Whoweare = () => {

  const loaderProp =({ src }) => {
    return src;
  }   


  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/22")
      .then((res) => res.json())
      .then((data) => setDocument(data));
  }, []);

  const [partners, setPartners] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/26")
      .then((res) => res.json())
      .then((data) => setPartners(data));
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

  const partnerName = partners.map((item) => {
    return (
      <div className="row my-2" key={item.id}>       
          <h1 className="fw-bold text-center brandColor">
            {item.module_name}
          </h1>
      </div>
    );
  });

  return (
    <>
    <Head>
      <title>Who we are | IFAD Autos Ltd</title>
    </Head>
      <div className="container-fluid">
        <Top />
        {moduleBanner}
      </div>
      <div className="container mt-5">
        <div className="sectionTitle text-center">
          {/* {settionTitle} */}
        </div>
        {document.map((item) => {
          return (
            <div className="mb-5" key={item.id}>
              {item.content_item.map((vision, i) => {
                return (
                  <div key={i} className="row d-flex align-items-center">
                    {i % 2 == 0 ? (
                      <>
                        <div className={"col-sm-4 p-0"}>
                          <Image
                            className="img-fluid rounded" 
                            width={300}
                            height={450}
                            src={vision.item_image}
                            alt="image"
                            loader={loaderProp}
                          />
                        </div>
                        <div className="col-sm-8 order-sm-2 order-1 px-5 my-5">
                          <h4 className="brandColor fw-bold text-center">
                            {vision.item_name}
                          </h4>
                          {vision.item_long_desc}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-sm-6 order-2 p-0">
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
      <Mission />
      <Values />
      {/* <History /> */}
      <Timeline/>
      
      <Statistics />
      {/* Partners */}
      
      <div className="col-sm-6 offset-sm-3" id="Partners">
        {partnerName}
      {partners.map((doc) => {
        return (
          <div className="d-flex partner-wrap" key={doc.id}>
            {doc.content_item.map((ron) => {
              return (
                <div key={ron.id}>
                  <div className="col my-0">
                    <div className="d-flex justify-content-center align-items-center position-relative">
                      <Image
                        className="img-fluid"
                        src={ron.item_image}
                        alt="car"
                        width={300}
                        height={150}
                        loader={loaderProp}
                      />
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

export default Whoweare;
