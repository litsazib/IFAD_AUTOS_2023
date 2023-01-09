import Image from "next/image";
import React from "react";
import bg from "../../public/backgrounds/location.jpg";
import map from "../../public/map/map.png";

export default function Location() {
  const background = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: "cover",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.7)",
  };
  return (
    <div className="row position-relative text-white" style={background}>
      <div
        className="col-sm-4 px-5 py-3"
        style={{ background: "rgba(0, 0, 0, 0.7)" }}
      >
        <div className="row py-3">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue="0">Select Category</option>
            <option value="1">Sales</option>
            <option value="2">Service</option>
            <option value="3">Layparts</option>
          </select>
        </div>
        <div className="row mb-3">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue="0">Select Division</option>
            <option value="1">Dhaka</option>
            <option value="2">Chittagong</option>
            <option value="3">Sylhet</option>
          </select>
        </div>
        <div className="row">
          <select className="form-select" aria-label="Default select example">
            <option defaultValue="0">Select District</option>
            <option value="1">Dhaka</option>
            <option value="2">Manikganj</option>
            <option value="3">Narayanganj</option>
          </select>
        </div>
        <div className="row align-items-center border-bottom py-5">
          <div className="col-1">
            <i className="bi bi-geo-alt"></i>
          </div>
          <div className="col">
            ABCD<br></br>
            House 00, Flat 00, Road 00/A Dhaka 1234<br></br>
            <i className="bi bi-telephone-outbound"></i> +88 0123456789
          </div>
        </div>
        <div className="row align-items-center border-bottom py-5">
          <div className="col-1">
            <i className="bi bi-geo-alt"></i>
          </div>
          <div className="col">
            ABCD<br></br>
            House 00, Flat 00, Road 00/A Dhaka 1234<br></br>
            <i className="bi bi-telephone-outbound"></i> +88 0123456789
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="row p-5">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="What are you looking for?"
              aria-label="search"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <Image src={map} alt="map" />
      </div>
    </div>
  );
}
