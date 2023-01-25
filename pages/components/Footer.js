import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import footerLogo from '../../public/logo/footerLogo.png';

const Footer = () => {
  const loaderProp =({ src }) => {
    return src;
  }   
	const d = new Date();
	let year = d.getFullYear();
	const [social, setSocial] = useState([]);
	useEffect(() => {
		fetch('http://autosapi.ifadgroup.com:8001/content-module/16')
			.then((res) => res.json())
			.then((data) => setSocial(data));
	}, []);

	const footerNav = [
		{ id: 1, name: 'HOME', link: '/' },
		{ id: 2, name: 'WHO WE ARE', link: '/Whoweare' },
		{ id: 3, name: 'PRODUCTS', link: '/vehicles' },
		// { id: 4, name: "TOUCHPOINT", link: "/#Touchpoint" },
		{ id: 6, name: 'INVESTOR INFORMATION', link: '/Investor' },
		{ id: 7, name: 'NEWS & EVENTS', link: '/news' },
		{ id: 8, name: 'CAREERS', link: 'https://ifadgroup.com/career', target: '_blank' },
		{ id: 9, name: 'CONTACT', link: '/Contact' },
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
												<span className="navbar-toggler-icon"></span>
											</button>
											<div className="collapse navbar-collapse" id="navbarNav">
												<ul className="navbar-nav">
													{footerNav.map((nav) => {
														return (
															<li key={nav.id} className="nav-item">
																<a className="nav-link-ifad" aria-current="page" target={nav.target} href={nav.link}>
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
								<div className="col-sm-2">
									<Image className="img-fluid" src={footerLogo} alt="logo" loader={loaderProp}/>
								</div>
								<div className="col-sm-8 d-flex justify-content-center">
									<nav className="navbar navbar-expand-lg">
										<ul className="navbar-nav">
											{menu.map((nav) => {
												return (
													<li key={nav.id} className="nav-item">
														<Link className="nav-link-ifad" aria-current="page" href={nav.link}>
															{nav.name}
														</Link>
													</li>
												);
											})}
										</ul>
									</nav>
								</div>
								<div className="col-sm-2">
									<div className="d-flex flex-row justify-content-end fs-4 text-white">
										{social.map((ron) => {
											return (
												<div key={ron.id}>
													{ron.content_item.map((item) => {
														return (
															<a key={item.id} style={{ color: '#F68422' }} href={item.item_link} target="_blank">
																<i className={`ms-2 bi bi-${item.item_name}`}></i>
															</a>
														);
													})}
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<h3 className="font-noto m-0 bg-dark py-4 font-14 text-center text-light font-calibri">
				© {year} IFAD Autos. All Rights Reserved | Developed by{' '}
				<a target="_blank" href="http://api.net.bd">
					<Image className="img-fluid" width={35} height={0} src={'API-logo.png'} alt="company-logo" loader={loaderProp}/>
				</a>
			</h3>
		</>
	);
};

export default Footer;
