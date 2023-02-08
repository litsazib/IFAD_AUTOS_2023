import React, { useEffect, useState } from "react";


const Timeline = () => {

  const loaderProp = ({ src }) => {
    return src;
  };

  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/18")
      .then((res) => res.json())
      .then((data) => setDocument(data));
  }, []);

  const timelineData = document[0]?.content_item.map((history,idx)=>{
    return (
      <li className="li mt-sm-4" key={idx}>
        <h3 className="title text-dark">{history.item_name}</h3>
        <span className="circle" />
        <span className="date">{history.item_short_desc}</span>
      </li>
    )
  })

  const moduleName = document.map((item) => {
    return (
      <h1 className="brandColor text-center my-5 fw-bold" key={item.id}>
        {item.module_name}
      </h1>
    );
  });


	return (
		<>
      <section>
        <h1 className="brandColor text-center mt-4 mb-5 fw-bold">{moduleName}</h1>
        <div className="container">
          <div className="col-lg-8 col-sm-12 history-width">
          <div className="main">
            <div className="history-timeline">
              <ul className="ul">
                {timelineData}
              </ul>
            </div>
          </div>
          </div>
        </div>
      </section>
		</>
	);
};

export default Timeline;
