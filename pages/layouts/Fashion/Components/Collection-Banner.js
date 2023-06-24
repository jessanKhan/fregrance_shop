import React, { Fragment } from "react";
import Link from "next/link";
import { Container, Row, Col, Media } from "reactstrap";
import banner1 from "../../../../public/assets/images/sub-banner1.jpg";
import banner2 from "../../../../public/assets/images/sub-banner2.jpg";
import banner3 from "../../../../public/assets/images/sub-banner3.jpg";

const Data = [
  {
    img: banner1,
    about: "fragrances",
    about2: "",
    offer: "10% off",
    link: "/left-sidebar/collection",
    class: "p-right text-center",
  },
  {
    img: banner2,
    about: "cosmetics",
    about2: "",
    offer: "10% off",
    link: "/left-sidebar/collection",
    class: "p-right text-center",
  },
  {
    img: banner3,
    about: "candles & ",
    about2: "diffusers",
    offer: "10% off",
    link: "/left-sidebar/collection",
    class: "p-right text-center",
  },
];

const MasterCollectionBanner = ({
  img,
  about,
  about2,
  offer,
  link,
  classes,
}) => {
  return (
    <Col md="4">
      <Link href={link}>
        <a>
          <div className={`collection-banner ${classes}`}>
            <Media src={img} className="img-fluid" alt="" />
            <div
              className="contain-banner"
              style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
            >
              <div>
                <h4>{offer}</h4>
                <h2>{about}</h2>
                {about2 != "" && <h2>{about2}</h2>}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </Col>
  );
};

const CollectionBanner = () => {
  return (
    <Fragment>
      {/*collection banner*/}
      <section className="pb-0">
        <div>
          <Container>
            <Row className="partition2">
              {Data.map((data, i) => {
                return (
                  <MasterCollectionBanner
                    key={i}
                    img={data.img.src}
                    about={data.about}
                    about2={data.about2}
                    link={data.link}
                    offer={data.offer}
                    classes={data.class}
                  />
                );
              })}
            </Row>
          </Container>
        </div>
      </section>
      {/*collection banner end*/}
    </Fragment>
  );
};

export default CollectionBanner;
