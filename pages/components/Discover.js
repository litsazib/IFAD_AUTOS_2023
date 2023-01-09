import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import "bootstrap/dist/css/bootstrap.css";
import Link from "next/link";
import BeatLoader from "react-spinners/BeatLoader";
import background from "../../public/backgrounds/background.png";
import slugify from 'react-slugify';


export default function Discover() {
	const perSlide = 10;
  const [PrdCatagory, setPrdCatagory] = useState([]);
  const [Products, setProducts] = useState([]);
  const [FilterProduct,setFilterProduct] = useState([])

  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/categories")
      .then((res) => res.json())
      .then((data) => setPrdCatagory(data));
  }, []);
  
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(()=>{
    if(PrdCatagory[0]?.product_category_list && Products.length) {
      const initialCategoryName = PrdCatagory[0]?.product_category_list[0].name;
      const initialCategory = Products.filter((product)=>product.category.name === initialCategoryName)
      setFilterProduct(initialCategory)
    }
  },[PrdCatagory, Products])

  const filterItem = (filterItem)=>{
    const result = Products.filter((curData)=>{
      return curData.category.name === filterItem
    })
    setFilterProduct(result);	
  }

  const CatagoryList = PrdCatagory[0]?.product_category_list.map((ctx,idx)=>{
    return (
        <li className="nav-item" role="presentation" key={idx}>
        <button
          onClick={() => filterItem(ctx.name)}
          className={`nav-link${idx+1 === parseInt(1)?" active":""}`}
          id={`tabBtn${idx+1}`}
          data-bs-toggle="pill"
          data-bs-target={`#tabSwitch${idx+1}`}
          role="tab"
          aria-controls={`tabSwitch${idx+1}`}
          aria-selected="true"
        >
          {ctx.name}
        </button>
      </li>
    )
  })

  const ProductList = FilterProduct.slice(0, perSlide).map((ctx,idx)=>{
    
    return (
      <SwiperSlide key={idx}>
      <div className="col mt-2">
        <div className="h-100">
          <img className="img-fluid mb-3 h247" src={ctx.Product_image} alt="" />
          <h5 className="text-center">{ctx.name}</h5>
          <p className="text-center fs-6 py-0">{ctx.detail}</p>
          <div className="d-flex justify-content-center">
          <Link
            type="button"
            className="btn btn-outline-warning px-4"
            href={`/vehicles/${slugify(ctx.product_name)}`}
          >
            Explore
          </Link>
          </div>
        </div>
      </div>
      </SwiperSlide>
    )
  })




  return (
    <>    
    <div className="row py-5"
      style={{
        backgroundImage: `url(${background.src})`,
        backgroundRepeat: "no-repeat",
      }}
    >
    <h1 className="brandColor text-center fw-bold">Discover The Range</h1>
      <div className="d-flex justify-content-center mt-3">
        <ul className="nav nav-pills mb-3 text-center" id="pills-tab" role="tablist">
        {CatagoryList}
        </ul>
      </div>
      <div className="tab-content p-0" id="pills-tabContent">
        {
          PrdCatagory[0]?.product_category_list.map((ctx,idx)=>{
            return (
              <div className={`tab-pane fade ${idx+1 === parseInt(1)?" show active":""}`} id={`tabSwitch${idx+1}`} role="tabpanel" aria-labelledby={`tab${idx+1}`}>
                <div className="swiper">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={100}
                    slidesPerView={1}
                    pagination={true}
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
                    {ProductList?ProductList:<BeatLoader color="#FA3" />}
                  </Swiper>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    </>
  );
}
