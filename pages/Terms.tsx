import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Top from "./components/Top";
import Homeslider from "./components/Homeslider";
import Footer from "./components/Footer";
const Terms = () => {
  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>Values</title>
          <meta name="description" content="All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Top />
        <Homeslider />
      </div>
      <div className="container">
        <h1 className="brandColor text-center my-5 fw-bold">Terms of use</h1>
        <p className="mb-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam
          ipsa ratione laborum ipsum. Aperiam possimus numquam vitae, officiis
          dicta aliquam aliquid animi commodi consectetur recusandae mollitia
          earum, natus dolorum nostrum necessitatibus. Est omnis hic veritatis
          temporibus, quia ab ratione quae laudantium, ullam voluptates
          repellendus vitae distinctio unde, enim nemo eaque necessitatibus
          reiciendis dicta aliquam eveniet dolores sed nisi? Illum, enim
          sapiente qui consequatur reprehenderit facilis voluptates mollitia
          tempora et sequi tempore fugit, magni quibusdam, earum ea non
          consequuntur dolore impedit repellat? Quis animi est cumque, id
          placeat dicta eum eaque vero fugiat voluptatem tenetur molestiae, ut
          ea temporibus modi similique!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
