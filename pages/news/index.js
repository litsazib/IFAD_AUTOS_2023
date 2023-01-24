import Link from "next/link";
import React from 'react';

const news = ({ rony }) => {
  const newsData = rony[0]?.content_item;
  return (
    <div className="newsList">
      {newsData.map((news) => (
        <Link key={news.id} href={`news/${news.id}`}>
          <h4>{news.item_name}</h4>
        </Link>
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("http://autosapi.ifadgroup.com:8001/content-module/17");
  const data = await res.json();
  return {
    props: { rony: data },
    revalidate: 10 
  };
};

export default news;
