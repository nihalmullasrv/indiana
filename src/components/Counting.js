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

const Counting = () => {
  return (
    <div>
      {/*counting no's starts*/}
      <div
        className="container-fluid no-padding counter bg-bg"
        style={{
          backgroundImage: "url(img/images/count-bg2.jpg)",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="high-overlay">
          <div className="container-fluid wel-top-bottom pd-2-35 ">
            <div className="row">
              <div className="col-md-12 pt-3 pb-3">
                <ul className="countlist flex w-100" id="counter">
                  <li>
                    <div className="box vrt-middle w-100 two">
                      <div className="sub-box sub-box-a">
                        <figure>
                          <img
                            src="http://mycad.in/indiana/demo5/img/icons/knowledge.svg"
                            data-src="http://mycad.in/indiana/demo5/img/icons/knowledge.svg"
                            className="lazy img-fluid count-icon"
                            alt="icon"
                          />
                        </figure>
                      </div>
                      <div className="sub-box sub-box2">
                        <div className="counter-value" data-count={1000}>
                          0
                        </div>
                        <span className="plus">+</span>
                      </div>
                      <div className="sub-box sub-box1">
                        <p className="count-text">Institutions</p>
                      </div>
                    </div>
                    {/* box */}
                  </li>
                  <li>
                    <div className="box vrt-middle w-100">
                      <div className="sub-box sub-box-a">
                        <figure>
                          <img
                            src="http://mycad.in/indiana/demo5/img/icons/suitcase.svg"
                            data-src="img/icons/suitcase.svg"
                            className="lazy img-fluid count-icon"
                            alt="icon"
                          />
                        </figure>
                      </div>
                      <div className="sub-box sub-box2">
                        <div className="counter-value" data-count={2000}>
                          0
                        </div>
                        <span className="plus">+</span>
                      </div>
                      <div className="sub-box sub-box1">
                        <p className="count-text">Job Seekers</p>
                      </div>
                    </div>
                    {/* box */}
                  </li>
                  <li>
                    <div className="box vrt-middle w-100 two">
                      <div className="sub-box sub-box-a">
                        <figure>
                          <img
                            src="http://mycad.in/indiana/demo5/img/icons/self.svg"
                            data-src="img/icons/self.svg"
                            className="lazy img-fluid count-icon"
                            alt="icon"
                          />
                        </figure>
                      </div>
                      <div className="sub-box sub-box2">
                        <div className="counter-value" data-count={1180}>
                          0
                        </div>
                        <span className="plus">+</span>
                      </div>
                      <div className="sub-box sub-box1">
                        <p className="count-text">Employers</p>
                      </div>
                    </div>
                    {/* box */}
                  </li>
                  <li>
                    <div className="box vrt-middle w-100">
                      <div className="sub-box sub-box-a">
                        <figure>
                          <img
                            src="http://mycad.in/indiana/demo5/img/icons/job-search.svg"
                            data-src="img/icons/job-search.svg"
                            className="lazy img-fluid count-icon"
                            alt="icon"
                          />
                        </figure>
                      </div>
                      <div className="sub-box sub-box2">
                        <div className="counter-value" data-count={30}>
                          0
                        </div>
                        <span className="plus">+</span>
                      </div>
                      <div className="sub-box sub-box1">
                        <p className="count-text">Employments</p>
                      </div>
                    </div>
                    {/* box */}
                  </li>
                </ul>
                {/* countlist */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*counting no's ends*/}
    </div>
  );
};

export default Counting;
