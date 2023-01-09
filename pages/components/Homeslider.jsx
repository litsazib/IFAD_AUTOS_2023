import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
import Image from "next/image";

const Homeslider = () => {
  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/14")
      .then((res) => res.json())
      .then((data) => setDocument(data));
  }, []);

  const moduleName = document.map((item) => {
    return (
      <div key={item.id}>
        {item.content_item.map((rony) => {
          return (
            <SwiperSlide key={rony.id}>
              <Image
                className="img-fluid"
                src={rony.item_image}
                alt="car"
                width={1920}
                height={0}
                priority
              />
            </SwiperSlide>
          );
        })}
      </div>
    );
  });

  return (
    <div className="row">
      <div className="swiper">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {moduleName}
        </Swiper>
      </div>
    </div>
  );
};

export default Homeslider;
