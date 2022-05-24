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

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="container-fluid no-padding hd-main" id="hd-main">
          <div className="clear-fix" />
          <div className="container-fluid no-padding">
            <div className="container-fluid pd-2-35 ">
              <div className="container-fluid no-padding pos-rel header-main">
                <div className="container-fluid rel-cont no-padding">
                  <div className="w-100 float-left rel-coll">
                    <div className="logo-col">
                      <a className="logo-div" href title="Indiana">
                        <img src={logo} alt="logo" className="logo" />
                      </a>
                    </div>
                    <div className="float-right oth-col">
                      {/*desk menu starts*/}
                      {/*desk menu starts*/}
                      <div className="hex__global_nav_main_bar desk-menu">
                        <div className="main-cont">
                          <ul className="main-menu-ul">
                            <li className="has-dropdown first">
                              <a className="list-link" href>
                                Home{" "}
                              </a>
                            </li>
                            <li className="has-dropdown first">
                              <a className="list-link" href="about">
                                About{" "}
                              </a>
                            </li>
                            <li className="has-dropdown first">
                              <a className="list-link" href>
                                Blog{" "}
                              </a>
                            </li>
                            <li className="has-dropdown first">
                              <a className="list-link" href="faq">
                                FAQ{" "}
                              </a>
                            </li>
                            <li className="has-dropdown ">
                              <a className="list-link" href="contact">
                                Contact
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/*desk menu ends*/}
                      {/*desk menu ends*/}
                      <div className="no-cont">
                        {/*no div*/}
                        <a className="fence no-div mr-2" href="management">
                          <div className="box vrt-middle">
                            <div className="sub-box sub-box1">
                              <figure>
                                <img
                                  src={management}
                                  alt="icon"
                                  className="loadimg"
                                />
                              </figure>
                            </div>
                            <div className="sub-box">
                              <div className="cnt-no">
                                <p className="no-big mb-0">Management</p>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          className="fence no-div"
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          <div className="box vrt-middle">
                            <div className="sub-box sub-box1">
                              <figure>
                                <img
                                  src={teacher}
                                  alt="icon"
                                  className="loadimg"
                                />
                              </figure>
                            </div>
                            <div className="sub-box">
                              <div className="cnt-no">
                                {/* <p class="no-small">Call Anytime</p> */}
                                <p className="no-big mb-0">Teacher</p>
                              </div>
                            </div>
                          </div>
                        </a>
                        {/*no div*/}
                      </div>
                      {/*mobile menu icon starts*/}
                      <div
                        className="cd-dropdown-wrapper mob-menu-icon"
                        id="mob-menu"
                      >
                        <a className="cd-dropdown-trigger" href="#0">
                          <div className="menu-btn" onclick="on()">
                            <span />
                            <span />
                            <span />
                          </div>
                        </a>
                      </div>{" "}
                      {/* .cd-dropdown-wrapper */}
                      {/*mobile menu icon ends*/}
                    </div>
                  </div>
                  <div className="clear-fix" />
                </div>
                {/*rel cont ends*/}
              </div>
              {/*header main*/}
            </div>
            {/*pd-2-35*/}
          </div>
        </div>
        {/*hd main*/}
      </header>
      <nav className="cd-dropdown mob-menu">
        <div className="mob-logo-close">
          <div className="menu-logo-cont">
            <img
              src="img/logo/indiana3.svg"
              className="center-image"
              alt="logo"
            />
          </div>
          <a href="#0" className="cd-close" onclick="off()">
            Close
          </a>
        </div>
        <ul className="cd-dropdown-content">
          <li className="clear-fix" />
          <li>
            {/* <form class="cd-search">
                              <input type="search" placeholder="Search...">
                          </form> */}
          </li>
          <li className="clear-fix" />
          <li>
            <a href className="mob-link">
              {" "}
              Home
            </a>
          </li>
          <li>
            <a className="mob-link" href="about">
              {" "}
              About Us
            </a>
          </li>
          <li>
            <a className="mob-link"> Blog</a>
          </li>
          <li>
            <a className="mob-link" href="faq">
              {" "}
              FAQ
            </a>
          </li>
          <li>
            <a className="mob-link" href="contact">
              {" "}
              Contact
            </a>
          </li>
          <li>
            <a className="mob-link" href="management">
              {" "}
              Management
            </a>
          </li>
          <li>
            <a className="mob-link" data-toggle="modal" data-target="#myModal">
              {" "}
              Teacher
            </a>
          </li>
        </ul>{" "}
        {/* .cd-dropdown-content */}
      </nav>
    </div>
  );
};

export default Navbar;
