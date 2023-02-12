import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const News = () => {

  const [News, setNews] = useState([]);


  useEffect(() => {
    fetch('http://autosapi.ifadgroup.com:8001/content-module/17')
      .then((res) => res.json())
      .then((data) => {
        if (data.length) setNews(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const newsData = News[0]?.content_item;
  return (
    <>    
    <Head>
      <title>News | IFAD Autos Ltd</title>
    </Head>
    <div className="newsList">
      {newsData?.map((news) => (
        <Link key={news.id} href={`news/${news.id}`}>
          <h4>{news.item_name}</h4>
        </Link>
      ))}
    </div>
    </>
  );
};

export default News;
