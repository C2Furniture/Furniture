import React from "react";
import { color, motion } from "framer-motion";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles files/product-card.css";
import { AiOutlinePlus , AiOutlineShoppingCart } from "react-icons/ai";


const ProductCard = ({ item }) => {
  return (
    <Col lg="2" md="4" className="mb-5 mt-5 card__container text-center pt-2">
      <div className="Product__item">
        <div className="product__img">
          <motion.img whileHover={{ scale: 0.9 }} src={item.img} alt="" />
        </div>
        <div className="p-2 product__info ">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.name}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between p-2 ">
          <span  className="price__card">{item.price} JD</span>
          <motion.span whileTap={{ scale: 1.2 }}>
            <i>
           <AiOutlineShoppingCart/>
            </i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};
// 
export default ProductCard;
