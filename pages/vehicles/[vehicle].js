import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from '../components/Footer';
import Top from '../components/Top';
import Head from 'next/head';
import BeatLoader from "react-spinners/BeatLoader";
import slugify from 'react-slugify';
import swal from 'sweetalert';
import {isPdfFile} from '../../utils/common.js'
import Image from "next/image";

const Vehicle = () => {

  const loaderProp =({ src }) => {
    return src;
  }  

  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState(null);

  const router = useRouter();
  const { vehicle } = router.query;

  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/products")
    .then((res) => res.json())
    .then((data) => setVehicles(data))
    .catch((error)=>{
      setError(error)
    })
  }, []);

  const targetedVehicle = vehicles?.find(
    (item) => slugify(item.product_name) === vehicle
  );

  const lifeStyleSlider = targetedVehicle?.product_lifesytle_images.map((item,idx)=>{
    return (
      <Swiper key={idx}
      modules={[Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
    >
      <SwiperSlide key={idx}>
        <Image className="img-fluid mb-3" src={item}
          alt="prdouct-banner"
          width={1920}
          height={200}
          loader={loaderProp}
        />
      </SwiperSlide>
    </Swiper>
    )
  })

  const productSlideImg = targetedVehicle?.product_multi_images.map((item,idx)=>{
    return (
      <Image src={item}
        alt="Product"
        width={640}
        height={640}
        style={{objectFit:"contain"}}
        key={idx}
        loader={loaderProp}
      />
    )
  })

  
  let vrochurUrl = isPdfFile(targetedVehicle?.proudct_brochure)

  

  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>{targetedVehicle?.product_name}</title>
          <meta name={targetedVehicle?.product_name} content={targetedVehicle?.product_short_desc} />
        </Head>
        <Top />
        <div className="row">
          <div className="swiper">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              pagination={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}
            >
              {lifeStyleSlider ? lifeStyleSlider :<div className='text-center'><BeatLoader color="#FA3" /></div>}
            </Swiper>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row my-5">
          <div className="col-sm-6" style={{posation:"relative"}}>
            {
              productSlideImg?.length > 0 ? (
              <Carousel>
                {productSlideImg ? productSlideImg : <div className='text-center'><BeatLoader color="#FA3" /></div> }
              </Carousel>
              )
              :(
              <Image src={targetedVehicle?.Product_image} alt="Product" width={350} height={320} loader={loaderProp} />
              )
            }

          </div>
          <div className="col-sm-6">
            <div className="row mb-4">
              <div className="col-sm-4 col-6 me-sm-3">
                <div className="row">
                {vrochurUrl === true ?                   
                  <a
                    href={`${targetedVehicle?.proudct_brochure}`}
                    className="btn btn-outline-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Product Brochure
                  </a>
                  :
                  <a
                  href={vrochurUrl}
                  className="btn btn-outline-danger"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>  
                    swal('Oops!', 'invalid file extension')
                  }
                >
                  Product Brochure
                </a>
                }
                  {/* <a
                    href={`${targetedVehicle?.proudct_brochure}`}
                    className="btn btn-outline-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Product Brochure
                  </a> */}
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div className="row">
                <a
                    href={`../Contact?inquery=${targetedVehicle?.id}`}
                    className="btn btn-outline-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sales Inquiry
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    Overview
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <h2 className="fw-bold fs-1">
                    {targetedVehicle?.product_name}
                  </h2>
                  <p className="fw-light">
                    Category: {targetedVehicle?.category?.name}
                  </p>
                  <p className="fw-normal">
                    {targetedVehicle?.product_short_desc}
                  </p>
                  <p className="fw-normal" dangerouslySetInnerHTML={{ __html: targetedVehicle?.product_long_desc }}></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Vehicle;
