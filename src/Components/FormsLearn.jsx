import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Arrowsvg } from "./Iconsvg";
import learn_secimg from "../assets/image/learn_secimg.png";
import circl_img from "../assets/image/madeimg.png";
import doubl_line from "../assets/image/marketinhg_doubleline.png";
import guides_img1 from "../assets/image/guides_img1.png";
import guides_img2 from "../assets/image/guides_img2.png";
import guides_img3 from "../assets/image/guides_img3.png";

const FormsLearn = () => {
  return (
    <>
      <section id="From" className="position-relative">
        <div>
          <img className="learn_line w-100" src={doubl_line} alt="#id" />
        </div>
        <Container className="mt-5">
          <div className="pt-5 d-flex flex-column align-items-center justify-content-center">
            <h4 className="fs-80 fw-700 ff-sohne text-black text-uppercase ">
              Learn from us.
            </h4>
            <p className="fs-15 fw-400 ff-maison text-black">
              Digital marketing resources from Venveo to help you grow.
            </p>
            <div className="d-flex align-items-center gap-2 pt-4">
              <p className="fs-15 fw-600 ff-maison text-black">See All</p>
              <Arrowsvg />
            </div>
          </div>
          <div className="mt-81 position-relative">
            <img className="w-100" src={learn_secimg} alt="#id" />
            <img className="circl_img" src={circl_img} alt="#id" />
            <div className="guides_card">
              <p className="fs-15 ff-maison fw-400 text-uppercase txt_blue">
                guides
              </p>
              <p className="fs-30 fw-300 ff-maison  pt-1">
                Marketing to Contractors
                <span className="fs-30 fw-300 ff-maison  d-block">
                  and Installers:
                </span>{" "}
                <span className="fs-30 fw-300 ff-maison d-block">
                  The Ultimate Guide
                </span>
              </p>
              <p className="fs-15 fw-400 ff-maison  pt-1">
                Understanding the process
                <span className="d-block fs-15 fw-400 ff-maison">
                  and maximize the opportunities
                </span>
              </p>
              <div className="d-flex align-items-center gap-3 pt-5  pb-2">
                <p className="fs-15 fw-400 ff-maison">Read More</p>
                <Arrowsvg />
              </div>
            </div>
          </div>
        </Container>
        <div className="mt-md-5 mb-4 mt_60">
          <Row className="d-flex justify-content-center align-items-center ">
            <Col xl={4} md={6} className="mt-md-0 mt-4">
              <div className="position-relative d-flex justify-content-center">
                <img className="w-100 " src={guides_img1} alt="#id" />
                <div className="guides_card1">
                  <p className="fs-15 fw-600 ff-maison text-uppercase txt_blue">
                    multi-channel marketing
                  </p>
                  <p className="fs-30 fw-300 ff-maison  lheight pt-2">
                    How to Get{" "}
                    <span className="fs-30 fw-300 ff-maison  d-block">
                      Your Product into Lowe’s
                    </span>
                  </p>
                  <p className="fs-15 fw-400 ff-maison  pt-1">
                    Understanding the process and
                    <span className="d-block fs-15 fw-400 ff-maison">
                      {" "}
                      maximize the opportunities
                    </span>
                  </p>
                  <div className="d-flex align-items-center gap-3 ptt-90 mt-4 ">
                    <p className="fs-15 fw-400 ff-maison">Read More</p>
                    <Arrowsvg />
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} md={6} className="mt-md-0 mt-4">
              <div className="position-relative">
                <img className="w-100 " src={guides_img2} alt="#id" />
                <div className="guides_card2">
                  <p className="fs-15 fw-600 ff-maison text-uppercase txt_blue">
                  lead-gen
                  </p>
                  <p className="fs-30 fw-300 ff-maison  lheight pt-2">
                  Get Your Sales Team{" "}
                    <span className="fs-30 fw-300 ff-maison  d-block">
                    Ready for Digital Leads
                    </span>
                  </p>
                  <p className="fs-15 fw-400 ff-maison  pt-2 ">
                  unlock substantial business growth
                    <span className="d-block fs-15 fw-400 ff-maison">
                      {" "}
                      by enhancing collaboration skills 

                    </span>and digital marketing expertise
                  </p>
                  <div className="d-flex align-items-center gap-3 ptt-90 pb-2">
                    <p className="fs-15 fw-400 ff-maison ">Read More</p>
                    <Arrowsvg />
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} md={6} className="mt-xl-0 mt-4  justify-content-center">
              <div className="position-relative">
                <img className="w-100 " src={guides_img3} alt="#id" />
                <div className="guides_card2">
                  <p className="fs-15 fw-600 ff-maison text-uppercase txt_blue">
                  lead-gen
                  </p>
                  <p className="fs-30 fw-300 ff-maison  lheight pt-2">
                  Get Your Sales Team{" "}
                    <span className="fs-30 fw-300 ff-maison  d-block">
                    Ready for Digital Leads
                    </span>
                  </p>
                  <p className="fs-15 fw-400 ff-maison  pt-2 ">
                  unlock substantial business growth
                    <span className="d-block fs-15 fw-400 ff-maison">
                      {" "}
                      by enhancing collaboration skills 

                    </span>and digital marketing expertise
                  </p>
                  <div className="d-flex align-items-center gap-3 ptt-90 pb-2">
                    <p className="fs-15 fw-400 ff-maison ">Read More</p>
                    <Arrowsvg />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default FormsLearn;
