import React, { useState, useEffect } from "react";
// import UncontrolledExample from "./Al-Haleme components/Slider";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../Home/images/hero-img.png";
import { Link } from "react-router-dom";
import "../styles files/home.css";
import Services from "../Home/services/Services";
import { motion } from "framer-motion";
import ProductsList from "./UI/ProductsList";
import products from "../../products.json";
import trinding from "./products.js";
import Clock from "../Home/UI/Clock";
import UncontrolledExample from "./UI/Slider";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setbestSalesProducts] = useState([]);
  useEffect(() => {
    const filterTrendingProducts = products.products.filter(
      (item) => item.category === "chairs"
    );
    const filterBestSalesProducts = trinding.filter(
      (item) => item.category === "trinding"
    );
    filterTrendingProducts.pop();
    setTrendingProducts(filterTrendingProducts);
    setbestSalesProducts(filterBestSalesProducts);
  }, []);
  return (
    <>
      <section className="hero__section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content">
                <p className="hero__subtitle">Trending Product in 2023</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, tempora voluptates. Laborum pariatur, delectus
                  reiciendis amet doloribus quisquam expedita tenetur!
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                  <Link to="shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className="trending__products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="timer__count">
        <Container>
          <Row>
            <Col lg="6" md="6" className="count__down-col">
              <div className="clock__top-content">
                <h4 className=" text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className=" text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy__btn store__btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="6" className="text-end counter__img">
              <UncontrolledExample className="iimmgg" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="best__sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section__title">Best Sales</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
