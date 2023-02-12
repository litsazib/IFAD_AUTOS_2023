import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import $ from 'jquery';
import Link from "next/link";
import { withRouter } from 'next/router';
import slugify from 'react-slugify';
import Image from "next/image";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Homeslider from "../components/Homeslider";
import Sidemenu from '../components/Sidemenu';
import Top from "../components/Top";
import Head from "next/head";

const Allvehicle = withRouter((props) => {
  const loaderProp =({ src }) => {
    return src;
  }   
  const productPerLoad = 100;
  const [Product, setProduct] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [error, setError] = useState(null);

  const { category } = props.router.query;

 // Fetching vehicles data
  useEffect(() => {
    fetch('http://autosapi.ifadgroup.com:8001/products')
      .then((res) => res.json())
      .then((data) => {
        if (data.length) setProduct(data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  if (!Product) {
    return null;
  }

  // Filtering vehicles
  useEffect(() => {
    const filterItem = Product.filter((vehicle) => {
      if (category) {
        return slugify(vehicle?.category.name) === category;
      }
      return Product;
    });
    setFilteredVehicles(filterItem);
  }, [Product, category]);



  // Load More Vehicles upon user click
  useEffect(() => {
    if (filteredVehicles.length) {
      $(document).ready(function () {
        $('.content').slice(0, productPerLoad).show();
        $(window).on('scroll', function (e) {
          e.preventDefault();
          const endOfPage =
            window.innerHeight + window.pageYOffset >=
            document.body.offsetHeight;
          if (endOfPage) {
            $('.content:hidden').slice(0, productPerLoad).slideDown();
          }
        });
        // let loadMoreBtn  = document.getElementById('loadMore')
        // loadMoreBtn.addEventListener("click", function() {
        //   const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
        //   if (endOfPage) {
        //     $('.content:hidden').slice(0, productPerLoad).slideDown();
        //     if($(".content:hidden").length == 0) {
        //       $("#loadMore").css('display','none')
        //     }
        //   }
        // });
      });
    }
  }, [filteredVehicles]);

  return (
    <>
      <Head>
        <title>Product | IFAD Autos Ltd</title>
      </Head>
      <div className="container-fluid nomp">
        <Top />
        <Banner title="Our Products"/>
        {/* <h1 className="sectionTitle text-center mt-5 mb-5">Our vehicles</h1> */}
      </div>
      <div className="container">
        <main>
          <div className="row my-5">
            <div className="col-sm-3">
              <Sidemenu />
            </div>
            <div className="col-sm-9">
              <div className="row row-cols-1 row-cols-sm-3 g-4">
              {filteredVehicles.map((product, index) => {
                  return (
                    <div className="col content" key={product.id}>
                      <div className="card cardBorder">
                        <Image className="card-img-top img-fluid prdStyle" src={product.Product_image}
                          alt={product.product_name}
                          width={305}
                          height={170}
                          loader={loaderProp}
                        />
                        <div className="card-body">
                          <h5 className="text-center">
                            {product.product_name}
                          </h5>
                          {!product.product_short_desc == ""?
                          <p className="text-center fs-6 py-2">{product.product_short_desc}</p>
                          :(<p className="text-center fs-6 py-2">&nbsp;</p>)
                          }
                          <div className="d-flex justify-content-center align-items-end">
                            <Link
                              type="button"
                              className="btn btn-outline-warning px-4"
                              href={`vehicles/${slugify(product.product_name)}`}
                            >
                              Explore
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              {/* <div className="loadMore">
                <button id="loadMore">Load More</button>
              </div> */}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
});
export default Allvehicle;
