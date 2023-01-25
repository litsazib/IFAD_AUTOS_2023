import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
const Relatednews = () => {
  const loaderProp =({ src }) => {
    return src;
  }   

  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/17")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <div>
      <div className="swiper my-5">
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
          {news[0]?.content_item.slice(6, -1).map((ron) => {
            return (
              <SwiperSlide key={ron.id}>
                <div className="col">
                  <Link href={`${ron.id}`}>
                  <Image
                    src={ron.item_image}
                    alt="related-news-thum"
                    width={400}
                    height={250}
                    loader={loaderProp}
                  />
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Relatednews;
