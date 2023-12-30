import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Arrowsvg, Logo1, Logo2, Logo3, Logo4 } from "./Iconsvg";
import marketing_doubline from '../assets/image/marketinhg_doubleline.png'

const Marketing = () => {
  return (
    <>
      <section id="marketing" className="mt-120 position-relative px-3 px-sm-0">
        <div>
          <img  className="w-100 market_doubline" src={marketing_doubline} alt="#id" />
        </div>
        <Container className="z_index5 position-relative ">
          <div className="text-center">
            <p className="fs-30 fw-300 ff-maison text-black ">
              Problems we solve.
            </p>
            <h4 className="d-block fs-80 fw-700 ff-sohne text-uppercase lheight1">
              Digital Marketing{" "}
              <span className="d-block fs-80 fw-700 ff-sohne text-uppercase">
                for today’s Business{" "}
              </span>
            </h4>
            <p className="fs-15 fw-400 ff-maison text-black lheight20  pt-2">
              We help companies scale their strategies across multiple channel{" "}
              <span className="d-block fs-15 fw-400 ff-maison text-black lheight20">
                {" "}
                to drive more revenue, more quickly, without cutting corners.{" "}
              </span>
            </p>
          </div>
          <Row className="mt-81 d-flex justify-content-center gap-5">
            <Col lg={4} md={5} className="d-flex gap-3 box1 flex-wrap flex-xl-nowrap">
              <div className="d-flex flex-wrap">
                <Logo1 />
              </div>
              <div>
                <h3 className="fs-30 fw-300 ff-maison  ">
                  My website isn’t{" "}
                  <span className="fs-30 fw-300 ff-maison  d-block">
                    getting enough traffic
                  </span>{" "}
                </h3>
                <p className="fs-15 fw-500 ff-maison  lheight20 pt-2 pe-xl-4 pt-4">
                  Without consistent site traffic, you’re missing out on
                  valuable visitors, leads, and revenue. Thankfully, custom SEO
                  solutions can get you back on track by boosting your presence
                  in search engine results, so more people can find and visit
                  your site.
                </p>
                <div className="pt-3 ">
                  <p className="fs-15 fw-600 ff-maison  lheight20">
                    . Boost your presence in search results
                  </p>
                  <p className="fs-15 fw-600 ff-maison  lheight20">
                    . Capture targeted site traffic
                  </p>
                  <p className="fs-15 fw-600 ff-maison  lheight20">
                    . Turn site visitors into customers
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 mt-lg-5 mt-3 ">
                  <p className="fs-15 fw-600 ff-maison  lheight20">
                    Explore SEO Services
                  </p>
                  <Arrowsvg />
                </div>
              </div>
            </Col>
            <Col lg={4} md={5} className="d-flex gap-3 box1 flex-wrap flex-xl-nowrap">
              <div className="d-flex flex-wrap">
                <Logo2 />
              </div>
              <div>
                <h3 className="fs-30 fw-300 ff-maison  ">
                My CPL from digital ad {" "}
                  <span className="fs-30 fw-300 ff-maison  d-block">
                  campaigns is too high
                  </span>{" "}
                </h3>
                <p className="fs-15 fw-500 ff-maison  lheight20 pt-2 pe-xl-4 pt-4">
                  Without consistent site traffic, you’re missing out on
                  valuable visitors, leads, and revenue. Thankfully, custom SEO
                  solutions can get you back on track by boosting your presence
                  in search engine results, so more people can find and visit
                  your site.
                </p>
                <div className="pt-3 ">
                  <p className="fs-15 fw-600 ff-maison  lheight20">
                    . Refine ad targeting
                  </p>
                  <p className="fs-15 fw-600 ff-maison  lheight20">
                    . Engage your audience where they browse online
                  </p>
                  <p className="fs-15 fw-600 ff-maison  lheight20">
                    . Maximize paid ad budget
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 mt-md-4 mt-2">
                  <p className="fs-15 fw-600 ff-maison  lheight20">
                    Explore SEO Services
                  </p>
                  <Arrowsvg />
                </div>
              </div>
            </Col>
            
          </Row>
          <Row className="mt-5 d-flex justify-content-center gap-5">
            <Col lg={4} md={5} className="d-flex gap-3 box1 flex-wrap flex-xl-nowrap">
              <div className="d-flex flex-wrap">
                <Logo3 />
              </div>
              <div>
                <h3 className="fs-30 fw-300 ff-maison  ">
                  My website isn’t{" "}
                  <span className="fs-30 fw-300 ff-maison  d-block">
                    getting enough leads
                  </span>{" "}
                </h3>
                <p className="fs-15 fw-500 ff-maison  lheight20 pt-2 pe-xl-4 pt-4">
                Struggling to get qualified leads in your pipeline? Turn up the dial on your lead generation with digital marketing plans, tailored to your goals and budget.
                </p>
                <div className="pt-3 ">
                  <p className="fs-15 fw-600 ff-maison  lheight20">
                    . Fill up your lead pipeline
                  </p>
                  <p className="fs-15 fw-600 ff-maison  lheight20">
                    . Reach your most valuable audience
                  </p>
                  <p className="fs-15 fw-600 ff-maison  lheight20">
                    . Maximize conversion opportunities
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 mt-md-5 mt-2 ">
                  <p className="fs-15 fw-600 ff-maison  lheight20">
                    Explore SEO Services
                  </p>
                  <Arrowsvg />
                </div>
              </div>
            </Col>
            <Col lg={4} md={5} className="d-flex gap-3 box1 flex-wrap flex-xl-nowrap">
              <div className="d-flex flex-wrap">
                <Logo4 />
              </div>
              <div>
                <h3 className="fs-30 fw-300 ff-maison  ">
                My marketing and sales  {" "}
                  <span className="fs-30 fw-300 ff-maison  d-block">
                  data is disconnected
                  </span>{" "}
                </h3>
                <p className="fs-15 fw-500 ff-maison  lheight20 pt-2 pe-xl-4 pt-4">
                Don’t let leads slip through the cracks. Unify your sales and marketing efforts with Nutshell and MarketingCloudFX, to provide end-to-end reporting and analysis of your data.
                </p>
                <div className="pt-3 ">
                  <p className="fs-15 fw-600 ff-maison  lheight20">
                    . Unify sales and marketing data
                  </p>
                  <p className="fs-15 fw-600 ff-maison  lheight20">
                    . Prioritize leads with data-backed insights
                  </p>
                  <p className="fs-15 fw-600 ff-maison  lheight20">
                    . Turn opportunities into closed deals
                  </p>
                </div>
                <div className="d-flex align-items-center gap-2 mt-lg-5 mt-3">
                  <p className="fs-15 fw-600 ff-maison  lheight20">
                    Explore SEO Services
                  </p>
                  <span className="arrow_hov"><Arrowsvg /></span>
                </div>
              </div>
            </Col>
            
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Marketing;
