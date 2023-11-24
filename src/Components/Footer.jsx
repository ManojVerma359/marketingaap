import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Inicon, Instagram, Twitter, Youtube } from "./Iconsvg";

const Footer = () => {
  return (
    <section id="footr" className="foote_bgclr">
      <Container className="pt-90 pb-90 w-100">
        <div className="d-flex  justify-content-between w-100 flex-wrap gap-4">
          <div>
            <div className="justify-content-center  d-flex flex-column">
              <p className="fs-12 fw-400 text-white text-uppercase ff-maison">
                how we help
              </p>
              <ul className="pt-3 lheight">
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  Drive More Awareness
                </li>
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  Get more Customers
                </li>
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  {" "}
                  Build Your Brand
                </li>
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  {" "}
                  Improve your reputation
                </li>
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  Track Results
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="justify-content-center  d-flex flex-column">
              <p className="fs-12 fw-400 text-white text-uppercase ff-maison">
                wh0 we help
              </p>
              <ul className="pt-3 lheight">
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  Digital Advertising
                </li>
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  Search Engine Ranking
                </li>
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  {" "}
                  Content Marketing
                </li>
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  {" "}
                  Programic Advertising
                </li>
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  Email Marketing
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="justify-content-center  d-flex flex-column">
              <p className="fs-12 fw-400 text-white text-uppercase ff-maison">
                why venveo
              </p>
              <ul className="pt-3 lheight">
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  About Us
                </li>
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  Careers
                </li>
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  Growth Studies
                </li>
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  Testimonials
                </li>
              </ul>
            </div>
          </div>
          <div className="margin_r85">
            <div className="justify-content-center  d-flex flex-column">
              <p className="fs-12 fw-400 text-white text-uppercase ff-maison">
                resources
              </p>
              <ul className="pt-3 lheight">
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  Articles
                </li>
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  News
                </li>
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  Webinars
                </li>
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  eBooks{" "}
                </li>
                <li className="fs-15 fw-300 ff-maison text-white cursor_point">
                  Podcast{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="align-items-xl-end d-flex flex-column align-items-center mt-xl-0 mt-3">
            <p className="fs-30 fw-300 ff-maison text-white">
              Get weekly data — and insights.
            </p>
            <div className="get_input d-flex align-items-center justify-content-center gap-100 mt-3  p-3">
              <input
                className="emai_input"
                type="text"
                placeholder="Enter Your Email"
              />
              <p className="fs-15 fw-600 ff-maison txt_green">Get Started</p>
            </div>
          </div>
        </div>

        <Row className="mt-110 justify-content-between w-100 d-flex">
          <Col md={4}>
            <p className="fs-13 fw-400 ff-maison text-white">
              Venveo is an award-winning digital marketing{" "}
              <span className="fs-13 fw-400 ff-maison text-white d-block">
                solutions provider. Since 2003.
              </span>
              ©2023 Venveo
            </p>
          </Col>
          <Col md={2}>
            <p className="fs-12 fw-500 ff-maison text-white">Visit</p>
            <p className="fs-13 fw-400 ff-maison text-white pt-4">
              100 N Main Street
              <span className="fs-13 fw-400 ff-maison text-white d-block">
                #201{" "}
              </span>
              Blacksburg, VA 24060
            </p>
          </Col>
          <Col md={2}>
            <p className="fs-12 fw-500 ff-maison text-white">contact</p>
            <p className="fs-13 fw-400 ff-maison text-white pt-4">
              info@venveo.com
            </p>
            <p className="fs-13 fw-400 ff-maison text-white pt-3">
              1 · 800 · 123 · 4567
            </p>
          </Col>
          <Col lg={4}>
            <div className="d-flex align-items-center justify-content-end gap-100">
              <p className="fs-13 fw-400 ff-maison text-white">
                All Rights Reserved
              </p>
              <p className="fs-13 fw-400 ff-maison text-white">
                Privacy Policy
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-end gap-5 mt-4">
              <a className="link" href="#id">
                {" "}
                <Facebook />
              </a>
              <a className="link" href="#id">
                <Instagram />
              </a>
              <a className="link" href="#id">
                {" "}
                <Twitter />
              </a>
              <a className="link" href="#id">
                {" "}
                <Inicon />
              </a>
              <a className="link" href="#id">
                <Youtube />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
