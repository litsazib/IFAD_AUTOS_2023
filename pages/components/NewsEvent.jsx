import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import Link from "next/link";
export default function NewsEvent() {
  const loaderProp =({ src }) => {
    return src;
  }  
  
  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("https://autosapi.ifadgroup.com/content-module/17")
      .then((res) => res.json())
      .then((data) => setDocument(data));
  }, []);

  const moduleName = document.map((item) => { 
    return (
      <div
        className="row position-relative"
        style={{
          backgroundImage: `url(${item.module_image})`,
          backgroundSize: "cover",
        }}
        key={item.id}
      >
        <h1 className="brandColor text-center fw-bold mt-5 mb-5">{item.module_name}</h1>
        <div className="swiper">
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
                slidesPerView: 1,
                spaceBetween: 0,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1920: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {item.content_item.map((ron) => {
              return (
                <SwiperSlide key={ron.id}>
                  <div className="newsDiv">
                    <div className="col mt-2">
                      <div className="d-flex justify-content-center align-items-center position-relative">
                        <Image
                          className="img-fluid mb-3 newsImage"
                          src={ron.item_image}
                          alt="car"
                          width={1920}
                          height={0}
                          loader={loaderProp}
                        />
                      </div>
                    </div>
                    <div className="newsButtonDiv">
                    <h6>{ron.item_name}</h6>
                      <Link
                        href={`news/${ron.id}`}
                        type="button"
                        className="btn btn-warning"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    );
  });

  return <>{moduleName}</>;
}
