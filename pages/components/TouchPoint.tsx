import React from "react";
import salesIcon from "../../public/icons/sales.png";
import serviceIcon from "../../public/icons/service.png";
import leypartsIcon from "../../public/icons/leyparts.png";
import Image from "next/image";
import bg from "../../public/backgrounds/location.jpg";
import map from "../../public/map/map.png";

export default function TouchPoint() {
  const background = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: "cover",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.7)",
  };
  return (
    <>
      <div className="row" id="touchpoint">
        {/* TouchPoint */}
        <h1 className="brandColor text-center fw-bold my-5">Touch Point</h1>
        <div
          className="col-sm-12 pt-3 position-relative"
          style={{ backgroundColor: "#f6821f" }}
        >
          <div
            className="flex-row text-white d-flex justify-content-center"
            style={{ marginTop: "-50px" }}
          >
            <div className="px-4 text-center">
              <Image width={50} height={50} src={salesIcon} alt="icon" />
              <p>Sales Center</p>
            </div>
            <div className="px-4 text-center">
              <Image width={50} height={50} src={serviceIcon} alt="icon" />
              <p>Service Center</p>
            </div>
            <div className="px-4 text-center">
              <Image width={50} height={50} src={leypartsIcon} alt="icon" />
              <p>Leyparts</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row position-relative text-white" style={background}>
        <div
          className="col-sm-4 px-5 py-3"
          style={{ background: "rgba(0, 0, 0, 0.7)" }}
        >
          <div className="row py-3">
            <select className="form-select" aria-label="Default select example">
              <option defaultValue="0">Select Category</option>
              <option value="1">Sales Center</option>
              <option value="2">Service Center</option>
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
    </>
  );
}
