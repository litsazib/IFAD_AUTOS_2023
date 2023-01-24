import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/Footer";
import Homeslider from "../components/Homeslider";
import Top from "../components/Top";
import Recentnews from "./Recentnews";
import Relatednews from "./Reletednews";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Detail = () => {
  const loaderProp =({ src }) => {
    return src;
  }   
  const router = useRouter()
  const pid = router.query.id
  const [newsdata, setnewsdata] = useState([]);
  const fetchNews = async () => {
    const data = await fetch(`http://implapi.ifadgroup.com:8001/content-item/${pid}`)
    .then((res) => res.json())
    .then((data) => setnewsdata(data))
  }

  useEffect(() => {
    fetchNews()
    .catch(console.error);
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>{newsdata[0]?.item_name}</title>
          <meta name="description" content="Ifad Autos Tesimonial" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Top />
        {/* <Homeslider /> */}
        <main className="container">
          <div className="row my-5">
            <h1 className="brandColor fw-bold text-center">News & Events</h1>
          </div>
          <div className="row my-5">
            <div className="col-sm-8">
              <h1>{newsdata[0]?.item_name}</h1>
              <div className="col-sm-12 position-relative">
                <Image
                  className="position-relative"
                  layout="fill"
                  objectFit="contain"
                  src={newsdata[0]?.item_image}
                  alt={newsdata[0]?.item_name}
                  loader={loaderProp}
                />
              </div>
              <p className="my-3">{newsdata[0]?.item_long_desc}</p>
            </div>
            <div className="col-sm-4">
              <div>
                <Recentnews />
              </div>
            </div>
          </div>
          <h4 className="brandColor fw-bold">Related Articles</h4>
        </main>
      </div>
      <Relatednews />
      <Footer />
    </>
  );
};
export default Detail;
