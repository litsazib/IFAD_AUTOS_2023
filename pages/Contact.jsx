import Head from "next/head";
import React, { useEffect, useState,useRef } from "react";
import { withRouter } from 'next/router';
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Top from "./components/Top";
import bg from "../public/backgrounds/news-bg.webp";
import swal from 'sweetalert';
import { isEmpty } from '../utils/common';
import { sendContact } from './api/';
import Link from 'next/link'

const Contact = withRouter((props) => {
  const { inquery } = props.router.query;
  const [InqueryData, setInqueryData] = useState([]);
  const [ContactAddress, setContactAddress] = useState([]);
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
  }, [inquery,urlPath]);
  
  useEffect(() => {
  fetch('http://implapi.ifadgroup.com:8001/contacts')
    .then((res) => res.json())
    .then((data) => {
      if (data.length) setContactAddress(data);
    })
    .catch((error) => {
      setError(error);
    });
}, []);

  let getFullName,getEmail,getContactNum,getSubject,getMassage = useRef();

	const [FullName, setFullName] = useState('');
	const [Email, setEmail] = useState('');
	const [ContactNum, setContactNum] = useState('');
	const [Massage, setMassage] = useState('');
  const Subject = InqueryData[0]?.product_name?InqueryData[0]?.product_name:"noSubject";

  const reset = () => {
    setFullName('');
    setEmail('');
    setContactNum('');
    setMassage('');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isEmpty(FullName)) {
			swal('Oops!', 'Full Name Required ');
		} else if (isEmpty(Subject)) {
			swal('Oops!', 'Subject Required ');
		} else if (isEmpty(Email)) {
			swal('Oops!', 'Email Required ');
		}else if (isEmpty(ContactNum)) {
			swal('Oops!', 'Contact Number Required ');
		}
     else if (isEmpty(Massage)) {
			swal('Oops!', 'Massage Required ');
		} else {
			let data = {FullName,Subject,Email,ContactNum,Massage};
      console.log(data)
			sendContact(data).then((Result) => {
				if (Result === true) {
					reset();
					swal('Send!', 'Email sent successfully', 'success');
				} else {
					swal('Oops!', 'Request Fail Try Again');
				}
			});
		}
	};




const addredd = ContactAddress[0]?.contact_list.map((ctx,idx)=>{
  return (
    <div className="col" key={idx}>
    {ctx.name}<br></br>
    {ctx.contact_address}<br></br>
    <i className="bi bi-telephone-outbound"></i> {ctx.contact_phone}
  </div>
  )
})

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
                    value={FullName}
                    ref={getFullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
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
                    value={Email}
                    ref={getEmail}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
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
                    value={ContactNum}
                    ref={getContactNum}
                    onChange={(e) => {
                      setContactNum(e.target.value);
                    }}
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
                    ref={getSubject}
                    className="customInput"
                    value={InqueryData[0]?.product_name}
                    placeholder="Subject"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <i className="bi bi-chat-square-text-fill brandColor fs-3 me-3"></i>
              <div className="inner-addon left-addon">
                <textarea 
                value={Massage}
                ref={getMassage}
                onChange={(e) => {
                  setMassage(e.target.value);
                }}
                className="customInput">

                </textarea>
              </div>
            </div>
            <div className="row mt-4 mb-5">
              <div className="col-3">
                <button onClick={handleSubmit} className="btn btn-warning text-white">Send</button>
              </div>
            </div>
          </form>
          <div className="row mt-5">
          {addredd?addredd:"Address not found"}
          <Link target="_blank" href="https://www.google.com/maps/place/IFAD+Tower/@23.7652035,90.4014344,17.52z/data=!4m5!3m4!1s0x3755c7527f79a431:0x59c9934aad0e3e5e!8m2!3d23.7643446!4d90.4035065?coh=164777&entry=tt&shorturl=1">Find us in Google map</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );

});

export default Contact;
