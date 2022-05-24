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

const Download_App = () => {
  return (
    <div>
      {/*download starts*/}
      <div className="container-fluid no-padding bg-bg download">
        <div className="container-fluid wel-top-bottom pd-2-35">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-md-12">
              <div className="row d-flex align-items-center">
                <div className="col-lg-7 order-lg-2 col-md-12 pos-rel wave-col">
                  <img src={wave1} alt="icon" className="loadimg wave1" />
                  <img src={wave1} alt="icon" className="loadimg wave2" />
                  {/*   <h3>Get it for free</h3> */}
                  <h2
                    className="mb-4 download-head"
                    style={{ TestAlign: "left" }}
                  >
                    Download the app from <br />
                    <span className="blue">Play Store</span>
                  </h2>
                  <p className="mb-4 pb-3 gen-para">
                    Mattis rhoncus urna neque viverra justo nec ultrices. Non
                    arcu risus quis varius quam quisque id. Scelerisque varius
                    morbi enim nunc faucibus. Mattis rhoncus urna neque viverra
                    justo nec ultrices. Non arcu risus quis varius quam quisque
                    id. Scelerisque varius morbi enim nunc faucibus.
                  </p>
                  <a className="play-store mr-2">
                    <img src={PlayStore} alt="icon" className="loadimg" />
                    <div>
                      <p className="mb-0 app-sub">Android app on</p>
                      <p className="mb-0 app-text">Play Store</p>
                    </div>
                  </a>
                  <a className="play-store app-store">
                    {/* <img src="img/icons/app.svg" alt="icon" class="loadimg" /> */}
                    {/* <i className="fa fa-apple" /> */}
                    <AppleIcon />

                    <div>
                      <p className="mb-0 app-sub">Available on</p>
                      <p className="mb-0 app-text">App Store</p>
                    </div>
                  </a>
                </div>
                {/*7*/}
                <div className="col-lg-5 order-lg-1 col-md-12 pos-rel text-center text-lg-left">
                  <img src={Wave3} alt="icon" className="loadimg wave3" />
                  <img src={Phone} alt="icon" className="loadimg app-phone" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*download ends*/}
    </div>
  );
};

export default Download_App;
