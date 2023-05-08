import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../styles files/navbar.css";

const Navbar = () => {
  // const [userName, setSavedUserName] = useState(null);
  const [savedUserInputs, setSavedUser] = useState(
    JSON.parse(localStorage.getItem("userInputs"))
  );

  // useEffect(() => {
  //   console.log(savedUserInputs);
  //   if (savedUserInputs) {
  //     setSavedUserName(savedUserInputs.userName);
  //   }
  // }, [savedUserInputs]);

  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleToggleSideMenu = () => setShowSideMenu(!showSideMenu);

  const handleLogout = () => {
    localStorage.removeItem("userInputs");
    setSavedUser(null);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleToggleSideMenu}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>

          <Link className="navbar-brand mt-2 mt-lg-0" to="/Home">
            <strong>COZY</strong>
          </Link>

          <div
            className={`collapse navbar-collapse ${showSideMenu ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item p-2">
                <Link className="nav-link" to="/Home">
                  Home
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="/Products">
                  Products
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="/AboutUs">
                  About
                </Link>
              </li>
              <li className="nav-item p-2">
                <Link className="nav-link" to="/ContactUs">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <Link className="text-reset me-3" to="/Cart">
              <AiOutlineShoppingCart />
            </Link>

            {savedUserInputs ? (
              <>
                {/* <span>{userName}</span> */}
                <button className="logoutBtn"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Log out
                </button>
              </>
            ) : (
              <Link className="loginLink nav-link" to="/Login">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </>
  );
};

export default Navbar;
