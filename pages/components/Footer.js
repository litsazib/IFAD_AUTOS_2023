import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import footerLogo from '../../public/logo/footerLogo.png';
import call from "../../public/social/call.png";

const Footer = () => {
  const loaderProp =({ src }) => {
    return src;
  }   
	const d = new Date();
	let year = d.getFullYear();
	const [social, setSocial] = useState([]);
	useEffect(() => {
		fetch('https://autosapi.ifadgroup.com/content-module/16')
			.then((res) => res.json())
			.then((data) => setSocial(data));
	}, []);

	const footerNav = [
		{ id: 1, name: 'HOME', link: '/' },
		{ id: 2, name: 'WHO WE ARE', link: '/Whoweare' },
		{ id: 3, name: 'PRODUCTS', link: '/vehicles' },
		{ id: 6, name: 'INVESTOR INFORMATION', link: '/Investor' },
		{ id: 7, name: 'NEWS & EVENTS', link: '/news/51' },
		{ id: 8, name: 'CAREERS', link: 'https://ifadgroup.com/career', target: '_blank' },
		{ id: 9, name: 'CONTACT', link: '/Contact' }
	];
	const menu = [
		{ id: 10, name: 'TERMS OF USE', link: '/Terms' },
		{ id: 11, name: 'DISCLAIMER', link: 'Desclaimer' },
		{ id: 12, name: 'PRIVACY POLICY', link: '/Privacypolicy' },
		// { id: 13, name: "SITEMAP", link: "/Sitemap" },
	];
	const Scrollspy = {
		bottom: '20px',
		right: '20px',
	};
	const socialIcon = [
		{
			id: '1',
			icon: 'facebook',
			link: 'https://facebook.com',
			target: '_blank',
		},
		{
			id: '1',
			icon: 'instagram',
			link: 'https://instagram.com',
			target: '_blank',
		},
		{
			id: '1',
			icon: 'linkedin',
			link: 'https://linkedin.com',
			target: '_blank',
		},
		{
			id: '1',
			icon: 'youtube',
			link: 'https://youtube.com',
			target: '_blank',
		},
	];

	//Bootstrap js
	useEffect(() => {
		require('bootstrap/dist/js/bootstrap.bundle.min.js');
	}, []);
	return (
		<>
			<div className="container-fluid" style={{ backgroundColor: '#333333' }}>
				<div className="container">
					<div className="row">
						<div className="swiper">
							<div className="row position-relative">
								<div className="col-sm-12 d-flex justify-content-center py-4 border-bottom">
									<nav className="navbar navbar-expand-lg">
										<div className="container-fluid">
											<button
												className="navbar-toggler"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#navbarNav"
												aria-controls="navbarNav"
												aria-expanded="false"
												aria-label="Toggle navigation"
											>
												<span className="navbar-toggler-icon col-icon"></span>
											</button>
											<div className="collapse navbar-collapse footer-bg-opacity " id="navbarNav">
												<ul className="navbar-nav text-sm-center bg-phn">
													{footerNav.map((nav) => {
														return (
															<li key={nav.id} className="nav-item">
																<a className="nav-link-ifad" activeClassName="active" aria-current="page" target={nav.target} href={nav.link} rel="noreferrer">
																	{nav.name}
																</a>
															</li>
														);
													})}
												</ul>
											</div>
										</div>
									</nav>
								</div>
							</div>
							<div className="row py-3">
								<div className="col-sm-3">
									<a href="https://ifadgroup.com/" rel="noreferrer" target="_blank">
									<Image className="img-fluid footer-logo" src={footerLogo} alt="logo" loader={loaderProp}/>
									</a>
								</div>
								<div className="col-sm-6 d-flex justify-content-center">
									<nav className="navbar navbar-expand-lg text-center">
										<ul className="navbar-nav">
											{menu.map((nav) => {
												return (
													<li key={nav.id} className="nav-item  footer-manu-item">
														<Link className="nav-link-ifad" aria-current="page" href={nav.link}>
															{nav.name}
														</Link>
													</li>
												);
											})}
										</ul>
									</nav>
								</div>
								<div className="col-sm-3">
									<div className="d-flex flex-row justify-content-end fs-4 text-white footer-social-icon">
										{social.map((ron) => {
											return (
												<div key={ron.id}>
													{ron.content_item.map((item) => {
														return (
															<a rel="noreferrer" key={item.id} style={{ color: '#F68422' }} href={item.item_link} target="_blank">
																<i className={`ms-2 bi bi-${item.item_name}`}></i>
															</a>
														);
													})}
												</div>
											);
										})}
										<div className="call-to-action">
											<Image width={110} height={45} src={call} alt="Call" loader={loaderProp}/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h3 className="font-noto m-0 bg-dark py-4 font-14 text-center text-light font-calibri">
				© {year} IFAD Autos Ltd.  All Rights Reserved | Developed by{' '}
				<a target="_blank" rel="noreferrer" href="http://api.net.bd">
					<Image className="img-fluid" width={35} height={0} src={'/API-logo.png'} alt="company-logo" loader={loaderProp}/>
				</a>
			</h3>
		</>
	);
};

export default Footer;
