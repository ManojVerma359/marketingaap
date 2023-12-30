import React from "react";
import { Sreach, Arrow, Close } from "./Iconsvg";
import vectorRight from "../assets/image/VectorRight.png";
import vectorLeft from "../assets/image/VectorLeft.png";
import greenline from "../assets/image/greenline.png";
import videos from "../assets/videos/vido_img.mp4";
import { useState,useEffect } from "react";
import { Navicons } from "./Iconsvg";
import madeimg from "../assets/image/madeimg.png";
import oneline from '../assets/image/oneline.png'
import { Dropdown } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration:1000,
      once:true,
    });
    AOS.refresh();
  }, []);
  const movement=()=>{
    setShow(false)
  }
  const [show, setShow] = useState(false);

  if (show === true) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <section className="hero_bgclr position-relative">
        <div>
          <img className="vright" src={vectorLeft} alt="#id" />
          <img className="vleft w-25" src={vectorRight} alt="#id" />
          <img src={oneline} className="w-100 oneline" alt="#" />
        </div>
        <div className="px-3 px-sm-0">
          <div className="d-flex justify-content-end align-items-center">
            <nav className="nav_width">
              <ul className={show ? "open" : ""}>
                <li>
                
                    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="fs-15 fw-500 ff-maison  text-black bg-transparent border-0">
      How We Help
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item className="fs-15 fw-500 ff-maison" href="#featuress" onClick={movement}>Feature</Dropdown.Item>
        <Dropdown.Item className="fs-15 fw-500 ff-maison"  href="#partner"onClick={movement}>Partner</Dropdown.Item>
        <Dropdown.Item className="fs-15 fw-500 ff-maison" href="#footr" onClick={movement}>Footer</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                 
                </li>
                <li>
                                 <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="fs-15 fw-500 ff-maison  text-black bg-transparent border-0">
      Who We Help
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className="fs-15 fw-500 ff-maison" href="#marketing"onClick={movement}>Marketing</Dropdown.Item>
        <Dropdown.Item className="fs-15 fw-500 ff-maison" href="#satisfied"onClick={movement}>Satisfied </Dropdown.Item>
        <Dropdown.Item className="fs-15 fw-500 ff-maison" href="#footr"onClick={movement}>Footer</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                </li>
                <li>
                                  <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="fs-15 fw-500 ff-maison  text-black bg-transparent border-0">
      Why Venveo
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item className="fs-15 fw-500 ff-maison" href="#Actual"onClick={movement}>Actual</Dropdown.Item>
        <Dropdown.Item className="fs-15 fw-500 ff-maison" href="#From"onClick={movement}>Learn From</Dropdown.Item>
        <Dropdown.Item className="fs-15 fw-500 ff-maison" href="#footr"onClick={movement}>Footer</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                </li>
                <li>
                  <a className="fs-15 fw-500 ff-maison  text-black" href="">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="">
                    <Sreach />
                  </a>
 
                </li>
                <li className="d-flex align-items-center">
                  <button className="talkbtn fs-15 fw-700 ff-maison  ">
                    Let’s Talk{" "}
                    <span className="spn_white">
                      <Arrow />
                    </span>
                  </button>
                </li>
              </ul>
              <button
                className="open d-block d-lg-none navicon z_indexxx nav_icon fills position-relative fill-white p-4"
                onClick={() => {
                  setShow(!show)}}>{show ? <Close/>:<Navicons/>}
                {/* <Navicons /> */}
              </button>
            </nav>
          </div>
          <div className="text-center pt-79 z-3" data-aos="zoom-in-down">
            <h1 className="fs-120 text-uppercase d-block fw-700 ff-sohne text-white make_txt">
              Make marketing
              <span className="fs-120 text-uppercase fw-700 ff-sohne d-block text-white">
                {" "}
                a growth machine
              </span>
            </h1>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <img src={greenline} alt="#id" />
          </div>
          <div className="text-center">
            <p className="fs-24 fw-300 ff-maison text-white d-block lheight pt-1">
              We focus on results. Not just chatter. Elevate your business{" "}
              <span className="fs-24 fw-300 ff-maison text-white d-block ">
                with our top-tier services and tech. Get a proposal now.
              </span>{" "}
            </p>
          </div>
          <div className=" d-flex justify-content-center  align-items-center mt-3">
            <div className="d-flex entertype align-items-center">
              <input
                type="text"
                className="inputt text-white fs-15 fw-300 ff-maison"
                placeholder="Enter Your Website"
              />
              <p className="fs-15 fw-600 ff-maison text-white pe-3 cursor_point">
                Analyze{" "}
              </p>
            </div>
          </div>
         
      <div>
      <div className="d-flex justify-content-center pt-5  position-relative">
            <video
              className="ww-50 z_index5 vheight "
              src={videos}
              loop muted autoPlay
            ></video>
            <img className="circlimg" src={madeimg} alt="#id" />
            
          </div>
      </div>
          
        </div>

      </section>
     
    </>
  );
};

export default Header;
