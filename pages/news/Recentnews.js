import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const Recentnews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/17")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const loaderProp =({ src }) => {
    return src;
  }  



  return (
    <div>
      <h4 className="brandColor fw-bold">Recent Posts</h4>
      {news[0]?.content_item.slice(0, 5).map((ron) => (
        <div className="row border-bottom py-4" key={ron.id}>
          <div className="col-3 position-relative">
            <Image
              className="position-relative"
              layout="fill"
              objectFit="cover"
              src={ron.item_image}
              alt="image"
              loader={loaderProp}
            />
          </div>
          <div className="col-9 fs-3">
            <Link className="newslink" key={ron.id} href={`${ron.id}`}>
              <h4>{ron.item_name}</h4>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recentnews;
