import React from "react";

//css files
import "./css/all.min.css";
import "./css/animate.4.1.1.min.css";
import "./css/bootstrap.min.css";
import "./css/homestyle.css";
import "./css/mob-menu-style.css";
import "./css/select.css";
import "./css/swiper-bundle.8.0.7.min.css";

//svg files
import logo from "./img/logo/indiana3.svg";
import management from "./img/icons/management_new.svg";
import teacher from "./img/icons/user-blue.svg";


import Slider from "./Home_Slider/slider/Slider";

//icons
import Location from "./img/icons/location.svg";
import Subject from "./img/icons/subject.svg";
import Classes from "./img/icons/classes.svg";

import ico1 from "./img/icons/1.svg";
import ico2 from "./img/icons/2.svg";
import ico3 from "./img/icons/3.svg";
import ico4 from "./img/icons/4.svg";

import wave1 from "./img/images/wave1.svg";

import PlayStore from "./img/icons/play-store.svg";
import AppleIcon from "@mui/icons-material/Apple";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";

//images
import About from "./img/images/about.jpg";
import Process from "./img/images/process6.png";

import Countbg from "./img/images/count-bg.jpg";
import Wave3 from "./img/images/wave3.svg";
import Phone from "./img/images/phone.svg";

const Job_Offer = () => {
  return (
    <div>
      {/*job-offer starts*/}
      <div className="container-fluid no-padding job">
        <div className="container-fluid wel-top-bottom pd-2-35 ">
          <p className="sub-para">Job Offers</p>
          <h2 className="mb-0">
            Opportunities <span className="blue">for you</span>
          </h2>
          <div className="row ov-hidden">
            <div className="col-md-12">
              {/**/}
              <div className="swiper-container job-offers">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="menu-product">
                      <div className="menu-img">
                        <img
                          src="http://mycad.in/indiana/demo5/img/images/job/1.jpg"
                          data-src="http://mycad.in/indiana/demo5/img/images/job/1.jpg"
                          className="lazy img-fluid"
                          alt="icon"
                        />
                      </div>
                      <div className="menu-info">
                        <p className="job-title">Lecturers/ Professors Jobs</p>
                        <p className="job-desc">
                          Lorem Ipsum is simply dummy text of the printing and
                          industry
                        </p>
                      </div>
                      <div className="menu-footer">
                        <a className="more-light right">
                          Register
                          <span className="more-span" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*swiper-slide*/}
                  <div className="swiper-slide">
                    <div className="menu-product">
                      <div className="menu-img">
                        <img
                          src="http://mycad.in/indiana/demo5/img/images/job/2.jpg"
                          data-src="http://mycad.in/indiana/demo5/img/images/job/2.jpg"
                          className="lazy img-fluid"
                          alt="icon"
                        />
                      </div>
                      <div className="menu-info">
                        <p className="job-title">Lecturers/ Professors Jobs</p>
                        <p className="job-desc">
                          Lorem Ipsum is simply dummy text of the printing and
                          industry
                        </p>
                      </div>
                      <div className="menu-footer">
                        <a className="more-light right">
                          Register
                          <span className="more-span" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*swiper-slide*/}
                  <div className="swiper-slide">
                    <div className="menu-product">
                      <div className="menu-img">
                        <img
                          src="http://mycad.in/indiana/demo5/img/images/job/3.jpg"
                          data-src="http://mycad.in/indiana/demo5/img/images/job/3.jpg"
                          className="lazy img-fluid"
                          alt="icon"
                        />
                      </div>
                      <div className="menu-info">
                        <p className="job-title">Lecturers/ Professors Jobs</p>
                        <p className="job-desc">
                          Lorem Ipsum is simply dummy text of the printing and
                          industry Lorem Ipsum is simply
                        </p>
                      </div>
                      <div className="menu-footer">
                        <a className="more-light right">
                          Register
                          <span className="more-span" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*swiper-slide*/}
                  <div className="swiper-slide">
                    <div className="menu-product">
                      <div className="menu-img">
                        <img
                          src="http://mycad.in/indiana/demo5/img/images/job/1.jpg"
                          data-src="http://mycad.in/indiana/demo5/img/images/job/1.jpg"
                          className="lazy img-fluid"
                          alt="icon"
                        />
                      </div>
                      <div className="menu-info">
                        <p className="job-title">Lecturers/ Professors Jobs</p>
                        <p className="job-desc">
                          Lorem Ipsum is simply dummy text of the printing and
                          industry
                        </p>
                      </div>
                      <div className="menu-footer">
                        <a className="more-light right">
                          Register
                          <span className="more-span" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*swiper-slide*/}
                  <div className="swiper-slide">
                    <div className="menu-product">
                      <div className="menu-img">
                        <img
                          src="img/loading.svg"
                          data-src="img/images/job/3.jpg"
                          className="lazy img-fluid"
                          alt="icon"
                        />
                      </div>
                      <div className="menu-info">
                        <p className="job-title">Lecturers/ Professors Jobs</p>
                        <p className="job-desc">
                          Lorem Ipsum is simply dummy text of the printing and
                          industry Lorem Ipsum is simply
                        </p>
                      </div>
                      <div className="menu-footer">
                        <a className="more-light right">
                          Register
                          <span className="more-span" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/*swiper-slide*/}
                </div>
                {/* Add Pagination */}
                {/*  <div class="swiper-pagination"></div> */}
                {/* Add Arrows */}
                <div className="swiper-button-next" />
                <div className="swiper-button-prev" />
              </div>
              {/**/}
            </div>
          </div>
        </div>
      </div>
      {/*job offer ends*/}
    </div>
  );
};

export default Job_Offer;
