import Head from "next/head";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Top from "./components/Top";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Footer from "./components/Footer";
const Partners = () => {
  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/26")
      .then((res) => res.json())
      .then((data) => setDocument(data));
  }, []);

  const moduleName = document.map((item) => {
    return (
      <div key={item.id}>
        <h1 className="brandColor text-center my-5 fw-bold">
          {item.module_name}
        </h1>
        <p className="text-center">{item.module_description}</p>
      </div>
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
      <div className="container-fluid">
        <Head>
          <title>{moduleName}</title>
          <meta name="description" content="All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Top />
        {moduleBanner}
      </div>
      <div className="container">
        <div className="row my-5">{moduleName}</div>
      </div>

      {document.map((doc) => {
        return (
          <div className="swiper" key={doc.id}>
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

export default Partners;
