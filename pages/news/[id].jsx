import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Head from "next/head";
import Footer from "../components/Footer";
import Homeslider from "../components/Homeslider";
import Top from "../components/Top";
import Recentnews from "./Recentnews";
import Relatednews from "./Reletednews";

export const getStaticPaths = async () => {
  const res = await fetch("http://autosapi.ifadgroup.com:8001/content-module/17");
  const data = await res.json();
  const paths = data.map((rony) => {
    return {
      params: { id: rony.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  return {
    props: { rony: data },
  };
}
const Detail = ({ rony }) => {
  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>{rony.title}</title>
          <meta name="description" content="Ifad Autos Tesimonial" />
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Top />
        <Homeslider />
        <main className="container">
          <div className="row my-5">
            <h1 className="brandColor fw-bold text-center">News & Events</h1>
          </div>
          <div className="row my-5">
            <div className="col-sm-8">
              <h1>{rony.title}</h1>
              <div className="col-sm-12 position-relative">
                <Image
                  className="position-relative"
                  layout="fill"
                  objectFit="contain"
                  src={rony.image}
                  alt=""
                />
              </div>
              <p className="my-3">{rony.description}</p>
            </div>
            <div className="col-sm-4">
              <div>
                <Recentnews />
              </div>
            </div>
          </div>
          <h4 className="brandColor fw-bold">Related Articles</h4>
        </main>
      </div>
      <Relatednews />
      <Footer />
    </>
  );
};
export default Detail;
