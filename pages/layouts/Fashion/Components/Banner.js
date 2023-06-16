import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "./MasterBanner";

const Data = [
  {
    img: "home1",
    title: "Take it to the next level",
    desc: "Silky Makeup",
    link: "/left-sidebar/collection ",
  },
  { 
    img: "home2",
    title: "It is about how you feel that counts, not how you look.",
    desc: "Luxurious Skincare",
    link: "/left-sidebar/collection ",
  },
  {
    img: "home3",
    title: "Your favourite luxury brands with extra benefits.",
    desc: "Fabulous fragrance",
    link: "/left-sidebar/collection ",
  },
  {
    img: "home4",
    title: "Cut crystal vessels with customized fragrance scents",
    desc: "Exquisite Home Decor",
    link: "/left-sidebar/collection ",
  },
];

const Banner = () => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          {Data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.img}
                desc={data.desc}
                title={data.title}
                link={data.link}
              />
            );
          })}
        </Slider>
      </section>
    </Fragment>
  );
};

export default Banner;
