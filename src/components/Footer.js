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

const Footer = () => {
  return (
    <div>
      {/*footer starts*/}
      <footer className="bg-dark">
        <div className="container-fluid footer-main no-padding bg-bg pos-rel">
          <div className="container-fluid top-footer-main no-padding bg-bg">
            <div className="container-fluid top-footer-cont no-padding">
              <div
                className="container-fluid pd-2-35 top-footer"
                style={{ textAlign: "left" }}
              >
                <div className="col-lg-12 top-footer-col no-padding">
                  <div className="row">
                    <div className="col-lg-5 col-md-12 d-none-991">
                      <div className="row mt-3 mt-lg-0">
                        <div className="col-lg-7 col-md-6 col-sm-6 co-col d-none-991 ft-link-col ">
                          {/*no div*/}
                          <a className="fence no-div">
                            <div className="box vrt-middle">
                              <div className="sub-box sub-box1">
                                <figure>
                                  <img
                                    src="http://mycad.in/indiana/demo5/img/icons/headphones.svg"
                                    alt="icon"
                                    className="loadimg"
                                  />
                                </figure>
                              </div>
                              <div className="sub-box">
                                <div className="cnt-no">
                                  {/* <p class="no-small">Call Anytime</p> */}
                                  <p className="no-big mb-0">0123456789</p>
                                </div>
                              </div>
                            </div>
                          </a>
                          {/*no div*/}
                          <div className="ft-contact pos-rel ov-hidden">
                            {/*  <div class="ft-icon">
                <img src="img/icons/phone.svg"  class="" alt="icon">
            </div> */}
                            <p className="phone">
                              info@indianaglobalteachers.com
                            </p>
                            {/*  <p class="mail"></p> */}
                            <p className="address mt-3">
                              First Floor, Manati Tower,
                              <br /> Manna Rd, Taliparamba,
                              <br /> Kerala 670141
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-6 ft-link-col  dis-none-575">
                          <p className="foot-head">Quick Links</p>
                          <div className="link-box q-link">
                            <ul className="quick-links">
                              <li>
                                <a>About</a>
                              </li>
                              {/*  <li ><a>job offers</a></li> */}
                              <li>
                                <a>Contact</a>
                              </li>
                              <li>
                                <a>Management</a>
                              </li>
                              <li>
                                <a>FAQ</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-12  col-sm-12">
                      <div className="row">
                        <div className="col-lg-7 col-md-6 col-sm-6 co-col dis-none-575">
                          <div className="link-box">
                            <p className="mb-4">
                              There are many variations of passages of Lorem
                              Ipsum available but the majority have suffered
                              alteration in some form by injected humour{" "}
                            </p>
                            <a className="play-store mr-2 mb-2">
                              <img
                                src={PlayStore}
                                alt="icon"
                                className="loadimg"
                              />
                              <div>
                                <p className="mb-0 app-sub">Android app on</p>
                                <p className="mb-0 app-text">Play Store</p>
                              </div>
                            </a>
                            <a className="play-store app-store mr-0">
                              {/* <img src="img/icons/app.svg" alt="icon" class="loadimg"> */}
                              {/* <i className="fa-brands fa-apple" /> */}
                              <AppleIcon />
                              <div>
                                <p className="mb-0 app-sub">Available on</p>
                                <p className="mb-0 app-text">App Store</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-5 col-md-6 col-sm-6 text-center text-sm-left ">
                          <div className="link-box box first w-100 vrt-middle">
                            <div className="sub-box logo-cell">
                              <a className="logo-div mb-4">
                                <img
                                  src="http://mycad.in/indiana/demo5/img/logo/indiana-white.svg"
                                  alt="logo"
                                  className=" img-fluid footer-emblem"
                                />
                              </a>
                              <ul className="social with-img">
                                <li>
                                  <a target="_blank" title="Facebook">
                                    {/* <span className="fa-brands fa-facebook-f" />
                                  <img src="img/icons/facebook.svg" /> */}
                                    <FacebookIcon
                                      style={{ color: "#3a5797" }}
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a target="_blank" title="Instagram">
                                    {/* <span className="fa-brands fa-instagram" /> */}
                                    {/* <img src="img/icons/instagram.svg"> */}
                                    <InstagramIcon
                                      style={{ color: "#c4007e" }}
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a target="_blank" title="LinkedIn">
                                    {/* <span className="fa-brands fa-linkedin" /> */}
                                    {/* <img src="img/icons/linkedin.svg"> */}
                                    <LinkedInIcon
                                      style={{ color: "#0271ae" }}
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a target="_blank" title="Youtube">
                                    {/* <span className="fa-brands fa-youtube" /> */}
                                    {/* <img src="img/icons/youtube.svg"> */}
                                    <YouTubeIcon style={{ color: "#f4000f" }} />
                                  </a>
                                </li>
                                <li>
                                  <a target="_blank" title="Pinterest">
                                    {/* <span className="fa-brands fa-pinterest" /> */}
                                    {/* <img src="img/icons/pinterest.svg"> */}
                                    <PinterestIcon
                                      style={{ color: "#ce252c" }}
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a target="_blank" title="Twitter">
                                    {/* <span className="fa-brands fa-twitter" /> */}
                                    <TwitterIcon style={{ color: "#1d9dec" }} />
                                  </a>
                                </li>
                                {/*	<li><a target="_blank" title="Pinterest" ><span class="fa-brands fa-pinterest"></span></a></li> */}
                                {/* <li><a target="_blank" title="YouTube" href="#"><span class="fa-brands fa-youtube"></span></a></li> */}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid bottom-footer-cont no-padding">
            <div
              className="container-fluid pd-2-35 bottom-footer"
              style={{ textAlign: "left" }}
            >
              <div className="col-xs-12 bottom-footer-col no-padding">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 ">
                    <p className="rights mb-1">
                      <span>© 2022 Indiana Global Teachers.</span>{" "}
                      <span> All rights reserved.</span>
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <p className="powered-by text-right">
                      Powered by:
                      <a
                        href="https://srvinfotech.com/"
                        className="srv"
                        target="_blank"
                      >
                        <span title="SRV InfoTech">SRV InfoTech</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
