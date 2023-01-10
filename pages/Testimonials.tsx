import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Footer from "./components/Footer";
import Homeslider from "./components/Homeslider";
import Top from "./components/Top";

const Testimonials = () => {
  const testi = [
    {
      id: "1",
      name: "client 1",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a, nobis placeat vel qui ut quod maxime officia doloribus aspernatur sed eaque id debitis harum. Reiciendis odit culpa assumenda voluptatem!",
      photo: "face1.webp",
      fb: "https://facebook.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      id: "2",
      name: "client 2",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a, nobis placeat vel qui ut quod maxime officia doloribus aspernatur sed eaque id debitis harum. Reiciendis odit culpa assumenda voluptatem!",
      photo: "face2.webp",
      fb: "https://facebook.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      id: "3",
      name: "client 3",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a, nobis placeat vel qui ut quod maxime officia doloribus aspernatur sed eaque id debitis harum. Reiciendis odit culpa assumenda voluptatem!",
      photo: "face3.webp",
      fb: "https://facebook.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      id: "4",
      name: "client 4",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a, nobis placeat vel qui ut quod maxime officia doloribus aspernatur sed eaque id debitis harum. Reiciendis odit culpa assumenda voluptatem!",
      photo: "face4.webp",
      fb: "https://facebook.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      id: "5",
      name: "client 5",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a, nobis placeat vel qui ut quod maxime officia doloribus aspernatur sed eaque id debitis harum. Reiciendis odit culpa assumenda voluptatem!",
      photo: "face1.webp",
      fb: "https://facebook.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
    {
      id: "6",
      name: "client 6",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a, nobis placeat vel qui ut quod maxime officia doloribus aspernatur sed eaque id debitis harum. Reiciendis odit culpa assumenda voluptatem!",
      photo: "face2.webp",
      fb: "https://facebook.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
    },
  ];
  const avatar = {
    borderRadius: "50%",
    overflow: "hidden",
    width: "100px",
    height: "100px",
    zIndex: "333",
  };
  const avatarText = {
    zIndex: "333",
  };
  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>Testimonial</title>
          <meta name="description" content="Ifad Autos Tesimonial" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Top />
        {/* <Nav /> */}
        <Homeslider />
        <main className="container">
          <div className="row mt-5">
            <h1 className="text-center brandColor">TESTIMONIALS</h1>
            <div className="col-sm-6 offset-sm-3 mb-4">
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                doloribus incidunt perferendis vero. Consequuntur unde accusamus
                numquam exercitationem
              </p>
            </div>
            {testi.map((st) => {
              return (
                <div key={st.id} className="col-sm-4">
                  <div className="shadow mb-5 bg-body rounded position-relative overflow-hidden pb-5">
                    <h1 className="display-1">
                      <i className="bi bi-quote"></i>
                    </h1>
                    <p className="text-center px-4">{st.detail}</p>
                    <div className="row d-flex justify-content-center">
                      <div className="position-relative" style={avatar}>
                        <Image
                          src={`/testimonial/${st.photo}`}
                          alt="photo"
                          objectFit="cover"
                          layout="fill"
                        />
                      </div>

                      <h6
                        style={avatarText}
                        className="text-center mt-2 text-white"
                      >
                        {st.name}
                      </h6>
                      <div
                        className="col-6 d-flex justify-content-evenly text-white"
                        style={avatarText}
                      >
                        <Link href={st.fb}>
                          <i className="bi bi-facebook text-white"></i>
                        </Link>
                        <Link href={st.linkedin}>
                          <i className="bi bi-twitter text-white"></i>
                        </Link>
                        <Link href={st.instagram}>
                          <i className="bi bi-instagram text-white"></i>
                        </Link>
                      </div>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        width: "100%",
                        bottom: 0,
                        left: 0,
                        zIndex: 0,
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1440 820"
                      >
                        <path
                          fill="#f6821f"
                          fill-opacity="1"
                          d="M0,256L48,234.7C96,213,192,171,288,154.7C384,139,480,149,576,176C672,203,768,245,864,234.7C960,224,1056,160,1152,154.7C1248,149,1344,203,1392,229.3L1440,256L1440,820L1392,820C1344,820,1248,820,1152,820C1056,820,960,820,864,820C768,820,672,820,576,820C480,820,384,820,288,820C192,820,96,820,48,820L0,820Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
