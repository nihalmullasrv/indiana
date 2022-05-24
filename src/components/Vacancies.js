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

const Vacancies = () => {
  return (
    <div>
      {/*search result starts*/}
      <div className="container-fluid no-padding search-result l-grey-bg">
        <div className="container-fluid wel-top-bottom pd-2-35 ">
          <p className="form-head text-center">
            Latest <span>Vacancies</span>
          </p>
          <div className="row">
            <div className="col-lg-6 col-md-12 pr-lg-1">
              <div className="search-box job-search" id="job-desc">
                <figure className="job-img">
                  <img src="img/icons/hat.svg" alt="logo" className="logo" />
                </figure>
                <div className="row">
                  <div className="col-xl-7 col-lg-12 col-md-7 col-sm-7">
                    <h6 className="mb-1 search-head">Chemistry - Kerala</h6>
                    <p className="search-para">Teacher</p>
                  </div>
                  {/*8*/}
                  <div className="col-xl-5 col-lg-12 col-md-5 col-sm-5">
                    <div className="d-flex buttons-div">
                      {/* <a class="btn s-btn">Save this job <i class=" fa-regular fa-bookmark"></i></a>
              <a class="btn ml-2 apply-btn">Apply Now <i class="fa-regular fa-paper-plane"></i></a> */}
                      <a className="more-light right mr-2 save-btn">
                        Save
                        <span className="more-span" />
                      </a>
                      <a className="more-light right apply-now">
                        Apply
                        <span className="more-span" />
                      </a>
                    </div>
                  </div>
                  {/*4*/}
                </div>
                {/*row*/}
                <div className>
                  <div className="row">
                    <ul className="list-unstyled w-100 top-list">
                      <li className="di-flex border-right-none">
                        <span>Posted Date:</span>
                        <p className="mb-0 job-date">02 June 2021</p>
                      </li>
                      <li className="di-flex border-right-none">
                        <span>Openings:</span>
                        <p className="mb-0 job-no">1</p>
                      </li>
                      <li className="di-flex border-right-none">
                        <a className="share">
                          <i className="fa-solid fa-share-nodes" /> Share this
                          post
                        </a>
                      </li>
                      <li className="di-flex ml-auto last">
                        <h6 className="mb-0 job-id">ID: JOB25623GFIG3</h6>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="di-flex">
                  <div className="row r-row mr-0">
                    <ul className="list-unstyled job-desc">
                      <li>
                        <img
                          src="img/icons/certificate1.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">subject</p>
                          <h6>Chemistry</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/certificate.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Classes</p>
                          <h6>class 5</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/salary.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">State</p>
                          <h6>Kerala</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/hat.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">District</p>
                          <h6 className="no-bold">Kannur</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/clock.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Mode of class</p>
                          <h6 className="no-bold">Offline</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/language.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Syllabus</p>
                          <h6 className="no-bold">State Syllabus</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/language.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Medium</p>
                          <h6 className="no-bold">English</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/graduation-cap.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Qualification</p>
                          <h6 className="no-bold">Msc</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/school.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Gender</p>
                          <h6 className="no-bold">Female</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/school.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Salary</p>
                          <h6 className="no-bold">Not Mentioned</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Provisions</p>
                          <h6 className="no-bold">D.El.Ed, TET, TTC</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Experience</p>
                          <h6 className="no-bold">5</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Eligibility</p>
                          <h6 className="no-bold">Eligibility</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Campus Type</p>
                          <h6 className="no-bold">Campus Type</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">
                            Mode of Campus
                          </p>
                          <h6 className="no-bold">Mode of Campus</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">
                            Mode of interview
                          </p>
                          <h6 className="no-bold">Online</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Management</p>
                          <h6 className="no-bold">Kerala</h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/*row*/}
                </div>
                <div className="text-right">
                  <a
                    className="share black show-more-btn"
                    onclick="myFunction()"
                  >
                    Show <span className="s-more">More Details</span>
                    <span className="s-less">Less</span>{" "}
                    <i className="fa-solid fa-chevron-down" />
                  </a>
                </div>
              </div>
              {/*search box*/}
            </div>
            {/*6*/}
            <div className="col-lg-6 col-md-12 pl-lg-1">
              <div className="search-box job-search" id="two-job-desc">
                <div className="row">
                  <div className="col-xl-7 col-lg-12 col-md-7 col-sm-7">
                    <h6 className="mb-1 search-head">Chemistry - Kerala</h6>
                    <p className="search-para">Teacher</p>
                  </div>
                  {/*8*/}
                  <div className="col-xl-5 col-lg-12 col-md-5 col-sm-5">
                    <div className="d-flex buttons-div">
                      {/* <a class="btn s-btn">Save this job <i class=" fa-regular fa-bookmark"></i></a>
              <a class="btn ml-2 apply-btn">Apply Now <i class="fa-regular fa-paper-plane"></i></a> */}
                      <a className="more-light right mr-2 save-btn">
                        Save
                        <span className="more-span" />
                      </a>
                      <a className="more-light right apply-now">
                        Apply <span className="more-span" />
                      </a>
                    </div>
                  </div>
                  {/*4*/}
                </div>
                {/*row*/}
                <div className>
                  <div className="row">
                    <ul className="list-unstyled w-100 top-list">
                      <li className="di-flex border-right-none">
                        <span>Posted Date:</span>
                        <p className="mb-0 job-date">02 June 2021</p>
                      </li>
                      <li className="di-flex border-right-none">
                        <span>Openings:</span>
                        <p className="mb-0 job-no">1</p>
                      </li>
                      <li className="di-flex border-right-none">
                        <a className="share">
                          <i className="fa-solid fa-share-nodes" /> Share this
                          post
                        </a>
                      </li>
                      <li className="di-flex ml-auto last">
                        <h6 className="mb-0 job-id">ID: JOB25623GFIG3</h6>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="di-flex">
                  <div className="row r-row mr-0">
                    <ul className="list-unstyled job-desc">
                      <li>
                        <img
                          src="img/icons/certificate1.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">subject</p>
                          <h6>Chemistry</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/certificate.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Classes</p>
                          <h6>class 5</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/salary.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">State</p>
                          <h6>Kerala</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/hat.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">District</p>
                          <h6 className="no-bold">Kannur</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/clock.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Mode of class</p>
                          <h6 className="no-bold">Offline</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/language.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Syllabus</p>
                          <h6 className="no-bold">State Syllabus</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/language.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Medium</p>
                          <h6 className="no-bold">English</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/graduation-cap.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Qualification</p>
                          <h6 className="no-bold">Msc</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/school.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Gender</p>
                          <h6 className="no-bold">Female</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/school.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Salary</p>
                          <h6 className="no-bold">Not Mentioned</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Provisions</p>
                          <h6 className="no-bold">D.El.Ed, TET, TTC</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Experience</p>
                          <h6 className="no-bold">5</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Eligibility</p>
                          <h6 className="no-bold">Eligibility</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Campus Type</p>
                          <h6 className="no-bold">Campus Type</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">
                            Mode of Campus
                          </p>
                          <h6 className="no-bold">Mode of Campus</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">
                            Mode of interview
                          </p>
                          <h6 className="no-bold">Online</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Management</p>
                          <h6 className="no-bold">Kerala</h6>
                        </div>
                      </li>
                      {/*  <li class="ml-auto last">
              
         </li> */}
                    </ul>
                  </div>
                  {/*row*/}
                </div>
                <div className="text-right">
                  <a
                    className="share black show-more-btn"
                    onclick="myFunction2()"
                  >
                    Show <span className="s-more">More Details</span>
                    <span className="s-less">Less</span>{" "}
                    <i className="fa-solid fa-chevron-down" />
                  </a>
                </div>
              </div>
            </div>
            {/*6*/}
            <div className="col-lg-6 col-md-12 pr-lg-1">
              <div className="search-box job-search" id="job-desc3">
                <figure className="job-img">
                  <img src="img/icons/hat.svg" alt="logo" className="logo" />
                </figure>
                <div className="row">
                  <div className="col-xl-7 col-lg-12 col-md-7 col-sm-7">
                    <h6 className="mb-1 search-head">Chemistry - Kerala</h6>
                    <p className="search-para">Teacher</p>
                  </div>
                  {/*8*/}
                  <div className="col-xl-5 col-lg-12 col-md-5 col-sm-5">
                    <div className="d-flex buttons-div">
                      {/* <a class="btn s-btn">Save this job <i class=" fa-regular fa-bookmark"></i></a>
              <a class="btn ml-2 apply-btn">Apply Now <i class="fa-regular fa-paper-plane"></i></a> */}
                      <a className="more-light right mr-2 save-btn">
                        Save
                        <span className="more-span" />
                      </a>
                      <a className="more-light right apply-now">
                        Apply
                        <span className="more-span" />
                      </a>
                    </div>
                  </div>
                  {/*4*/}
                </div>
                {/*row*/}
                <div className>
                  <div className="row">
                    <ul className="list-unstyled w-100 top-list">
                      <li className="di-flex border-right-none">
                        <span>Posted Date:</span>
                        <p className="mb-0 job-date">02 June 2021</p>
                      </li>
                      <li className="di-flex border-right-none">
                        <span>Openings:</span>
                        <p className="mb-0 job-no">1</p>
                      </li>
                      <li className="di-flex border-right-none">
                        <a className="share">
                          <i className="fa-solid fa-share-nodes" /> Share this
                          post
                        </a>
                      </li>
                      <li className="di-flex ml-auto last">
                        <h6 className="mb-0 job-id">ID: JOB25623GFIG3</h6>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="di-flex">
                  <div className="row r-row mr-0">
                    <ul className="list-unstyled job-desc">
                      <li>
                        <img
                          src="img/icons/certificate1.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">subject</p>
                          <h6>Chemistry</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/certificate.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Classes</p>
                          <h6>class 5</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/salary.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">State</p>
                          <h6>Kerala</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/hat.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">District</p>
                          <h6 className="no-bold">Kannur</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/clock.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Mode of class</p>
                          <h6 className="no-bold">Offline</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/language.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Syllabus</p>
                          <h6 className="no-bold">State Syllabus</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/language.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Medium</p>
                          <h6 className="no-bold">English</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/graduation-cap.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Qualification</p>
                          <h6 className="no-bold">Msc</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/school.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Gender</p>
                          <h6 className="no-bold">Female</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/school.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Salary</p>
                          <h6 className="no-bold">Not Mentioned</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Provisions</p>
                          <h6 className="no-bold">D.El.Ed, TET, TTC</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Experience</p>
                          <h6 className="no-bold">5</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Eligibility</p>
                          <h6 className="no-bold">Eligibility</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Campus Type</p>
                          <h6 className="no-bold">Campus Type</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">
                            Mode of Campus
                          </p>
                          <h6 className="no-bold">Mode of Campus</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">
                            Mode of interview
                          </p>
                          <h6 className="no-bold">Online</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Management</p>
                          <h6 className="no-bold">Kerala</h6>
                        </div>
                      </li>
                      {/*  <li class="ml-auto last">
              
         </li> */}
                    </ul>
                  </div>
                  {/*row*/}
                </div>
                <div className="text-right">
                  <a
                    className="share black show-more-btn"
                    onclick="myFunction3()"
                  >
                    Show <span className="s-more">More Details</span>
                    <span className="s-less">Less</span>{" "}
                    <i className="fa-solid fa-chevron-down" />
                  </a>
                </div>
              </div>
              {/*search box*/}
            </div>
            {/*6*/}
            <div className="col-lg-6 col-md-12 pl-lg-1">
              <div className="search-box job-search" id="job-desc4">
                <div className="row">
                  <div className="col-xl-7 col-lg-12 col-md-7 col-sm-7">
                    <h6 className="mb-1 search-head">Chemistry - Kerala</h6>
                    <p className="search-para">Teacher</p>
                  </div>
                  {/*8*/}
                  <div className="col-xl-5 col-lg-12 col-md-5 col-sm-5">
                    <div className="d-flex buttons-div">
                      {/* <a class="btn s-btn">Save this job <i class=" fa-regular fa-bookmark"></i></a>
              <a class="btn ml-2 apply-btn">Apply Now <i class="fa-regular fa-paper-plane"></i></a> */}
                      <a className="more-light right mr-2 save-btn">
                        Save
                        <span className="more-span" />
                      </a>
                      <a className="more-light right apply-now">
                        Apply <span className="more-span" />
                      </a>
                    </div>
                  </div>
                  {/*4*/}
                </div>
                {/*row*/}
                <div className>
                  <div className="row">
                    <ul className="list-unstyled w-100 top-list">
                      <li className="di-flex border-right-none">
                        <span>Posted Date:</span>
                        <p className="mb-0 job-date">02 June 2021</p>
                      </li>
                      <li className="di-flex border-right-none">
                        <span>Openings:</span>
                        <p className="mb-0 job-no">1</p>
                      </li>
                      <li className="di-flex border-right-none">
                        <a className="share">
                          <i className="fa-solid fa-share-nodes" /> Share this
                          post
                        </a>
                      </li>
                      <li className="di-flex ml-auto last">
                        <h6 className="mb-0 job-id">ID: JOB25623GFIG3</h6>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="di-flex">
                  <div className="row r-row mr-0">
                    <ul className="list-unstyled job-desc">
                      <li>
                        <img
                          src="img/icons/certificate1.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">subject</p>
                          <h6>Chemistry</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/certificate.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Classes</p>
                          <h6>class 5</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/salary.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">State</p>
                          <h6>Kerala</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/hat.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">District</p>
                          <h6 className="no-bold">Kannur</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/clock.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Mode of class</p>
                          <h6 className="no-bold">Offline</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/language.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Syllabus</p>
                          <h6 className="no-bold">State Syllabus</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/language.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Medium</p>
                          <h6 className="no-bold">English</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/graduation-cap.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Qualification</p>
                          <h6 className="no-bold">Msc</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/school.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Gender</p>
                          <h6 className="no-bold">Female</h6>
                        </div>
                      </li>
                      <li>
                        <img
                          src="img/icons/school.svg"
                          alt="icon"
                          className="loadimg img-fluid work-icon"
                        />
                        <div className="job-b">
                          <p className="search-para grey mb-1">Salary</p>
                          <h6 className="no-bold">Not Mentioned</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Provisions</p>
                          <h6 className="no-bold">D.El.Ed, TET, TTC</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Experience</p>
                          <h6 className="no-bold">5</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Eligibility</p>
                          <h6 className="no-bold">Eligibility</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Campus Type</p>
                          <h6 className="no-bold">Campus Type</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">
                            Mode of Campus
                          </p>
                          <h6 className="no-bold">Mode of Campus</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">
                            Mode of interview
                          </p>
                          <h6 className="no-bold">Online</h6>
                        </div>
                      </li>
                      <li>
                        <div className="job-b">
                          <p className="search-para grey mb-1">Management</p>
                          <h6 className="no-bold">Kerala</h6>
                        </div>
                      </li>
                      {/*  <li class="ml-auto last">
              
         </li> */}
                    </ul>
                  </div>
                  {/*row*/}
                </div>
                <div className="text-right">
                  <a
                    className="share black show-more-btn"
                    onclick="myFunction4()"
                  >
                    Show <span className="s-more">More Details</span>
                    <span className="s-less">Less</span>
                    <i className="fa-solid fa-chevron-down" />
                  </a>
                </div>
              </div>
            </div>
            {/*6*/}
          </div>
          <div className="text-center">
            {" "}
            <a className="more-light right mt-4" href="search">
              {" "}
              View all <span className="more-span" />
            </a>
          </div>
        </div>
      </div>
      {/*search result ends*/}
    </div>
  );
};

export default Vacancies;
