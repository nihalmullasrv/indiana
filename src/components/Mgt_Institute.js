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

const Mgt_Institute = () => {
  return (
    <div>
      {/*counting starts*/}
      <div
        className="container-fluid no-padding bg-bg high-cont"
        style={{ backgroundImage: { Countbg }, textAlign: "left" }}
      >
        <div className="high-overlay">
          <div className="container-fluid wel-top-bottom pd-2-35 ">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <h2 className="popular-h2">
                  Management <span className="light-blue">Institutions</span>{" "}
                </h2>
                <p className="text-white high-h2">
                  Are you looking for talented{" "}
                  <span>teachers for your school</span>
                </p>
              </div>
              <div className="col-lg-4 col-md-12 text-white high-col">
                <a className="more-light right red-white" href="management">
                  Management Register
                  <span className="more-span" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*counting ends*/}
    </div>
  );
};

export default Mgt_Institute;
