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

const Search = () => {
  return (
    <div>
      {/*search starts*/}
      <div className="l-grey-bg">
        {/*search starts*/}
        <div className="container-fluid no-padding search-cont">
          <div className="container-fluid wel-top-bottom pd-2-35">
            <div className="row r-row">
              <div className="col-md-12 search-col">
                <p className="form-head">
                  Let Your Teaching <span>Career Begin Here</span>
                </p>
                <form className="message">
                  <div className="row">
                    <div className="col-lg-10 col-md-12">
                      <div className="row">
                        <div className="col-md-4 pr-md-0">
                          <div className="field inputText-cont form-group">
                            <label>State</label>
                            <img
                              src={Location}
                              alt="icon"
                              className="loadimg img-fluid search-icon"
                            />
                            <select
                              name="select"
                              id="select-state"
                              style={{ textAlign: "center" }}
                            >
                              <option value={1}>Kerala</option>
                              <option value={2}>Karnataka</option>
                              <option value={3}>Jharkhand</option>
                              <option value={4}>Lakshadweep</option>
                            </select>
                            <span className="frm-icon icon icon-user" />
                          </div>
                        </div>
                        <div className="col-md-4 pr-md-0">
                          <div className="field inputText-cont form-group">
                            <label>Subject</label>
                            <img
                              src={Subject}
                              alt="icon"
                              className="loadimg img-fluid search-icon"
                            />
                            <select
                              name="select"
                              id="select"
                              style={{ textAlign: "center" }}
                            >
                              <option value={1}>Choose an option</option>
                              <option value={2}>Maths</option>
                              <option value={3}>Chemistry</option>
                              <option value={4}>Malayalam</option>
                              {/* <option value="4" disabled>.Com</option> */}
                            </select>
                            <span className="frm-icon icon icon-user" />
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12 pr-lg-0">
                          <div className="field inputText-cont form-group">
                            <label>Classes</label>
                            <img
                              src={Classes}
                              alt="icon"
                              className="loadimg img-fluid search-icon"
                            />
                            <select
                              name="select"
                              id="select-des"
                              style={{ textAlign: "center" }}
                            >
                              <option value={1}>Select an option</option>
                              <option value={2}>Lower Primary</option>
                              <option value={2}>Upper Primary</option>
                              <option value={3}>Higher Seconday</option>
                            </select>
                            <span className="frm-icon icon icon-user" />
                          </div>
                        </div>
                      </div>
                      {/*row*/}
                    </div>
                    {/*8*/}
                    <div className="col-lg-2 col-md-12 text-right pt-lg-4">
                      <a className="submit w-100 mt-lg-1 mb-3 mb-lg-0">
                        Search
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*search ends*/}
      </div>
      {/*search ends*/}
    </div>
  );
};

export default Search;
