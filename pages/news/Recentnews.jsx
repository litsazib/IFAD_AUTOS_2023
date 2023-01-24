import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const Recentnews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const loaderProp =({ src }) => {
    return src;
  }  



  return (
    <div>
      <h4 className="brandColor fw-bold">Recent Posts</h4>
      {news.slice(0, 5).map((ron) => (
        <div className="row border-bottom py-4" key={ron.id}>
          <div className="col-3 position-relative">
            <Image
              className="position-relative"
              layout="fill"
              objectFit="cover"
              src={ron.image}
              alt="image"
              loader={loaderProp}
            />
          </div>
          <div className="col-9 fs-3">
            <Link className="newslink" key={ron.id} href={`${ron.id}`}>
              <h4>{ron.title}</h4>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recentnews;
