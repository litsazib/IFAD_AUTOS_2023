import React from "react";

const Banner = ({title}) => {
  return (
    <div className="bannerWrap">
      <img className="pageBanner" src="banner/banner.jpg" alt="" />
      <span className="bannerText">{title}</span>
    </div>
  );
};

export default Banner;
