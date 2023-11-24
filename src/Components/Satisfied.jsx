import React from "react";
import red_line from "../assets/image/red_line.png";
import cardonelogo from "../assets/image/cardonelogo.png";
import cardtwologo from "../assets/image/cardtwologo.png";
import cardthreelogo from "../assets/image/cardthreelogo.png";
import { Row, Col } from "react-bootstrap";
import { Arrowsvg } from "./Iconsvg";

const Satisfied = () => {
  return (
    <>
      <section id="satisfied" className="mt-5">
        <div className="pt-5">
          <p className="fs-30 fw-300 ff-maison text-black text-center ">
            Driving digital revenue for over
          </p>
          <h4 className="fs-80 fw-700 ff-sohne text-center lheight1 position-relative text-uppercase">
            1,400+ satisfied clients.
          </h4>
          <img className="red_line " src={red_line} alt="#id" />
        </div>

        <Row className="mt-81 gap-xl-0 gap-3 d-flex justify-content-xl-between justify-content-center">
          <Col xl={4} md={6} className="bg_cardone padding_card ">
            <div className="cardone">
              <img src={cardonelogo} alt="#id" />
              <h3 className="fs-30 fw-300 ff-maison text-black pt-3 ">
                Driving digital revenue
                <span className="fs-30 fw-300 ff-maison text-black d-block">
                  for over 1,000+
                </span>{" "}
                satisfied clients.
              </h3>
              <p className="fs-15 fw-500 ff-maison text-black pt-2 lheight">
                Elevate your business with our top-tier
                <span className="fs-15 fw-500 ff-maison text-black d-block">
                  services and tech
                </span>
              </p>
              <div className="d-flex align-items-center gap-2 mt-5">
                <p className="fs-18 fw-600 ff-maison text-black">Learn more</p>
                <Arrowsvg />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-5">
              <div className="">
                <p className="fs-50 fw-700 ff-sohne text-black text-uppercase lheight1">
                  80%
                </p>
                <p className="fs-15 fw-400 ff-maison text-black lheight">
                  Leads
                </p>
              </div>
              <div className="">
                <p className="fs-50 fw-700 ff-sohne text-black text-uppercase lheight1">
                2X
                </p>
                <p className="fs-15 fw-400 ff-maison text-black lheight">
                Ad Leads
                </p>
              </div>
              <div className="">
                <p className="fs-50 fw-700 ff-sohne text-black text-uppercase lheight1">
                520%
                </p>
                <p className="fs-16 fw-400 ff-maison text-black lheight">
                Web Traffic
                </p>
              </div>
            </div>
          </Col>
          <Col xl={4} md={6} className="bg_cardtwo padding_card ">
            <div className="cardone">
              <img src={cardtwologo} alt="#id" />
              <h3 className="fs-30 fw-300 ff-maison text-black pt-3 ">
                Driving digital revenue
                <span className="fs-30 fw-300 ff-maison text-black d-block">
                  for over 1,000+
                </span>{" "}
                satisfied clients.
              </h3>
              <p className="fs-15 fw-500 ff-maison text-black pt-2 lheight">
                Elevate your business with our top-tier
                <span className="fs-15 fw-500 ff-maison text-black d-block">
                  services and tech
                </span>
              </p>
              <div className="d-flex align-items-center gap-2 mt-5">
                <p className="fs-18 fw-600 ff-maison text-black">Learn more</p>
                <Arrowsvg />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-5">
              <div className="">
                <p className="fs-50 fw-700 ff-sohne text-black text-uppercase lheight1">
                  80%
                </p>
                <p className="fs-15 fw-400 ff-maison text-black lheight">
                  Leads
                </p>
              </div>
              <div className="">
                <p className="fs-50 fw-700 ff-sohne text-black text-uppercase lheight1">
                2X
                </p>
                <p className="fs-15 fw-400 ff-maison text-black lheight">
                Ad Leads
                </p>
              </div>
              <div className="">
                <p className="fs-50 fw-700 ff-sohne text-black text-uppercase lheight1">
                520%
                </p>
                <p className="fs-16 fw-400 ff-maison text-black lheight">
                Web Traffic
                </p>
              </div>
            </div>
          </Col>
          <Col xl={4} md={6} className="bg_cardthree padding_card">
            <div className="cardone">
              <img src={cardthreelogo} alt="#id" />
              <h3 className="fs-30 fw-300 ff-maison text-black pt-3 ">
                Driving digital revenue
                <span className="fs-30 fw-300 ff-maison text-black d-block">
                  for over 1,000+
                </span>{" "}
                satisfied clients.
              </h3>
              <p className="fs-15 fw-500 ff-maison text-black pt-2 lheight">
                Elevate your business with our top-tier
                <span className="fs-15 fw-500 ff-maison text-black d-block">
                  services and tech
                </span>
              </p>
              <div className="d-flex align-items-center gap-2 mt-5">
                <p className="fs-18 fw-600 ff-maison text-black">Learn more</p>
                <Arrowsvg />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-5">
              <div className="">
                <p className="fs-50 fw-700 ff-sohne text-black text-uppercase lheight1">
                  80%
                </p>
                <p className="fs-15 fw-400 ff-maison text-black lheight">
                  Leads
                </p>
              </div>
              <div className="">
                <p className="fs-50 fw-700 ff-sohne text-black text-uppercase lheight1">
                2X
                </p>
                <p className="fs-15 fw-400 ff-maison text-black lheight">
                Ad Leads
                </p>
              </div>
              <div className="">
                <p className="fs-50 fw-700 ff-sohne text-black text-uppercase lheight1">
                520%
                </p>
                <p className="fs-15 fw-400 ff-maison text-black lheight">
                Web Traffic
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Satisfied;
