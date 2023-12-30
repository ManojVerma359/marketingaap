import React ,{useRef} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import { Sliderimg1 } from './Iconsvg';
import old_man from "../assets/image/old_man.png";
import old_man2 from "../assets/image/old_man2.png";
import old_man3 from "../assets/image/old_man3.png";
import { Arrow_left, Arrow_right, Uslogo } from "./Iconsvg";
import { Container } from "react-bootstrap";
import {Youtube_logo} from './Iconsvg'


const Actual = () => { 
  const slider = React.useRef(null); 
  const setsettings = {
    dots: true,
    infinite: true,
    // autoplay: true,
     speed: 500,
    slidesToShow: 1.66,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay:true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay:true,
        },
      },]
  };
  return (
    <>
      <section id="Actual" className="bgimg min-vh-100 position-relative mt-5">
        <div className="arrow_left cursor_point d-lg-block d-none "onClick={() => slider?.current?.slickPrev()}>
          <Arrow_left/>
                  </div>
        <div className="arrow_right cursor_point d-lg-block d-none"onClick={() => slider?.current?.slickNext()}>
          <Arrow_right/>
                  </div>                 

        <div className="pt-119 pb-5 d-flex align-items-center justify-content-center flex-column">
        <p className="fs-30 fw-300 ff-maison text-white text-center">
              {" "}
              Actual businesses.
            </p>
            <h3 className="fs-80 fw-700 ff-sohne text-uppercase text-white lheight pt-1 ">
              Actual results.
            </h3>
            <p className="fs-15 fw-400 ff-maison text-white lheight1 pt-4 ">
              Businesses trust Venveo to power grow.
            </p>
        </div>
        <Slider ref={slider} {...setsettings} className="setslider">
          <div className="  d-flex align-items-center justify-content-center flex-column pb-5 opcity_ z_index5 slider-card">          
            <div className="position-relative d-flex justify-content-center">
            <img className="img_height" src={old_man3} alt="#id" />
            <span className="yt_logo"><Youtube_logo/></span>
            </div>
            <p className="fs-30 fw-300 ff-maison text-white mt-5">
              “They are really aligned with how we{" "}
              <span className="d-block fs-30 fw-300 ff-maison text-white">
                are building the business from a strategic
              </span>{" "}
              standpoint and from branding, messaging{" "}
              <span className="d-block fs-30 fw-300 ff-maison text-white">
                and cultural standpoint.
              </span>
              ”
            </p>
            <p className="fs-15 fw-400 ff-maison text-white text-center">
              Jon Vaughan,
              <span className="fs-15 fw-400 ff-maison text-white d-block">
                REGIONAL VP-SE AT US LBM
              </span>
            </p>
            <span className="mb-5 pt-1"><Uslogo /></span>
          </div>
          
          <div className="  d-flex align-items-center justify-content-center flex-column pb-5 z_index5 slider-card">          
<div className="position-relative d-flex justify-content-center">
<img className="img_height" src={old_man2} alt="#id" />
            <span className="yt_logo"><Youtube_logo/></span>
</div>
            <p className="fs-30 fw-300 ff-maison text-white mt-5">
              “They are really aligned with how we{" "}
              <span className="d-block fs-30 fw-300 ff-maison text-white">
                are building the business from a strategic
              </span>{" "}
              standpoint and from branding, messaging{" "}
              <span className="d-block fs-30 fw-300 ff-maison text-white">
                and cultural standpoint.
              </span>
              ”
            </p>
            <p className="fs-15 fw-400 ff-maison text-white text-center">
              Jon Vaughan,
              <span className="fs-15 fw-400 ff-maison text-white d-block">
                REGIONAL VP-SE AT US LBM
              </span>
            </p>
            <span className="mb-5 pt-1"><Uslogo /></span>
          </div>
          <div className="  d-flex align-items-center justify-content-center flex-column pb-5 opcity_ z_index5 slider-card">          
          <div className="position-relative d-flex justify-content-center">
<img className="img_height" src={old_man} alt="#id" />
            <span className="yt_logo"><Youtube_logo/></span>
</div>
            <p className="fs-30 fw-300 ff-maison text-white mt-5">
              “They are really aligned with how we{" "}
              <span className="d-block fs-30 fw-300 ff-maison text-white">
                are building the business from a strategic
              </span>{" "}
              standpoint and from branding, messaging{" "}
              <span className="d-block fs-30 fw-300 ff-maison text-white">
                and cultural standpoint.
              </span>
              ”
            </p>
            <p className="fs-15 fw-400 ff-maison text-white text-center">
              Jon Vaughan,
              <span className="fs-15 fw-400 ff-maison text-white d-block">
                REGIONAL VP-SE AT US LBM
              </span>
            </p>
            <span className="mb-5 pt-1"><Uslogo /></span>
          </div>
          
          
        </Slider>
        
      </section>
    </>
  );
};

export default Actual;
