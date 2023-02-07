import React from "react";
import Image from "next/image";

const Banner = ({title}) => {
  const loaderProp =({ src }) => {
    return src;
  }   
  return (
    <div className="bannerWrap">
      <Image className="pageBanner" src={'banner/vehicles_banner.jpg'} width={1920} height={250} loader={loaderProp} alt="banner" />
      {/* <span className="bannerText">{title}</span> */}
    </div>
  );
};

export default Banner;
