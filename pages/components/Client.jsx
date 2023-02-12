import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Image from "next/image";
import Link from 'next/link'
import ReactPlayer from "react-player";


export default function Client() {
  
  const loaderProp =({ src }) => {
    return src;
  }   

  const [ModalContent,setModalContent] = useState() || [];
  const [ModalToggle,setModalToggle] = useState(false)

  const [document, setDocument] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/content-module/4")
      .then((res) => res.json())
      .then((data) => setDocument(data));
  }, []);

  console.log(ModalContent)
  console.log(ModalToggle)

  // const modalView = ModalContent?.map((element,idx)=>{
  //   if(element.item_video_link == "") {
  //     return (
  //       <Image className="img-fluid mb-3" 
  //       src={ModalContent?.item_image} alt="car" 
  //       width={800} height={800}
  //       loader={loaderProp}
  //     />
  //     )
  //   }else {
  //     return (
  //       <iframe width="800" height="550"
  //       src="https://www.youtube.com/embed/tgbNymZ7vqY">
  //       </iframe>
  //     )
  //   }
  // })

  



const viewMdl = ()=>{
  if(ModalContent?.item_video_link == "") {
    return (
      <Image className="img-fluid mb-3" 
        src={ModalContent?.item_image} alt="car" 
        width={800} height={800}
        loader={loaderProp}
      />
    )
  }else {
    return (
    <iframe width="800" height="550"
      src="https://www.youtube.com/embed/tgbNymZ7vqY">
      </iframe>
    )
  }
}






  const hendelModal = (modalData)=>{
    setModalContent(modalData)
    setModalToggle(!ModalToggle)
  }

  const moduleName = document.map((item) => {

    return (
      <div className="m-0" key={item.id}>
        <div
          className="row bgcover"
          style={{ backgroundImage: `url(${item.module_image})` }}
        >
          <h1 className="titleOrange text-center mt-5 mb-5 fw-bold">
            {item.module_name}
          </h1>
          <div className="swiper">
            <Swiper
              modules={[Navigation]}
              spaceBetween={100}
              slidesPerView={1}
              pagination={true}
              height={500}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1920: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {item.content_item.map((ron) => {
                return (
                  <SwiperSlide key={ron.id}>
                    <div className="col mt-2">
                      <div className="d-flex justify-content-center align-items-center position-relative mb-5">
                        {ron.item_video_link == null ? (
                          <div className="modalCard">
                            <Image onClick={()=>hendelModal(ron)} className="img-fluid mb-3" src={ron.item_image} alt="car" width={500} height={500}loader={loaderProp}/>
                          </div>
                        ) : (
                          <ReactPlayer url={ron.item_video_link} />
                        )}
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className={ModalToggle === true ? "modalBox active" : "modalBox"} onClick={()=>(setModalToggle(false))}>
            <div className="modalWrap">
              <button onClick={()=>(setModalToggle(false))} className="closeBnt">&#10006;</button>
              <Image className="modalImg" 
                src={ModalContent?.item_image} alt="car" 
                width={800} height={750}
                loader={loaderProp}
              />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{moduleName}</>;
}
