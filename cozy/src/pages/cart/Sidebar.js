import React, { useContext, useEffect } from "react";

import { Link } from "react-router-dom";

import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

import CartItem from "./CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import "../cart/Sidebar.css";
import { useState } from "react";
import { DataCardContext } from "../Products/Context";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, itemAmount, total } = useContext(CartContext);

  const ctx = useContext(DataCardContext);

  return (
    <div
      className={`${isOpen ? "end-0 ahmad" : "d-none  "} 
    "w-100 bg-white  vh-100 shadow-lg md:w-35 top-0  col-lg-4 d-flex flex-column md:w-35vw lg:w-40vw xl:max-width-xl-75 px-lg-4 py-3 transition-all duration-300 ahmad"`}
    >
      <div className="d-flex align-items-center justify-content-between border-bottom py-3">
        <div className="text-uppercase font-bold ">
          Shopping Cart ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 d-flex align-items-center justify-content-center"
        >
          <IoIosCloseCircleOutline className="text-3xl" />
        </div>
      </div>
      <div className="flex flex-column gap-2 h-100 border-bottom  overflow-x-hidden">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-column gap-3 mt-4">
        <div className="d-flex justify-content-between align-items-center">
          <div className="font-weight-bold">
            <span className="mr-2">Subtotal:</span> $
            {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-3  text-light w-25 h-100 d-flex justify-content-center align-items-center fs-6 mb-1"
          >
            <FiTrash2 style={{ color: "red" }} />
          </div>
        </div>
        {ctx.user ? (
          <>
            {" "}
            <Link
              to={"/Checkout"}
              className=" text-white font-weight-medium d-flex justify-content-center align-items-center p-3 w-100 btn-checkout"
            >
              Checkout
            </Link>{" "}
          </>
        ) : (
          <>
            <Link
              to={"/Login"}
              className=" text-white font-weight-medium d-flex justify-content-center align-items-center p-3 w-100 btn-checkout"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
