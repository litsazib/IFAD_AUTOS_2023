import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Top from '../components/Top.js';
import Footer from '../components/Footer.js';
import Head from "next/head";
import { useRouter } from 'next/router';
import {linkBreak} from '../../utils/common.js'
import BeatLoader from "react-spinners/BeatLoader";
import slugify from 'react-slugify';
import Image from "next/image";


 const detailsPage = ()=> {

  const router = useRouter();
  const { slug } = router.query;

  const loaderProp =({ src }) => {
    return src;
  } 

  const [bod, setbod] = useState([]);
  const [md, setMD] = useState([]);
  const [team, setteam] = useState([]);

  let listOfData = bod[0]?.content_item
	let listOfMdData =  md[0]?.content_item
	let listOfTemeData = team[0]?.content_item

  let combinedArray = []
	if(typeof listOfData != 'undefined' && listOfData.length > 0 && typeof listOfMdData != 'undefined' && listOfMdData.length > 0 && typeof listOfTemeData != 'undefined' && listOfTemeData.length > 0) {
		combinedArray.push(...listOfData, ...listOfMdData, ...listOfTemeData)
	}

  let ResultData = combinedArray?.filter((ctx)=>{
		return ctx.id ===  parseInt(slug)
	})

  useEffect(() => {
    try {
      //Chairman 
      fetch("http://autosapi.ifadgroup.com:8001/content-module/27")
      .then((res) => res.json())
      .then((data) => setbod(data));      
      //MD List
      fetch("http://autosapi.ifadgroup.com:8001/content-module/29")
      .then((res) => res.json())
      .then((data) => setMD(data));
      //Director List
      fetch("http://autosapi.ifadgroup.com:8001/content-module/28")
      .then((res) => res.json())
      .then((data) => setteam(data));
    } catch (error) {
      console.log('something want wrong')
    }
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>BOD | IFAD Autos Ltd</title>
          <meta name="description" content="All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Top />
        <div className="row">
          <div
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('http://autoscms.ifadgroup.com:8081/storage/content-module/banner-329509.jpg')`,
              width: "100%",
              height: "350px",
              backgroundSize: "cover",
            }}
            className="coverPhoto d-flex justify-content-center align-items-center position-relative"
          >
          </div>
        </div>
      </div>

      {typeof ResultData != 'undefined' &&
				ResultData.length > 0 ? (
          <div className="container my-5">

            <div className="row g-4">
              <div className="col-lg-8 col-md-6">
                <h2 className="font-calibri fw-bold">{ResultData[0].item_name?ResultData[0].item_name:"Not Found"}</h2>
                <h4>{ResultData[0].item_short_desc}</h4>
                <p className="font-poppins justify">
                  {ResultData[0].item_long_desc ? linkBreak(ResultData[0].item_long_desc): "Not Found"}
                </p>
                <button className='customBtn' type="button" onClick={() => router.back()}>
                ← Click here to go back
                </button> 
              </div>
              <div className="col-lg-4 col-md-6">
                <Image
                  src={ResultData[0].item_image?ResultData[0].item_image:"#"}
                  width={500}
                  height={650}
                  className="rounded new-team-member"
                  alt={ResultData[0].item_name.toString()}
                  loader={loaderProp}
                />
              </div>
            </div>

          </div>
        ) : (<BeatLoader color="#FA3"/>)
			}
      <Footer />
    </>
  )
}

export default detailsPage;
