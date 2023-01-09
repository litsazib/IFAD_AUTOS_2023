import Head from "next/head";
import React, { useEffect, useState } from "react";
import { withRouter } from 'next/router';
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Top from "./components/Top";
import bg from "../public/backgrounds/news-bg.webp";

const Contact = withRouter((props) => {
  const { inquery } = props.router.query;
  const [InqueryData, setInqueryData] = useState([]);
   // Fetching vehicles data
   let urlPath ='http://autosapi.ifadgroup.com:8001/products/'+inquery;
   useEffect(() => {
    if(!inquery) {
      return;
    }
    fetch(urlPath)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) setInqueryData(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, [inquery]);

  console.log(InqueryData[0]?.product_name)





  const background = {
    backgroundImage: `url(${bg.src})`,
    backgroundSize: "cover",
  };
  return (
    <>
      <div className="container-fluid">
        <Top />
        {/* <Banner title="Contact"/> */}
      </div>
      <div className="container-fluid py-5" style={background}>
        <div className="container">
          <h1 className="brandColor text-center fw-bold mb-5">Get In Touch</h1>
           <form action="" method="post">
            <div className="row">
              <div className="col-sm-6">
                <div className="inner-addon left-addon">
                  <i className="bi bi-person-fill brandColor fs-3 me-3"></i>
                  <input
                    type="text"
                    className="customInput"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="inner-addon left-addon">
                  <i className="bi bi-envelope-fill brandColor fs-3 me-3"></i>
                  <input
                    type="email"
                    className="customInput"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-6">
                <div className="inner-addon left-addon">
                  <i className="bi bi-telephone-inbound-fill brandColor fs-3 me-3"></i>
                  <input
                    type="phone"
                    className="customInput"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="inner-addon left-addon">
                  <i className="bi bi-justify-left brandColor fs-3 me-3"></i>
                  <input
                    type="text"
                    className="customInput"
                    readOnly={true}
                    value={InqueryData[0]?.product_name}
                    placeholder="Subject"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <i className="bi bi-chat-square-text-fill brandColor fs-3 me-3"></i>
              <div className="inner-addon left-addon">
                <textarea className="customInput"></textarea>
              </div>
            </div>
            <div className="row mt-4 mb-5">
              <div className="col-3">
                <button className="btn btn-warning text-white">Send</button>
              </div>
            </div>
          </form>
          <div className="row mt-5">
            <div className="col">
              ABCD<br></br>
              House 00, Flat 00, Road 00/A Dhaka 1234<br></br>
              <i className="bi bi-telephone-outbound"></i> +88 0123456789
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );

});

export default Contact;
