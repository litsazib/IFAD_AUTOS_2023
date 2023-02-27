import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
import Top from "./components/Top";
import Homeslider from "./components/Homeslider";
import Footer from "./components/Footer";
import Link from "next/link";
const Investor = () => {
  
  const [docsCatagory, setDocsCatagory] = useState([]);
  const [docList,setDocList] = useState([]);

  useEffect(() => {
    fetch("http://autosapi.ifadgroup.com:8001/document-category")
      .then((res) => res.json())
      .then((data) => setDocsCatagory(data));
  }, []);

  const hendleClick = (id) =>{
    console.log(id)
    try {
      fetch(`http://implapi.ifadgroup.com:8001/csd/${id}`)
      .then((res)=> res.json())
      .then((data)=>setDocList(data))
      .catch((err)=>console.log(err))
    } catch (error) {
      console.log(error)
    }
  }

  console.log(docList)


  const documentCategoryLink = docsCatagory.map((item, index) => {
    return (
      <button
        className={`nav-link text-start ${index == 0 ? "active" : ""}`}
        id={item.id}
        data-bs-toggle="pill"
        data-bs-target={`#tags-basic_${item.id}`}
        onClick={() => hendleClick(item.id)}
        type="button"
        role="tab"
        aria-controls="v-pills-home"
        aria-selected="true"
        key={index}
      >
        {item.category_name} <i className="bi bi-arrow-right-short"></i>
      </button>
    );
  });



  // const document = docs.map((doc, index) => {
  //   return (
  //     <div
  //       className={`tab-pane fade ${index == 0 ? "show active" : ""}`}
  //       id={`tags-basic_${doc.id}`}
  //       role="tabpanel"
  //       aria-labelledby={doc.category_name}
  //       tabIndex="0"
  //       key={index}
  //     >
  //       <h4>{doc.category_name}</h4>
  //       <div className="table-responsive">
  //         <table
  //           className="table table-striped table-responsive"
  //           style={{ width: "100%" }}
  //         >
  //           <thead>
  //             <tr>
  //               <th scope="col">#</th>
  //               <th scope="col">Title</th>
  //               <th scope="col">Download</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             {doc.all_documents.map((item, index) => {
  //               return (
  //                 <tr key={index}>
  //                   <th scope="row">{index + 1}</th>
  //                   <td>
  //                     <h6>{item.document_name}</h6>
  //                   </td>
  //                   <td>
  //                     {
  //                       (item.document_file = !null ? (
  //                         <Link href={item.document_file}>
  //                           <i className="bi bi-cloud-download"></i>
  //                         </Link>
  //                       ) : (
  //                         <></>
  //                       ))
  //                     }
  //                   </td>
  //                   <td>{item.document_desc}</td>
  //                 </tr>
  //               );
  //             })}
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   );
  // });

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
              {documentCategoryLink}
            </div>

            <div className="sub-documents-group w-100">
              {docList.length > 0 ?         
                docList.map((doc,idx)=>{
                  return (
                    <li className="sub-document-list" key={idx}>
                    <h4 className="doc-catagory-title">{doc.name}</h4>
                    <div className="table-responsive">
                      <table
                        className="table table-striped table-responsive"
                        style={{ width: "100%" }}
                      >
                        <thead>
                          <tr>
                            <th scope="col">Sl. No.</th>
                            <th scope="col">Title</th>
                            <th scope="col">Download</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                          doc.documents.map((subDoc,idx)=>{
                            return (
                              <tr>
                                <th scope="row">{idx+1}</th>
                                <td><h6>{subDoc.document_name}</h6></td>
                                <td>
                                  <Link target="_blank" href={`http://implcms.ifadgroup.com:8081/storage/document-image/${subDoc.document_file}`}>
                                    <i className="bi bi-cloud-download"></i>
                                  </Link>
                                </td>
                              </tr>
                            )
                          })
                          }

                        </tbody>
                      </table>
                    </div>
                  </li>
                  )
                })
              :(
                <>
                <img className="noDataImg" src="/noData.jpg" alt="no-data" />
                <span className="text-center warning">Data Not Found!</span>
                </>
              )
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Investor;
