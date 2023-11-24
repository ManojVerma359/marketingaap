import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import { Sliderimg1 } from "./Iconsvg";
import { Sliderimg2 } from "./Iconsvg";
import { Sliderimg3 } from "./Iconsvg";
import { Sliderimg4 } from "./Iconsvg";
import { Sliderimg5 } from "./Iconsvg";
import double_line from "../assets/image/doubl_line.png"

const Featured = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    Arrows:true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <>
      <section id="featuress" className="mt-5 position-relative">
        <Container className="mt-5">
          <p className="fs-15 fw-400 ff-maison text-black text-center ">
            Featured in
          </p>

          <div className=" mt-5">
            <Slider {...settings}>
              <div className="d-flex  align-items-center justify-content-center">
                <Sliderimg1 />
              </div>
              <div className="d-flex  align-items-center justify-content-center">
                <Sliderimg2 />
              </div>
              <div className="d-flex  align-items-center justify-content-center">
                {" "}
                <Sliderimg3 />
              </div>
              <div className="d-flex  align-items-center justify-content-center">
                {" "}
                <Sliderimg4 />
              </div>
              <div className="d-flex  align-items-center justify-content-center">
                <Sliderimg5 />
              </div>
            </Slider>
          </div>
     
        </Container>
        <div className="mt-5">
          <img className="w-100 mt-2" src={double_line} alt="#id" />
          </div>
      </section>
    </>
  );
};

export default Featured;
