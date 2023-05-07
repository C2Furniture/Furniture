import React from "react";
import "../styles files/footer.css";
import {
  AiOutlineCopyrightCircle,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="card bg-white">
          <div className="row mb-4">
            <div className="col-lg-4 col-sm-4 col-xs-4">
              <div className="footer-text footerUl">
                <div className="d-flex">
                  <h1 className="font-weight-bold mr-2 px-3"> COZY </h1>
                </div>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Commodi non pariatur numquam animi nam at impedit odit nisi.
                </p>
                <div className="social mt-2 mb-3 ">
                  <a href="" className="m-1">
                    <AiOutlineInstagram />
                  </a>
                  <a href="" className="m-1">
                    <AiOutlineFacebook />
                  </a>
                  <a href="" className="m-1">
                    {" "}
                    <AiFillTwitterCircle />
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2"></div>

            <div className="col-md-2 col-sm-2 col-xs-2">
              <h6 className="heading">Services</h6>
              <ul className="card-text footerUl">
                <li>IT Consulting</li>
                <li>Development</li>
                <li>Cloud</li>
                <li>Support</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <h6 className="heading">Industries</h6>
              <ul className="card-text footerUl">
                <li>Finance</li>
                <li>Public Sector</li>
                <li>Smart Office</li>
                <li>Retail</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <h6 className="heading">Company</h6>
              <ul className="card-text footerUl">
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Join Us</li>
              </ul>
            </div>
          </div>
          <div className="divider mb-2"> </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="pull-left">
                <p>
                  <AiOutlineCopyrightCircle /> 2023 Cozy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
