import React from "react";
import "./About.css";
import Malak from "./Images/malak.jpeg";
import abood from "./Images/246831204_4478374352277316_8270618522181539930_n.jpg";
import imgTeam from "./Images/Portrait_Placeholder.png";
import { FaCarSide, FaHandHoldingUsd, FaMedal } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <section className="aboutt">
        <div className="container">
          <div className="row ">
            <div className="col-lg-4 col-md-4">
              <div className="about1"></div>
            </div>
            <div className="col-lg-8 col-md-8">
              <div className="services">
                <h1 className="m-5">About Cozy</h1>
                <p className=" m-5 aboutText">
                  We curate inspiration for the home, connecting the creative
                  work of artisans and designers to people and places around the
                  world.
                </p>

                <div class="cta">
                  <span class="hover-underline-animation">Our value</span>
                  <svg
                    viewBox="0 0 46 16"
                    height="10"
                    width="30"
                    xmlns="http://www.w3.org/2000/svg"
                    id="arrow-horizontal"
                  >
                    <path
                      transform="translate(30)"
                      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                      data-name="Path 10"
                      id="Path_10"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="container mx-auto mt-5">
                <div className="row icon0 text-center">
                  <div className="col-sm-4 col-6 ">
                    <div className="mt-5 ">
                      <FaMedal className=" ourValueIcon" />
                      <p className="ourValues">Quality Product</p>
                    </div>
                  </div>

                  <div className="col-sm-4 col-6">
                    <div className="mt-5">
                      <FaHandHoldingUsd className=" ourValueIcon" />
                      <p className="ourValues">100% Cash Back</p>
                    </div>
                  </div>
                  <div className="col-sm-4 col-6">
                    <div className="mt-5">
                      <FaCarSide className=" ourValueIcon" />
                      <p className="ourValues"> Free Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ourWorksSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 ">
              <h2 className="ourWorkHeader">Our Works</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-2 col-md-2 "></div>
            <div className="col-lg-8 col-md-8 ">
              <p className="ourWorkP">
                Cozy is a member of the Otto Group and employs 7,500 associates
                across Cozy. With over 100 stores and franchise partners in 9
                countries, we are an international destination for contemporary
                and modern furniture, housewares and decor that help people
                Welcome Life In.
              </p>
            </div>
            <div className="col-lg-2 col-md-2 "></div>
          </div>
        </div>
      </section>

      <div className="container text-center mt-4 mb-5 pb-5">
        <h2>Our team</h2>

        <div className="card-group about ">
          <div className="card rounded ">
            <img className="card-img-top imgAbout" src={imgTeam} title="img" />
            <div className="card-body">
              <h5 className="card-title">Malak Al-farwan</h5>
              <p className="card-text">alfarwanmalak@gmail.com</p>
            </div>
          </div>
          <div className="card rounded">
            <img className="card-img-top imgAbout" src={imgTeam} title="img" />
            <div className="card-body">
              <h5 className="card-title">Abdalrahman Drobi</h5>
              <p className="card-text">avdalrahman.drobi@gmail.com</p>
            </div>
          </div>
          <div className="card rounded">
            <img className="card-img-top imgAbout" src={abood} title="img" />
            <div className="card-body">
              <h5 className="card-title">Abdulrahman Al-haleme</h5>
              <p className="card-text">abdulrahman.alhaleme@gmail.com</p>
            </div>
          </div>
          <div className="card rounded">
            <img className="card-img-top imgAbout" src={imgTeam} title="img" />
            <div className="card-body">
              <h5 className="card-title">Hind Hudeib</h5>
            </div>
          </div>
          <div className="card rounded">
            <img className="card-img-top imgAbout" src={imgTeam} title="img" />
            <div className="card-body">
              <h5 className="card-title">Ahmad Badran</h5>
              <p className="card-text">alfarwanmalak@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;