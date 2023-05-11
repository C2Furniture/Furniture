import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineOrderedList,
} from "react-icons/ai";
import "../styles files/navbar.css";
import { DataCardContext } from "../Products/Context"

const Navbar = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const ctx = useContext(DataCardContext)


  const [showSideMenu, setShowSideMenu] = useState(false);

  const handleToggleSideMenu = () => setShowSideMenu(!showSideMenu);

  const handleLogout = () => {
    localStorage.removeItem("user");
    ctx.refresh();
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

          <div className="d-flex align-items-center ">
            {/* cart */}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer d-flex position-relative"
            >
              <BsFillCartFill className="cartIcon" />
              <div className=" position-absolute right-2 bottom-2 fs-12 w-50 h-75 d-flex justify-content-center align-items-center cartCount rounded-circle">
                {itemAmount}
              </div>
            </div>

            {ctx?.user ? (
              <>
                {/* <span>{userName}</span> */}
                <button
                  className="logoutBtn "
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
