import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { Col, Container, Row } from "react-bootstrap";
import videotabs from "../assets/videos/partnervideo.mp4";
import rectgle_img from "../assets/image/rectangl_img.png";
import maps from "../assets/image/map_img.png";
import result from "../assets/image/resltues_img.png";
import earth from "../assets/videos/earth.mp4";
import globle from "../assets/videos/globle.mp4";
import { Wifilogo } from "./Iconsvg";
import rectangel1 from "../assets/image/rectangel1.png";
import rectangel2 from "../assets/image/rectangel2.png";
import rectangel3 from "../assets/image/rectangel3.png";
import rectangel4 from "../assets/image/rectangel4.png";
import rectangel5 from "../assets/image/rectangel5.png";
import rec_man from "../assets/image/rec_manimg.png";
import loopline from "../assets/image/loopline.png";
import tab2img from "../assets/image/tab2img.png"
import {Temple_logo} from "./Iconsvg"

const Partner = () => {
  const slider = React.useRef(null);
  const setslider = {
    // dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
  };
  return (
    <>
      <section id="partner" className="mt-120">
        <Container>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="fs-80 fw-700 text-uppercase ff-sohne lheigh1">
              The growth partner{" "}
            </h2>
            <p className="fs-30 fw-300 ff-maison text-black">
              you’ve been looking for.
            </p>
            <p className="fs-15 fw-400 ff-maison text-black pt-4 lheight20">
              Businesses trust Venveo to power grow.
            </p>
          </div>

          <div className="d-flex align-items-center justify-content-center flex-column mt-81">
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="pb-4"
            >
              <Tab eventKey="home" title="Industry Expertise">
                <div className="position-relative ">
                  <div className="d-xl-none d-block">
                    <video
                      className="w-100 "
                      src={videotabs}
                      muted
                      loop
                      autoPlay="true"
                    ></video>
                    <img className="rectngels" src={rectgle_img} alt="#id" />
                  </div>
                  <div className="d-flex flex-column d-xl-block d-none">
                    <video
                      className="w-100 "
                      src={videotabs}
                      muted
                      loop
                      autoPlay="true"
                    ></video>
                  </div>
                  <div className="rectngels d-xl-block d-none">
                    <Row className="rectngels d-flex align-items-center">
                      <Col lg={4} sm={6} className="p-5 positcol4">
                        <div className="">
                          <p className="fs-80 fw-700 ff-sohne text-white text-uppercase lheight1">
                            the smartest{" "}
                            <span className="fs-80 fw-700 ff-sohne d-block text-white">
                              minds in the
                            </span>
                            industry
                          </p>
                          <p className="fs-30 fw-400 ff-maison text-white pt-1">
                            Answer our questions{" "}
                            <span className="fs-30 fw-400 ff-maison d-block">
                              and listen to our answers.
                            </span>
                          </p>
                          <p className="fs-15 fw-400 ff-maison text-white pt-2">
                            This is placeholder but can add{" "}
                            <span className="fs-15 fw-400 ff-maison text-white d-block">
                              more the business of building, some epic
                            </span>{" "}
                            <span className="fs-15 fw-400 ff-maison text-white d-block">
                              fails (and how to avoid them) and
                            </span>{" "}
                            everything building science.
                          </p>

                          <div>
                            <button className="fs-15 fw-500 subscribe_btn ff-maison text-white border-0 gap-3 mt-5">
                              <span className="pe-2">
                                <Wifilogo />
                              </span>
                              Subscribe to Podcast{" "}
                              <span className="fss-6 fw-500 text-white">▼</span>
                            </button>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="p-5">
                        <div className="flex-column d-flex gap-5 align-items-center">
                          <div className="position-relative">
                            {" "}
                            <img src={rectangel1} alt="#" />
                            <img
                              className="loopline1"
                              src={loopline}
                              alt="#id"
                            />
                          </div>{" "}
                          <div className="position-relative">
                            <img src={rectangel2} alt="#" />
                            <img
                              className="loopline1"
                              src={loopline}
                              alt="#id"
                            />
                          </div>
                          <div className="position-relative">
                            <img src={rectangel3} alt="#" />
                            <img
                              className="loopline1"
                              src={loopline}
                              alt="#id"
                            />
                          </div>
                          <div className="position-relative">
                            <img src={rectangel4} alt="#" />
                            <img
                              className="loopline2"
                              src={loopline}
                              alt="#id"
                            />
                          </div>
                          <div className="position-relative">
                            <img src={rectangel5} alt="#" />
                            <img
                              className="loopline2"
                              src={loopline}
                              alt="#id"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={4} className=" ">
                        <Slider {...setslider}>
                          <div>
                            <img className="w-100 " src={rec_man} alt="imge" />
                          </div>
                          <div>
                            <img className="w-100 " src={rec_man} alt="imge" />
                          </div>
                          <div>
                            <img className="w-100 " src={rec_man} alt="imge" />
                          </div>
                        </Slider>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="profile" title="ROI Focused">
                <div className="position-relative">
                  <div>
                    <video
                      className="w-100 "
                      src={earth}
                      muted
                      loop
                      autoPlay="true"
                    ></video>
                  </div>
                  <div className="rectngels">
                    <img className="w-100" src={result} alt="#id" />
                  </div>
                </div>
              </Tab>
              <Tab eventKey="contact" title="Proprietary Technology">
                {/* <div className="position-relative">
                  <div>
                    <video
                      className="w-100 "
                      src={globle}
                      muted
                      loo
                      autoPlay="true"
                    ></video>
                  </div>
                  <div className="rectngels">
                    <img className="w-100" src={maps} alt="#id" />
                  </div>
                </div> */}

                <div className="position-relative ">
                  <div className="d-xl-none d-block">
                    <video
                      className="w-100 "
                      src={globle}
                      muted
                      loop
                      autoPlay="true"
                    ></video>
                    <img className="rectngels" src={maps} alt="#id" />
                  </div>
                  <div className="d-flex flex-column d-xl-block d-none">
                    <video
                      className="w-100 "
                      src={globle}
                      muted
                      loop
                      autoPlay="true"
                    ></video>
                  </div>
                  <div className="rectngels d-xl-block d-none">
                    <Row className="rectngels d-flex align-items-center">
                      <Col lg={4} sm={6} className="p-4 positcol4">
                        <div className="">
                          <p className="fs-80 fw-700 ff-sohne text-white text-uppercase ">
                          Project radar
                          </p>
                          <span className="pt-1"><Temple_logo/></span>
                          <p className="fs-30 fw-400 ff-maison text-white pt-4 lheight20">
                          Lorem ipsum what this{" "}
                            <span className="fs-30 fw-400 ff-maison d-block">
                            
product actually does.
                            </span>
                          </p>
                          <p className="fs-15 fw-400 ff-maison text-white pt-2">
                            This is placeholder but can add{" "}
                            <span className="fs-15 fw-400 ff-maison text-white d-block">
                              more the business of building, some epic
                            </span>{" "}
                            <span className="fs-15 fw-400 ff-maison text-white d-block">
                              fails (and how to avoid them) and
                            </span>{" "}
                            everything building science.
                          </p>

                          <div>
                            <button className="fs-15 fw-500 subscribe_btn ff-maison text-white border-0 gap-3 mt-5">
                             
                              Call to Action Somewhere{" "}
                              <span className="fss-6 fw-500 text-white">▼</span>
                            </button>
                          </div>
                        </div>
                      </Col>
                      <Col lg={4} sm={6} className="p-5">
                        <div className="flex-column d-flex gap-5 align-items-center">
                          <div className="position-relative">
                            {" "}
                            <img src={rectangel1} alt="#" />
                            <img
                              className="loopline1"
                              src={loopline}
                              alt="#id"
                            />
                          </div>{" "}
                          <div className="position-relative">
                            <img src={rectangel2} alt="#" />
                            <img
                              className="loopline1"
                              src={loopline}
                              alt="#id"
                            />
                          </div>
                          <div className="position-relative">
                            <img src={rectangel3} alt="#" />
                            <img
                              className="loopline1"
                              src={loopline}
                              alt="#id"
                            />
                          </div>
                          <div className="position-relative">
                            <img src={rectangel4} alt="#" />
                            <img
                              className="loopline2"
                              src={loopline}
                              alt="#id"
                            />
                          </div>
                          <div className="position-relative">
                            <img src={rectangel5} alt="#" />
                            <img
                              className="loopline2"
                              src={loopline}
                              alt="#id"
                            />
                          </div>
                        </div>
                      </Col>
                      <Col md={4} className=" ">
                        <Slider {...setslider}>
                          <div>
                            <img className="w-100 " src={tab2img} alt="imge" />
                          </div>
                          <div>
                            <img className="w-100 " src={tab2img} alt="imge" />
                          </div>
                          <div>
                            <img className="w-100 " src={tab2img} alt="imge" />
                          </div>
                        </Slider>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Partner;
