import React, { useState, useEffect } from 'react';
import salesIcon from '../../public/icons/sales.png';
import serviceIcon from '../../public/icons/service.png';
import leypartsIcon from '../../public/icons/leyparts.png';
import Image from 'next/image';
import bg from '../../public/backgrounds/location.jpg';
import map from '../../public/map/map.png';
import BeatLoader from 'react-spinners/BeatLoader';

/*
Filter by Search
Auth :@Showon 
Date :1/09/23
*/

export default function TouchPoint() {
  const [addrtype, setAddrType] = useState('Sales');
  const [Location, setLocation] = useState([]);
  const [Division, setDivision] = useState([]);
  const [District, setDistrict] = useState([]);
  const [filteredDivision, setFilteredDivision] = useState([]);
  const [filteredDistrict, setFilteredDistrict] = useState([]);
  const [Address, setAddress] = useState([]);
  const [SearchKeyword, setSearchKeyword] = useState('');

  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://implapi.ifadgroup.com:8001/location/${addrtype}`)
      .then((res) => res.json())
      .then((data) => setLocation(data))
      .catch((error) => {
        setError(error);
      });
  }, [addrtype]);

  useEffect(() => {
    fetch(`http://implapi.ifadgroup.com:8001/location-search/${SearchKeyword}`)
      .then((res) => res.json())
      .then((data) => {
        setLocation(data);
        console.log(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [SearchKeyword]);

  // Filtering Division
  useEffect(() => {
    const filterDiv = Location.filter((loca) => {
      if (Division.length > 0) {
        return loca?.division === Division;
      }
      return Location;
    });
    setFilteredDivision(filterDiv);
    setAddress(filterDiv);
  }, [Division, addrtype, Location]);

  // Filtering District
  useEffect(() => {
    const filterDis = filteredDivision.filter((dist) => {
      if (District.length > 0) {
        return dist?.district === District;
      }
      return filteredDivision;
    });
    setAddress(filterDis);
  }, [District, filteredDivision]);

  const divisions = [...new Set(Location.map((item) => item.division))];

  const divisionList = divisions.map((division, idx) => {
    return (
      <option key={idx} value={division}>
        {division}
      </option>
    );
  });

  const districts = [...new Set(filteredDivision.map((item) => item.district))];

  const districtList = districts.map((dist, idx) => {
    return (
      <option key={idx} value={dist}>
        {dist}
      </option>
    );
  });

  function handleAddrTypeChange(e) {
    setAddrType(e.target.value);
    setDivision([]); // For resetting default division value
    setDistrict([]); // For resetting default district value
  }
  function handleDivisionChange(e) {
    setDivision(e.target.value);
    setDistrict([]); // For resetting default district value
  }
  function handleDistrictChange(e) {
    setDistrict(e.target.value);
  }
  function handleSearch(e) {
    setSearchKeyword(e.target.value);
  }

  if (!Location) {
    return null;
  }

  const addressList = Address.map((ctx, idx) => {
    return (
      <div className="row align-items-center border-bottom py-5" key={idx}>
        <div className="col-1">
          <i className="bi bi-geo-alt"></i>
        </div>
        <div className="col">
          {ctx.name}
          <br></br>
          Division:{ctx.division}
          &nbsp; | District:{ctx.district} <br></br>
          {ctx.address}
          <br></br>
          <i className="bi bi-telephone-outbound"></i> {ctx.phone}
        </div>
      </div>
    );
  });

  const background = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: 'cover',
    boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.7)'
  };
  return (
    <>
      <div className="row" id="touchpoint">
        <h1 className="brandColor text-center fw-bold my-5">Touch Point</h1>
        <div
          className="col-sm-12 pt-3 position-relative"
          style={{ backgroundColor: '#f6821f' }}
        >
          <div
            className="flex-row text-white d-flex justify-content-center"
            style={{ marginTop: '-50px' }}
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
          className="col-sm-4 px-6 py-3"
          style={{ background: 'rgba(0, 0, 0, 0.7)' }}
        >
          {/* Location Type */}
          <div className="row py-3 px-2">
            <select className="form-select" onChange={handleAddrTypeChange}>
              <option value="Sales">Sales</option>
              <option value="Service">Service</option>
              <option value="Lyparts">Lyparts</option>
            </select>
          </div>

          {/* Location Division */}
          <div className="row mb-3 px-2">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={handleDivisionChange}
            >
              <option
                defaultValue="none"
                selected={Division.length === 0}
                disabled
                hidden
              >
                Select Division
              </option>
              {divisionList ? divisionList : 'loading...'}
            </select>
          </div>

          {/* Location District */}
          {/* <div className="row px-2">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={handleDistrictChange}
            >
              <option
                defaultValue="none"
                selected={District.length === 0}
                disabled
                hidden
              >
                Select District
              </option>
              {districtList ? districtList : 'Loading...'}
            </select>
          </div> */}
          <p className="resultCount">{addressList.length} Address Found</p>
          <div className="scrollableDiv">
            {addressList ? addressList : <BeatLoader color="#FA3" />}
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
                id="Search"
                name="Search"
                className="form-control"
                placeholder="What are you looking for?"
                aria-label="search"
                aria-describedby="basic-addon1"
                onChange={handleSearch}
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
