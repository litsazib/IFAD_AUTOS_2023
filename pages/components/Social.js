import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Social = () => {
  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/6")
      .then((res) => res.json())
      .then((data) => setDocument(data));
  }, []);

  const loaderProp =({ src }) => {
    return src;
  }   

  const socialModule = document.map((items) => {
    return (
      <div className="row my-5" key={items.id}>
        <h1 className="brandColor text-center fw-bold mb-4">
          {items.module_name}
        </h1>
        <div className="swiper">
          <div className="row">
            {items.content_item.map((social) => {
              return (
                <div key={social.id} className="col-sm-3 mb-sm-0 mb-4">
                  <Link href={social.item_link}>
                    <Image
                      className="img-fluid mb-3 newsImage"
                      src={social.item_image}
                      alt="car"
                      width={1920}
                      height={0}
                      loader={loaderProp}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  });

  return <>{socialModule}</>;
};

export default Social;
