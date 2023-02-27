import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Top from "./components/Top";
import Homeslider from "./components/Homeslider";
import Footer from "./components/Footer";
import Link from "next/link";
const Investor = () => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/documents")
      .then((res) => res.json())
      .then((data) => setDocs(data));
  }, []);


  const documentButton = docs.map((item, index) => {
    console.log(item.document_category.category_name)
    return (
      <button
        className={`nav-link text-start ${index == 0 ? "active" : ""}`}
        id={item.document_category.id}
        data-bs-toggle="pill"
        data-bs-target={`#tags-basic_${item.document_category.id}`}
        type="button"
        role="tab"
        aria-controls="v-pills-home"
        aria-selected="true"
        key={index}
      >
        {item.document_category.category_name} <i className="bi bi-arrow-right-short"></i>
      </button>
    );
  });

  const document = docs.map((doc, index) => {
    return (
      <div
        className={`tab-pane fade ${index == 0 ? "show active" : ""}`}
        id={`tags-basic_${doc.id}`}
        role="tabpanel"
        aria-labelledby={doc.category_name}
        tabIndex="0"
        key={index}
      >
        <h4>{doc.category_name}</h4>
        <div className="table-responsive">
          <table
            className="table table-striped table-responsive"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Download</th>
              </tr>
            </thead>
            <tbody>
              {doc.all_documents.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      <h6>{item.document_name}</h6>
                    </td>
                    <td>
                      {
                        (item.document_file = !null ? (
                          <Link href={item.document_file}>
                            <i className="bi bi-cloud-download"></i>
                          </Link>
                        ) : (
                          <></>
                        ))
                      }
                    </td>
                    <td>{item.document_desc}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>Investor Information | IFAD Autos Ltd</title>
          <meta name="description" content="All" />
        </Head>
        <Top />
        <Homeslider />
      </div>
      <div className="container">
        <h1 className="brandColor text-center my-5 fw-bold">
          Investor Information
        </h1>
        <div className="row">
          <div className="d-flex align-items-start">
            <div
              className="nav flex-column nav-pills me-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {documentButton}
            </div>
            <div className="tab-content w-100" id="v-pills-tabContent">
              {/* {document} */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Investor;
