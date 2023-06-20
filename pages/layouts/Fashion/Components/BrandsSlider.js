// import React, { Fragment } from "react";
// import Link from "next/link";
// import { Container, Row, Col, Media } from "reactstrap";
// import Slider from "react-slick";

// import banner1 from "../../../../public/assets/images/sub-banner1.jpg";
// import banner2 from "../../../../public/assets/images/sub-banner2.jpg";

// const Data = [
//   {
//     img: banner1,
//     about: "fragrances",
//     offer: "10% off",
//     link: "/left-sidebar/collection",
//     class: "p-right text-center",
//   },
//   {
//     img: banner2,
//     about: "cosmetics",
//     offer: "10% off",
//     link: "/left-sidebar/collection",
//     class: "p-right text-center",
//   },
//   {
//     img: banner2,
//     about: "cosmetics",
//     offer: "10% off",
//     link: "/left-sidebar/collection",
//     class: "p-right text-center",
//   },
//   {
//     img: banner2,
//     about: "cosmetics",
//     offer: "10% off",
//     link: "/left-sidebar/collection",
//     class: "p-right text-center",
//   },{
//     img: banner2,
//     about: "cosmetics",
//     offer: "10% off",
//     link: "/left-sidebar/collection",
//     class: "p-right text-center",
//   },{
//     img: banner2,
//     about: "cosmetics",
//     offer: "10% off",
//     link: "/left-sidebar/collection",
//     class: "p-right text-center",
//   },{
//     img: banner2,
//     about: "cosmetics",
//     offer: "10% off",
//     link: "/left-sidebar/collection",
//     class: "p-right text-center",
//   },{
//     img: banner2,
//     about: "cosmetics",
//     offer: "10% off",
//     link: "/left-sidebar/collection",
//     class: "p-right text-center",
//   },
// ];

// const MasterCollectionBanner = ({ img, about, offer, link, classes }) => {
//   return (
//     <Col md="6">
//       <Link href={link}>
//         <a>
//           <div className={`collection-banner ${classes}`}>
//             <Media src={img} className="img-fluid" alt="" />
//             <div
//               className="contain-banner"
//               style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
//             >
//               <div>
//                 <h4>{offer}</h4>
//                 <h2>{about}</h2>
//               </div>
//             </div>
//           </div>
//         </a>
//       </Link>
//     </Col>
//   );
// };

// const CollectionBanner = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   return (
//     <Fragment>
//       {/*collection banner*/}
//       <section className="pb-0">
//         <Container>
//           <Row className="partition2">
//             <Slider {...settings}>
//               {Data.map((data, i) => {
//                 return (
//                   <MasterCollectionBanner
//                     key={i}
//                     img={data.img.src}
//                     about={data.about}
//                     link={data.link}
//                     offer={data.offer}
//                     classes={data.class}
//                   />
//                 );
//               })}
//             </Slider>
//           </Row>
//         </Container>
//       </section>
//       {/*collection banner end*/}
//     </Fragment>
//   );
// };

// export default CollectionBanner;
import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { gql } from '@apollo/client';
import { useQuery } from "@apollo/client";
import { Slider3 ,Slider1, Slider5} from "../../../../services/script";
import { Media, Container, Row, Col } from "reactstrap";

const GET_PRODUCTS = gql`
  query blog($type: String!) {
    blog(type: $type) {
      img
      link
      title
      desc
      date
    }
  }
`;

const BlogSection = ({ type, sectionClass, title, inner, hrClass }) => {
  var { data } = useQuery(GET_PRODUCTS, {
    variables: {
      type: type,
    },
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable:true,
  };

  console.log("data slider", data);
  return (
    <Fragment>
      <section className={sectionClass}>
        <Container>
          <Row>
            <Col md="12">
              <div className={title}>
                {/* <h4>our collection</h4> */}
                <h2 className={inner}>Our Brands</h2>
                {hrClass ? (
                  <hr role="tournament6"></hr>
                ) : (
                  <div className="line">
                    <span></span>
                  </div>
                )}
              </div>
              <Slider {...Slider5} {...settings} className="slide-3 no-arrow ">
                {data &&
                  data.blog.map((item, index) => (
                    <Col md="12" key={index}>
                      {/* <Link href={`/blogs/blog_detail`}> */}
                        <div className="classic-effect">
                          <Media src={item.img} className="img-fluid" alt="" />
                          <span></span>
                        </div>
                      {/* </Link> */}
                      {/* <div className="blog-details">
                        <h4>{item.title}</h4>
                        <Link href={`/blogs/blog_detail`}>
                          <p>{item.desc} </p>
                        </Link>
                        <hr className="style1" />
                        <h6>by: {item.date}</h6>
                      </div> */}
                    </Col>
                  ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
export default BlogSection;
