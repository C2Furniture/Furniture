import "../styles files/login.css";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [userInputs, setUserInputs] = useState({
    userEmail: "",
    userPass: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUserInputs = JSON.parse(localStorage.getItem("userInputs"));

    // Check if user inputs match with saved user inputs
    if (
      userInputs.userEmail === savedUserInputs.userEmail &&
      userInputs.userPass === savedUserInputs.userPass
    ) {
      // If match, redirect to home page
      navigate("/Home");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const onChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="half ">
        <div className="bg order-1 order-md-2 bgImage"></div>
        <div className="contents order-2 order-md-1">
          <div className="container mb-5">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6">
                <div className="form-block">
                  <div className="text-center mb-5">
                    <h3>
                      Login to <strong>COZY</strong>
                    </h3>
                  </div>
                  <form action="#" method="post" onSubmit={handleSubmit}>
                    <div className="input-container mt-5 mb-5">
                      <input
                        onChange={onChange}
                        name="userEmail"
                        type="email"
                        id="userEmail"
                        required
                        className="form-input"
                      />
                      <label htmlFor="userEmail" className="label">
                        Email
                      </label>
                      <div className="underline"></div>
                    </div>

                    <div className="input-container mt-5 mb-5">
                      <input
                        onChange={onChange}
                        type="password"
                        name="userPass"
                        id="userPass"
                        required
                        className="form-input"
                        autoComplete="on"
                      />
                      <label htmlFor="userPass" className="label">
                        Password
                      </label>
                      <div className="underline"></div>
                    </div>

                    <div className="d-sm-flex mb-5 align-items-center">
                      <span className="ml-auto">
                        <a href="#" className="forgot-pass">
                          Forgot Password
                        </a>
                      </span>
                    </div>
                    <button className="uiverse-btn " type="submit">
                      <span className="hover-underline-animation">Login</span>
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
                    </button>

                    <div className="d-sm-flex mb-5 align-items-center">
                      <span className="ml-auto">
                        <p className="haveAccount">
                          Not a member ?{" "}
                          <Link to="/SignUp" className="haveAccountLink">
                            Signup now
                          </Link>
                        </p>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
