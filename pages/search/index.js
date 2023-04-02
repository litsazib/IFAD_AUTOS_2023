import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import $ from 'jquery';
import Link from "next/link";
import { withRouter } from "next/router";
import slugify from 'react-slugify';
import BeatLoader from "react-spinners/BeatLoader";
import Image from "next/image";

import Top from "../components/Top";
import Banner from "../components/Banner";
import Sidemenu from '../components/Sidemenu';
import Footer from "../components/Footer";
import Head from "next/head";


const index = withRouter((props) => {

	const loaderProp =({ src }) => {
    return src;
  }   

	const { keyword } = props.router.query;
	const [SearchResult, setSearchResult] = useState([]);

	useEffect(() => {
		fetch(`https://autosapi.ifadgroup.com/products`)
			.then((res) => res.json())
			.then((data) => {
				setSearchResult(data);
			})
			.catch((error) => {
			});
  }, [keyword]);

	var SerchFilter = SearchResult.filter((prd)=>{
		return prd.product_name.toLowerCase() === keyword.toLowerCase() || prd.category.name.toLowerCase() === keyword.toLowerCase() || prd.product_short_desc === keyword.toLowerCase()
	})

	const searchResult = SerchFilter.map((product,index)=>{
		return (
		<div className="col" key={product.id}>
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
					<p className="text-center fs-6 py-2">
						{product.product_short_desc}
					</p>
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
		)
	})


	return (
		<>
		<Head>
			<title>Search | IFAD Autos Ltd</title>
		</Head>
		<div className="container-fluid nomp">
        <Top />
        <Banner title=""/>
      </div>
      <div className="container">
        <main>
          <div className="row my-5">
            <div className="col-sm-3">
						<Sidemenu />
            </div>
            <div className="col-sm-9">
              <div className="row row-cols-1 row-cols-sm-3 g-4">
								{searchResult.length > 0 ? searchResult :"Not Found"}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
		</>
	);
});

export default index;
