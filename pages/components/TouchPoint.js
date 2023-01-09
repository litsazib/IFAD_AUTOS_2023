import React, { useState, useEffect } from 'react';
import salesIcon from "../../public/icons/sales.png";
import serviceIcon from "../../public/icons/service.png";
import leypartsIcon from "../../public/icons/leyparts.png";
import Image from "next/image";
import bg from "../../public/backgrounds/location.jpg";
import map from "../../public/map/map.png";


export default function TouchPoint() {

  const [addrtype, setAddrType] = useState('Sales')
  const [Location, setLocation] = useState([]);
  const [Division, setDivision] = useState([]);
  const [District, setDistrict] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://implapi.ifadgroup.com:8001/location/${addrtype}`)
      .then((res) => res.json())
      .then((data) => setLocation(data))
      .catch((error) => {
        setError(error);
      });
  }, [addrtype]);

  function handleAddrTypeChange(e) {
    setAddrType(e.target.value);
  }
  function handleDivisionChange(e) {
    setDivision(e.target.value);
  }
  function handleDistrictChange(e) {
    setDistrict(e.target.value);
  }

  if (!Location) {
    return null;
  }
  const addressList = Location.map((ctx,idx)=>{
    return (
      <div className="row align-items-center border-bottom py-5" key={idx}>
        <div className="col-1">
          <i className="bi bi-geo-alt"></i>
        </div>
        <div className="col">
          {ctx.name}<br></br>
          {ctx.address}<br></br>
          <i className="bi bi-telephone-outbound"></i> {ctx.phone}
        </div>
      </div>
    )
  })

  const filterdivision = [...new Set(Location.map(item => item.division))];
  const divisionList = filterdivision.map((division,idx)=>{
    return (
      <option key={idx} value={division}>{division}</option>
    )
  })

  const filterdistrict = [...new Set(Location.map(item => item.district))];
  const districtList = filterdistrict.map((dist,idx)=>{
    return (
      <option key={idx} value={dist}>{dist}</option>
    )
  })
 


  const background = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: "cover",
    boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.7)",
  };
  return (
    <>
      <div className="row" id="touchpoint">
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
        <div className="col-sm-4 px-6 py-3" style={{ background: "rgba(0, 0, 0, 0.7)" }}>
          {/* Location Type */}
          <div className="row py-3 px-2">
            <select className="form-select" 
            onChange={handleAddrTypeChange}>
              <option value="Sales">Sales</option>
              <option value="Service">Service</option>
              <option value="Lyparts">Lyparts</option>
            </select>
          </div>

          {/* Location Division */}
          <div className="row mb-3 px-2">
            <select className="form-select"
             aria-label="Default select example"
             onChange={handleDivisionChange}
             >
              <option defaultValue="none" selected disabled hidden>Select Division</option>
              {divisionList?divisionList:"loading..."}
            </select>
          </div>

          {/* Location District */}
          <div className="row px-2">
            <select className="form-select"
            aria-label="Default select example"
            onChange={handleDistrictChange}
            >
              <option defaultValue="none" selected disabled hidden>Select District</option>
              {districtList?districtList:"Loading..."}
            </select>
          </div>
          <div className="scrollableDiv">
            {addressList}
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
