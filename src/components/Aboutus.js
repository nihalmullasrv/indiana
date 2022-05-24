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

const Aboutus = () => {
  return (
    <div>
      {/*about starts*/}
      <div className="container-fluid no-padding">
        <div className="container-fluid wel-top-bottom pd-2-35 ">
          <div className="row">
            <div className="col-lg-7 col-md-12 order-lg-2">
              <div>
                <p className="sub-para" >
                  About Us
                </p>
                <h1 className="mb-4" >
                  <span className="big">
                    We provide better opportunity to{" "}
                    <span className="blue">build your future</span>
                  </span>
                </h1>
                <p className="gen-para mb-4">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form by
                  injected humour or randomised words which don't look even
                  slightly believable. If you are going to use a passage of
                  Lorem Ipsum you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
                <ul className="gen-list" >
                  <li>Take a look at our round up of the best shows</li>
                  <li>It has survived not only five centuries</li>
                  <li>Lorem Ipsum has been the ndustry standard dummy text</li>
                </ul>
                <a className="more-light right mt-4">
                  {" "}
                  Discover More <span className="more-span" />
                </a>
              </div>
            </div>
            {/*7*/}
            <div className="col-lg-5 col-md-12 about-col order-lg-1 text-center text-lg-left mt-4 mt-lg-0">
              <img
                src={About}
                alt="icon"
                className="loadimg img-fluid bor-img about-img"
              />
            </div>
            {/*5*/}
          </div>
          {/*row*/}
        </div>
      </div>
      {/*about ends*/}
    </div>
  );
};

export default Aboutus;
