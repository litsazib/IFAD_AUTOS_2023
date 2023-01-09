import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Strength() {
  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/3")
      .then((res) => res.json())
      .then((data) => setDocument(data));
  }, []);

  const moduleName = document.map((item) => {
    return (
      <div className="row" key={item.id}>
        <h1 className="brandColor text-center fw-bold mb-5">
          {item.module_name}
        </h1>
        <div className="row row-cols-1 row-cols-sm-3 pe-0">
          {item.content_item.map((st) => {
            return (
              <div className="col mb-sm-0 mb-4" key={st.id}>
                <div className="h-100 shadow py-4 mb-5 bg-body rounded d-flex justify-content-center flex-wrap">
                  <div className="col-12 d-flex justify-content-center">
                    <Image
                      className="mx-3"
                      src={st.item_image}
                      alt="icon"
                      width={60}
                      height={60}
                      style={{ backgroundColor: "#f6821f" }}
                    />
                  </div>
                  <div className="col-12 d-flex justify-content-center">
                    <h1>{st.item_name}</h1>
                  </div>
                  <p>{st.item_long_desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  });

  const bg = {
    width: "100%",
    height: "500px",
    transform: "skew(54deg, -10deg)",
    background: "#f6821f",
    zIndex: "-99",
    top: "240px",
  };
  // ForAnimation
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  // Animation end
  return (
    <div className="row my-5 position-relative overflow-hidden pb-5">
      <div className="position-absolute" style={bg}></div>
      <motion.div
        className="box"
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        {moduleName}
      </motion.div>
    </div>
  );
}
