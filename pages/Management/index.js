import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Top from "../components/Top";
import Footer from "../components/Footer";
import Image from "next/image";
import {linkBreak} from '../../utils/common'
import Link from "next/link";
import BeatLoader from 'react-spinners/BeatLoader';

const Index = () => {

  const loaderProp =({ src }) => {
    return src;
  }   

  const [bod, setbod] = useState([]);
  const [md, setMD] = useState([]);
  const [team, setteam] = useState([]);

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


  const topLeader = bod[0]?.content_item?.map((item)=>{
		if(item.item_short_desc == "Chairman" || item.item_short_desc == "Director") {
			return (
				<div className="col-lg-4 col-sm-6" key={item.id}>
					<div className="first text-center">
						<div className="">
              <Link href={`/Management/${item.id}`}>
                <Image
                  src={item.item_image}
                  width={200}
                  height={200}
                  className="rounded img-fluid _hoverImg"
                  alt={item.item_name.toString()}
                  loader={loaderProp}
                />
              </Link>
						</div>
						<h3 className="mt-2">{item.item_name}</h3>
						<p className="">{item.item_short_desc}, IFAD Group</p>
					</div>
				</div>
			)
		}
	});
  
	const ViceChairman = bod[0]?.content_item?.map((item) => {
		if(item.item_short_desc !== "Chairman" && item.item_short_desc !== "Director") {
			return (
				<div className="col-lg-4 col-sm-6" key={item.id}>
					<div className="first text-center">
						<div className="">
              <Link href={`/Management/${item.id}`}>
                <Image
                  src={item.item_image}
                  width={200}
                  height={200}
                  className="rounded img-fluid _hoverImg"
                  alt={item.item_name.toString()}
                  loader={loaderProp}
                />
              </Link>
						</div>
						<h3 className="mt-2">{item.item_name}</h3>
						<p className="">{item.item_short_desc}</p>
					</div>
				</div>
			)
		}
	});

  const mdLoop = md[0]?.content_item.map((ctx,idx)=>{
		const {item_name,item_image,item_short_desc,id} = ctx
		return (
			<>
				<div className="text-center mb-5">
					<Link href={`/Management/${id}`}>
            <Image
              src={item_image}
              width={300}
              height={300}
              className="rounded img-fluid new-leadership-team _hoverImg"
              alt={item_name.toString()}
              loader={loaderProp}
            />
					</Link>
					<h2 className="pt-2 m-0">{item_name}</h2>
					<p className="">{item_short_desc}</p>
				</div>
			</>
		)
	})

  const leader_team_Loop = team[0]?.content_item.map((ctx,idx)=>{
		const {item_name,item_image,item_short_desc,id} = ctx
		return (
			<>
				<div className='col-lg-3'>
				<div className="text-center">
          <Link href={`/Management/${id}`}>
            <Image
              src={item_image}
              width={200}
              height={200}
              className="rounded img-fluid new-team-member _hoverImg"
              alt={item_name.toString()}
              loader={loaderProp}
            />
          </Link>
					<h4 className="pt-2 m-0">{item_name}</h4>
					<p className="">{item_short_desc}</p>
				</div>
				</div>
			</>
		)
	})





  const moduleName = bod.map((item) => {
    return (
      <h1 className="brandColor text-center my-5 fw-bold" key={item.id}>
        {item.module_name}
      </h1>
    );
  });

  const moduleBanner = bod.map((item) => {
    return (
      <div className="row" key={item.id}>
        <div
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${item.module_image})`,
            width: "100%",
            height: "400px",
            backgroundSize: "cover",
          }}
          className="coverPhoto d-flex justify-content-center align-items-center position-relative"
        >
        </div>
      </div>
    );
  });

  const settionTitle = bod.map((item,idx) => {
    return (
      <h1 className="fw-bold mb-5" key={idx}>
        {item.module_name}
      </h1>
    );
  });

  const avatar = {
    overflow: "hidden",
    width: "100%",
    height: "180px",
    paddingLeft:"10px",
    zIndex: "333",
  };

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : linkBreak(text)}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };




  return (
    <>
    <Head>
      <title>BOD | IFAD Autos Ltd</title>
    </Head>
      <div className="container-fluid">
        <Top />
        {moduleBanner}
      </div>
      <div className="bg-wraper">
        <div className="container position-relative py-5">
          <div className="sectionTitle text-center">
            {settionTitle}
          </div>

          <div className="row g-4 justify-content-md-center">
            {topLeader}
          </div>

          <div className="row g-4 mt-5">
            {ViceChairman}
          </div>


          <div className="sectionTitle text-center">
            <h1 className="fw-bold mb-5 mt-5">
              Leadership Team
            </h1>
          </div>

          {mdLoop ? mdLoop : <BeatLoader color="#FA3"/>}

          <div className="row row-cols-1 row-cols-md-2 g-4">
            {leader_team_Loop}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
