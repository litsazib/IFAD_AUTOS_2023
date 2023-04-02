import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/Footer";
import Top from "../components/Top";
import Recentnews from "./Recentnews";
import Relatednews from "./Reletednews";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { linkBreak } from '../../utils/common';

const Detail = () => {
  const loaderProp =({ src }) => {
    return src;
  }   
  const router = useRouter()
  const pid = router.query.id
  const [newsdata, setnewsdata] = useState([]);
  const fetchNews = async () => {
    const data = await fetch(`https://autosapi.ifadgroup.com/content-item/${pid}`)
    .then((res) => res.json())
    .then((data) => setnewsdata(data))
  }

  useEffect(() => {
    fetchNews()
    .catch(console.error);
  }, [pid]);

  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>{newsdata[0]?.item_name.slice(0,20)}... | IFAD Autos Ltd.</title>
          <meta name="description" content="Ifad Autos Tesimonial" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Top />
        <main className="container">
          <div className="row my-5">
            <h1 className="brandColor fw-bold text-center">News & Events</h1>
          </div>
          <div className="row my-5">
            <div className="col-sm-8">
              <h1>{newsdata[0]?.item_name}</h1>
              <div className="col-sm-12 position-relative">
                <Image
                  className="position-relative newsDetailsImage"
                  width={850}
                  height={500}
                  src={newsdata[0]?.item_image}
                  alt={newsdata[0]?.item_name}
                  loader={loaderProp}
                />
              </div>
              <p className="my-3">
              {linkBreak(newsdata[0]?.item_long_desc)}
              </p>
            </div>
            <div className="col-sm-4">
              <div>
                <Recentnews />
              </div>
            </div>
          </div>
          <h4 className="brandColor fw-bold text-center display-6 ">All News & Events</h4>
        </main>
      </div>
      <Relatednews />
      <Footer />
    </>
  );
};
export default Detail;
