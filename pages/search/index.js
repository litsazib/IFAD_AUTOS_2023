import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import $ from 'jquery';
import Link from "next/link";
import { withRouter } from "next/router";
import slugify from 'react-slugify';

import Top from "../components/Top";
import Banner from "../components/Banner";
import Sidemenu from '../components/Sidemenu';
import Footer from "../components/Footer";


const index = withRouter((props) => {
	const { keyword } = props.router.query;
	const [SearchResult, setSearchResult] = useState([]);

	useEffect(() => {
		fetch(`http://implapi.ifadgroup.com:8001/location-search/${keyword}`)
			.then((res) => res.json())
			.then((data) => {
				setSearchResult(data);
			})
			.catch((error) => {
			});
  }, [keyword]);

	console.log(typeof SearchResult)
	console.log(SearchResult)

	const searchResult = SearchResult.map((product,index)=>{
		return (
		<div className="col" key={product.id}>
			<div className="card h-100 cardBorder">
				<img
					className="card-img-top img-fluid prdStyle"
					src={product.Product_image}
					alt="vehicle"
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
								{searchResult}
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
