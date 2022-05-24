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

//components links
import Navbar from "./Navbar";
import Search from "./Search";
import Vacancies from "./Vacancies";
import Aboutus from "./Aboutus";
import Our_Process from "./Our_Process";
import Job_Offer from "./Job_Offer";
import Mgt_Institute from "./Mgt_Institute";
import Download_App from "./Download_App";
import Counting from "./Counting";
import Footer from "./Footer";
import Whatsapp from "./Whatsapp";

// import img1 from './img/images/'

const Main = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      {/*mobile menu starts*/}
      {/* <div class="cd-dropdown-wrapper mob-menu" id="mob-menu">
              <a class="cd-dropdown-trigger" href="#0">
              
                  <div class="menu-btn">
                      <span class="bg-dark"></span>
                      <span class="bg-dark"></span>
                      <span class="bg-dark"></span> 
                  </div>
              </a> */}{" "}
      {/* .cd-dropdown */}
      {/* </div>  */}
      {/* .cd-dropdown-wrapper */}
      {/*mobile menu ends*/}
      {/* End HEADER */}
      {/*content starts*/}
      <Search />
      <Vacancies />
      <Aboutus />
      <Our_Process />
      <Job_Offer />
      <Mgt_Institute />
      <Download_App />
      <Counting />
      <Footer />
      {/*counting starts*/}
      {/*counting ends*/}
      <Whatsapp />
      {/* login modal starts */}
      <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-lg login-modal">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            {/* Modal body */}
            <div className="modal-body">
              {/*step1 starts*/}
              <div className="step1" id="step1">
                <div className="row r-row login-row">
                  <div className="col-md-6 bg-bg login-bg"></div>
                  <div className="col-md-6 modal-6-col">
                    <form method="post" className="login-form" id="help-form">
                      <div className="row">
                        <div className="col-md-12 text-center">
                          <img
                            src="img/logo/indiana3.svg"
                            alt="logo"
                            className="login-logo"
                          />
                        </div>
                        <div className="col-md-12">
                          <p className="login-text text-black mb-3">
                            Login with OTP
                          </p>
                        </div>
                        <div className="col-md-12 mb-0">
                          <div className="field inputText-cont form-group">
                            <div className="d-flex otp-cont">
                              <div className="pos-rel otp-div">
                                <img
                                  src="img/icons/mobile1.svg"
                                  alt="icon"
                                  className="loadimg img-fluid search-icon"
                                />
                                <input
                                  type="text"
                                  name="fullname"
                                  placeholder="Mobile Number"
                                />
                              </div>
                              <a className="submit otp">send OTP</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <input
                            type="checkbox"
                            name="fullname"
                            defaultChecked
                          />
                          <span className="small forgot mt-0">Remember me</span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/*step1 ends*/}
              {/*step2 starts*/}
              <div className="step2" id="step2">
                <div className="row r-row login-row">
                  <div className="col-md-6 bg-bg login-bg"></div>
                  <div className="col-md-6 modal-6-col">
                    <form method="post" className="login-form">
                      <div className="row text-center">
                        <div className="col-md-12">
                          <p className="login-text text-black mb-3">
                            Verify OTP
                          </p>
                          <p className="resend mt-3">
                            Please enter the OTP sent to mobile no.
                            <br />
                            +91-9876543210
                            <button
                              type="button"
                              className="change trn"
                              id="numchange"
                            >
                              Change
                            </button>
                          </p>
                        </div>
                        <div className="col-md-12 mb-0">
                          <div className="field inputText-cont form-group">
                            <div className="d-flex m-auto">
                              <input
                                type="text"
                                name="fullname"
                                className="otp-field"
                                id="digit-1"
                                data-next="digit-2"
                                maxLength={1}
                              />
                              <input
                                type="text"
                                name="fullname"
                                className="otp-field"
                                id="digit-2"
                                data-next="digit-3"
                                data-previous="digit-1"
                                maxLength={1}
                              />
                              <input
                                type="text"
                                name="fullname"
                                className="otp-field"
                                id="digit-3"
                                data-next="digit-4"
                                data-previous="digit-2"
                                maxLength={1}
                              />
                              <input
                                type="text"
                                name="fullname"
                                className="otp-field"
                                id="digit-4"
                                data-previous="digit-3"
                                maxLength={1}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <span className="small forgot mt-0 mb-3">
                            Resend OTP <span>in 00:30</span>
                          </span>
                        </div>
                        <a className="submit m-auto" href="registration">
                          Continue
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/*step2 ends*/}
              {/*step3 starts*/}
              {/*  <div class="step3" id="step3">
                  <div class="row r-row login-row">
  
                      <div class="col-md-6 bg-bg login-bg">
                      </div>
  
  
                      <div class="col-md-6 modal-6-col">
                          <form method="post" class="login-form">
                              <div class="row">
  
                                  <div class="col-md-12">
                                      <p class="login-text text-black mb-3">Your Address</p>
                                  </div>
  
                                  
                                  <div class="col-md-12">
                                      <div class="field inputText-cont form-group">
                                          <input type="text" name="fullname" placeholder="Full Name">
                                      </div>
                                      <div class="field inputText-cont form-group">
                                          <input type="text" name="fullname" placeholder="Email Address">
                                      </div>
                                      <div class="field inputText-cont form-group">
                                          <input type="text" name="fullname" placeholder="Address">
                                      </div>
                                      <div class="field inputText-cont form-group">
                                          <input type="text" name="fullname" placeholder="Locality">
                                      </div>
                                  </div>
  
  
  
                                  <div class="col-md-12 mb-3">
                                      <input type="checkbox" name="fullname">
                                      <span class="small forgot mt-0">Agree to terms and conditions</span>
                                  </div>
  
                                  <a class="submit m-auto">Continue</a>
  
  
                              </div>
                          </form>
  
                      </div>
                  </div>
                </div> */}
              {/*step3 ends*/}
              {/*step4 starts*/}
              {/*  <div class="step4" id="step4">
                  <div class="row r-row login-row">
  
                      <div class="col-md-6 bg-bg login-bg">
                      </div>
  
  
                      <div class="col-md-6 modal-6-col">
                          <form method="post" class="login-form">
                              <div class="row text-center">
  
                                  <div class="col-md-12">
                                      <p class="done-text text-black mb-3">Hii, You're Done!</p>
                                      <p class="resend mt-3">Start using Indiana
                                      </p>
                                  </div>
  
                                  <a class="submit m-auto">Continue</a>
  
  
                              </div>
                          </form>
  
                      </div>
                  </div>
                </div> */}
              {/*step4 starts*/}
            </div>
            {/* Modal footer */}
            <div className="modal-footer">
              {/*  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
            </div>
          </div>
        </div>
      </div>
      {/*login modal ends*/}
      {/* JavaScript Includes */}
      {/*other necessary scripts*/}
      {/*code for applying a black overlay when mob menu opens*/}
      <div id="overlay" onclick="on()" />
      {/*script for applying a black overlay when mob menu opens, 
  also add onclick off function to close button in mobile menu,
  onclick on function to menu button in mobile menu
  */}
      {/*footer ends*/}
      {/* Swiper JS */}
      {/*toggle starts for search*/}
      {/*toggle ends*/}
      {/* <p>Enter your HTML here</p> */}
    </div>
  );
};

export default Main;
