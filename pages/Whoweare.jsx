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
const Whoweare = () => {
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
          <h1 className="fw-bold position-relative text-white">
            {item.module_name}
          </h1>
        </div>
      </div>
    );
  });

  const partnerBanner = partners.map((item) => {
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
      <div className="container mt-5">
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
                            className="img-fluid"
                            width={300}
                            height={450}
                            src={vision.item_image}
                            alt="image"
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
      <History />
      <Statistics />
      {/* Partners */}
      {partnerBanner}
      {partners.map((doc) => {
        return (
          <div className="swiper d-flex justify-content-center" key={doc.id}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={100}
              slidesPerView={1}
              pagination={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 6,
                  spaceBetween: 50,
                },
                1920: {
                  slidesPerView: 6,
                  spaceBetween: 50,
                },
              }}
            >
              {doc.content_item.map((ron) => {
                return (
                  <SwiperSlide key={ron.id}>
                    <div className="col my-5">
                      <div className="d-flex justify-content-center align-items-center position-relative">
                        <Image
                          className="img-fluid mb-3 partnerLogo"
                          src={ron.item_image}
                          alt="car"
                          width={1920}
                          height={0}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        );
      })}
      <Footer />
    </>
  );
};

export default Whoweare;
