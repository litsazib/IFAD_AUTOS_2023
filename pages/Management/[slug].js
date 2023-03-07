import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Top from '../components/Top.js';
import Footer from '../components/Footer.js';
import Head from "next/head";
import { useRouter } from 'next/router';
import {linkBreak} from '../../utils/common.js'
import BeatLoader from "react-spinners/BeatLoader";
import slugify from 'react-slugify';
import Image from "next/image";


 const detailsPage = ()=> {

  const router = useRouter();
  const { slug } = router.query;

  const loaderProp =({ src }) => {
    return src;
  } 

  const [bod, setbod] = useState([]);
  const [md, setMD] = useState([]);
  const [team, setteam] = useState([]);

  let listOfData = bod[0]?.content_item
	let listOfMdData =  md[0]?.content_item
	let listOfTemeData = team[0]?.content_item

  let combinedArray = []
	if(typeof listOfData != 'undefined' && listOfData.length > 0 && typeof listOfMdData != 'undefined' && listOfMdData.length > 0 && typeof listOfTemeData != 'undefined' && listOfTemeData.length > 0) {
		combinedArray.push(...listOfData, ...listOfMdData, ...listOfTemeData)
		console.log(combinedArray)
	}

  let ResultData = combinedArray?.filter((ctx)=>{
		return ctx.id ===  parseInt(slug)
	})

  console.log(slug)

  useEffect(() => {
    try {
      //Chairman 
      fetch("http://autosapi.ifadgroup.com:8001/content-module/27")
      .then((res) => res.json())
      .then((data) => setbod(data));      
      //MD List
      fetch("http://autosapi.ifadgroup.com:8001/content-module/29")
      .then((res) => res.json())
      .then((data) => setMD(data));
      //Director List
      fetch("http://autosapi.ifadgroup.com:8001/content-module/28")
      .then((res) => res.json())
      .then((data) => setteam(data));
    } catch (error) {
      console.log('something want wrong')
    }
  }, []);

  return (
    <>
      <div className="container-fluid">
        <Head>
          <title>BOD | IFAD Autos Ltd</title>
          <meta name="description" content="All" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Top />
        <div className="row">
          <div
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('http://autoscms.ifadgroup.com:8081/storage/content-module/banner-329509.jpg')`,
              width: "100%",
              height: "350px",
              backgroundSize: "cover",
            }}
            className="coverPhoto d-flex justify-content-center align-items-center position-relative"
          >
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-lg-8 col-md-6">
            <h2 className="font-calibri fw-bold">Iftekhar Ahmed Tipu</h2>
            <h4>Chairman</h4>
            <p className="font-poppins justify">
            Mr. Iftekhar Ahmed Tipu is a prosperous businessman whose contributions have influenced Bangladesh's transportation industry. As the founding firm of IFAD Group, IFAD Autos Ltd., took over Ashok Leyland's single dealership in order to meet the nation's transportation demands. It was founded in 1985. His desire and vision have come to fruition over the years in the form of one of Bangladesh's biggest consumer food producers. Additionally, he established one of Bangladesh's major industrial compressor suppliers. He had successfully provided Ashok Leyland Double Decker buses to the Bangladesh Road Transport Corporation four times under the Indian line of state credit.

The growth of this collection of businesses is an example of Mr. Iftekhar's dynamism and desire for creating a company that is always contributing to the development of the country. With four decades of experience as a corporate figure, he wrote one of the most well-liked books that explores issues at the national level and suggest workable answers. He established "The Daily Nabaraj," a daily with a national readership and of which he also serves as editor-in-chief, in order to further his goal of enlightening the country. In 2008 Asia One Magazine accorded him with the “World’s Greatest Leaders” Award in Dubai and also awarded IFAD Autos Ltd. the title of ‘World’s Greatest Brand”.

Mr. Iftekhar Ahmed served as the President of the Bangladesh Automobile Assemblers and Manufacturers Association (BAAMA) and is still a member of the FBCCI and all of the country's top clubs. Mr. Iftekhar has received praise from many organizations for his tenacity, investment tactics, management skills, and economic contribution. Last but not least, he actively supports the education and training of those with disabilities since he believes in the welfare of individuals from all walks of life. A great father, a visionary leader, a captivating conversationalist, and a philanthropic individual. 
            </p>
            <button className='btn customBtn' type="button" onClick={() => router.back()}>
              Click here to go back
            </button> 
          </div>
          <div className="col-lg-4 col-md-6">
            <Image
              src="http://implcms.ifadgroup.com:8080/storage/content-item/chairman-leardersip-622097.jpg"
              width={300}
              height={300}
              className="rounded img-fluid new-team-member"
              // alt={item_name.toString()}
              loader={loaderProp}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default detailsPage;
