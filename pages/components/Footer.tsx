import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import footerLogo from "../../public/logo/footerLogo.png";
import call from "../../public/social/call.png";

const Footer = () => {
  const footerNav = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "ABOUT US", link: "/Mission" },
    { id: 3, name: "PRODUCT", link: "/Allvehicle" },
    { id: 4, name: "TOUCHPOINT", link: "/Touchpoint" },
    // { id: 5, name: "TESTIMONIAL", link: "/Testimonials" },
    { id: 6, name: "INVESTOR INFORMATION", link: "/Investor" },
    // { id: 7, name: "NEWS & EVENTS", link: "/news/1" },
    { id: 8, name: "CAREERS", link: "https://ifadgroup.com/career" },
    { id: 9, name: "CONTACT", link: "/Contact" },
  ];
  const menu = [
    { id: 10, name: "TERM OF USE", link: "/Terms" },
    { id: 11, name: "DESCLAIMER", link: "Desclaimer" },
    { id: 12, name: "PRIVACY POLICY", link: "/Privacypolicy" },
    // { id: 13, name: "SITEMAP", link: "/Sitemap" },
  ];
  const Scrollspy = {
    bottom: "20px",
    right: "20px",
  };
  const socialIcon = [
    {
      id: "1",
      icon: 'facebook',
      link: 'https://facebook.com'
    },
    {
      id: "1",
      icon: 'instagram',
      link: 'https://instagram.com'
    },
    {
      id: "1",
      icon: 'linkedin',
      link: 'https://linkedin.com'
    },
    {
      id: "1",
      icon: 'youtube',
      link: 'https://youtube.com'
    }
  ]
 
  //Bootstrap js
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#333333" }}>
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
                          {footerNav.map((nav: any) => {
                            return (
                              <li key={nav.id} className="nav-item">
                                <Link
                                  className="nav-link-ifad"
                                  aria-current="page"
                                  href={nav.link}
                                >
                                  {nav.name}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </nav>
                  <div className="position-absolute" style={Scrollspy}>
                  </div>
                </div>
              </div>
              <div className="row py-3">
                <div className="col-sm-2">
                  <Image className="img-fluid" src={footerLogo} alt="logo" />
                </div>
                <div className="col-sm-8 d-flex justify-content-center">
                  <nav className="navbar navbar-expand-lg">
                    <ul className="navbar-nav">
                      {menu.map((nav: any) => {
                        return (
                          <li key={nav.id} className="nav-item">
                            <Link
                              className="nav-link-ifad"
                              aria-current="page"
                              href={nav.link}
                            >
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
                    {socialIcon.map(item=>{
                      return(              
                      <Link key={item.id} style={{color:"#F68422"}} href={item.link}><i className={`ms-2 bi bi-${item.icon}`}></i></Link>                        
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#151515" }}>
        <div className="container">
          <div className="row py-3 text-center text-white">
            <div className="col-sm-12">
              <i className="bi bi-c-circle"></i> 2022 IFAD AUTOS. All Rights
              Reserved | Developed by API
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
