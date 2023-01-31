import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState  } from "react";
import { useRouter } from "next/router";
import Logo from "../../public/logo/logo.png";
import call from "../../public/social/call.png";
import BeatLoader from "react-spinners/BeatLoader";
import slugify from 'react-slugify';


const Top = () => {

  const loaderProp =({ src }) => {
    return src;
  }   

  const router = useRouter()
  const { category } = router.query;
  const [SearchKey, setSearchKey] = useState('');
  const handleSubmit = event => {
    event.preventDefault();
    //setSearchKey('');
    router.push(`/search?keyword=${SearchKey}`);
  };
  
  const menu = {
    About: [
      {
        id: "1",
        name: "Who we are",
        slug: "/Whoweare",
      },
      {
        id: "7",
        name: "Management",
        slug: "/Management",
      },
    ],
  };

  const [PrdCatagory, setPrdCatagory] = useState([]);

  
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/categories")
    .then((res) => res.json())
    .then((data) => setPrdCatagory(data));
  }, []);
  const CatagoryList = PrdCatagory[0]?.product_category_list.map((ctx,idx)=>{
    return (
      <li className="nav-item" key={idx}>
        <Link  className={router.query.category === slugify(ctx.name)?"nav-link nav-link-top activeItem": "nav-link nav-link-top"} href={`/vehicles?category=${slugify(ctx.name)}`}>{ctx.name}</Link>
      </li>
    )
  })
  

  return (
    <div id="Top" className="row align-items-center pb-sm-0 pb-5">
      <div className="col-md-2 col-sm-12">
        <Link href="/">
          <Image className="img-fluid s220" src={Logo} alt="Logo" loader={loaderProp}/>
        </Link>
        <div className="position-relative d-sm-none d-block">
          <div className="call">
            <Image width={100} height={40} src={call} alt="Call" loader={loaderProp}/>
          </div>
        </div>
      </div>
      <div className="w-100 d-sm-none d-block"></div>
      <div className="col-md-8 col-sm-12">
        <nav className="navbar navbar-expand-lg">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <div className="row">
                <div className="col-sm-12">
                  <ul className="navbar-nav d-flex justify-content-center">
                  <li className="nav-item">
                    <Link className={router.pathname == "/" ? "nav-link nav-link-top activeItem" : " nav-link nav-link-top"}  href="/">Home</Link>
                  </li>
                    <li className="nav-item dropdown">
                      <a
                        // className="nav-link dropdown-toggle"
                        className={router.pathname == "/Whoweare" || router.pathname == "/Management" ? "nav-link dropdown-toggle activeItem" : " nav-link dropdown-toggle"}
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        About
                      </a>
                      <ul className="dropdown-menu">
                        {menu.About.map((item) => {
                          return (
                            <li key={item.id}>
                              <Link className="dropdown-item" href={item.slug}>
                                {item.name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link nav-link-top"
                        href="/#touchpoint"
                        id="TouchPoint"
                      >
                        Touch Point
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className={router.pathname == "/Investor" ? "nav-link nav-link-top activeItem" : " nav-link nav-link-top"} href="/Investor">
                        Investor Information
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className={router.pathname == "/Contact" ? "nav-link nav-link-top activeItem" : " nav-link nav-link-top"} href="/Contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12">
                  <ul className="navbar-nav d-flex justify-content-center fs-4">
                    {CatagoryList ? CatagoryList : <div className='text-center'><BeatLoader color="#FA3" /></div>}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="w-100 d-sm-none d-block"></div>
      <div className="col-md-2 col-sm-12">
        <div className="position-relative">
          <form onSubmit={handleSubmit}>
            <div className="searchBoxc">
              <input
                className="searchInputc"
                type="text"
                value={SearchKey}
                onChange={event => setSearchKey(event.target.value)}
                autoComplete="off"
                placeholder="Search"
              />
              <button className="searchButtonc" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="position-relative d-sm-block d-none">
          <div className="call">
            <Image width={110} height={45} src={call} alt="Call" loader={loaderProp}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
