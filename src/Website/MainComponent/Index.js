import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import Slider from "react-slick";
import Authuser from "../Aauthentication/Authuser";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';

const Index = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { http, token } = Authuser();
  const [Slider1, SetSlider1] = useState([]);
  const [Product, SetProduct] = useState([]);
  const [Category, SetCategory] = useState([]);
  const getslider = () => {
    http
      .get(`/banners`)
      .then((res) => {
        SetSlider1(res.data.banners);
      })
      .catch((e) => {
        console.log(e);
      });
    http
      .get(`/products`)
      .then((res) => {
        SetProduct(res.data.products.data);
      })
      .catch((e) => {
        console.log(e);
      });
    http
      .get(`/categories`)
      .then((res) => {
        SetCategory(res.data.categories);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    hide();
    getslider();
  }, []);

  // hide show buttons
  function hide() {
    document.getElementById("dip").hidden = true;
  }
  function show() {
    document.getElementById("dip").hidden = false;
  }

  const addTocart = (product_id) => {
    console.log(product_id);
    http
      .get(`/add-to-cart/${product_id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const addTowish = (product_id) => {
    console.log(product_id);
    http
      .get(`/add-to-wishlist/${product_id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Carousel cols={2} rows={1} gap={10} loop>
        {Slider1.map((slider) => (
          <Carousel.Item>
            <img width="100%" src={slider.slider_image} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="container-fluide deal">
        <h1 className=""> Best Deals</h1>
      </div>
      <div className="container ">
        <img src="https://vsmart.ajspire.com/uploads/slider/1667297122.jpg" />
      </div>

      {/* carousol */}
      {/* categories caroseol start */}
      <div className="container ">
        <Slider {...settings}>
          {Category.map((category) => (
            <div>
              <div
                className="ducar"
                style={{
                  background: `url(${category.category_banner})`,
                }}
              >
                <h6 className="">{category.category_name}</h6>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* small card  start */}

      <br />
      <div className="container-fluide deal">
        <h1 className="">Our Featured Items </h1>
      </div>

      <div className="container-fluid">
        <div className="row cardrow ">
          {Product.slice(0, 8)
            .filter((pro) => pro.featured === 1)
            .map((product) => (
              <div class="col-md-4 col-md-6 col-sm-1 smallcard">
                <img src={product.product_image} class="cardsm" alt="..." />
                <div class="rating">
                  <h5 class="card-title text-black text-bold">
                    {product.english_name}
                  </h5>

                  <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                  </div>
                  <strike>{product.mrp_price} </strike>

                  <h5 className="salep"> Rs. {product.sale_price} </h5>
                </div>
              </div>
            ))}
          {/* magic card */}
        </div>
      </div>

      <br />

      <div className="round spin">
        <div className="insider"></div>
      </div>
      <div className="container-fluide deal">
        <h1 className="">Collect New Items </h1>
      </div>
      {/* small cards start  */}

      <div class="container-fluid ">
        <div class="row justi">
          {Product.slice(0, 3).map((product) => (
            <div className="col-lg-3 col-md-5 col-sm-12 m-2 card">
              <div className="product-tumb">
                <img className="cardimg " src={product.product_image} alt />
              </div>
              <div className="product-details">
                <span className="product-catagory">
                  {product.category_name}
                </span>
                <h4 className="title">
                  <a href>{product.english_name}</a>
                </h4>
                <p>{product.product_description}</p>
                <div className="product-bottom-details">
                  <div className="product-price">
                    <small>{product.mrp_price}</small>
                    {product.sale_price}
                  </div>

                  <div className="product-links margin1">
                    {token ? (
                      <abbr title="Add to WishList">
                        <Link
                          className="links-details"
                          onClick={() => addTowish(product.product_id)}
                        >
                          <i className="fa fa-heart proicon" />
                        </Link>
                      </abbr>
                    ) : (
                      <abbr title="Add to WishList">
                        <Link className="links-details" to={"/login"}>
                          <i className="fa fa-heart proicon" />
                        </Link>
                      </abbr>
                    )}

                    {token ? (
                      <abbr title="Add to Cart">
                        <Link
                          className="add-cart active"
                          onClick={() => addTocart(product.product_id)}
                        >
                          <i className="fa fa-shopping-cart "> </i>
                        </Link>
                      </abbr>
                    ) : (
                      <abbr title="Add to Cart">
                        <Link to={"/login"}>
                          <i className="fa fa-shopping-cart "> </i>
                        </Link>
                      </abbr>
                    )}

                    <Link to="/">
                      <i class="fa-solid fa-eye proicon"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div class="container-fluid " id="dip">
          <div class="row justi">
            {Product.slice(4, 20).map((product) => (
              <div className="col-lg-3 col-md-5 col-sm-12 m-2 card">
                <div className="product-tumb">
                  <img className="cardimg " src={product.product_image} alt />
                </div>
                <div className="product-details">
                  <span className="product-catagory">
                    {product.category_name}
                  </span>
                  <h4 className="title">
                    <a href>{product.english_name}</a>
                  </h4>
                  <p>{product.product_description}</p>
                  <div className="product-bottom-details">
                    <div className="product-price">
                      <small>{product.mrp_price}</small>
                      {product.sale_price}
                    </div>

                    <div className="product-links">
                      <Link to="/">
                        <i className="fa fa-heart proicon" />
                      </Link>
                      <Link to="/">
                        <i className="fa fa-shopping-cart proicon" />
                      </Link>
                      <Link to="/">
                        <i class="fa-solid fa-eye proicon"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <div className="container-fluid btnss row">
          <div className="col-lg-6  me-2 button">
            <button className="btn11 " onClick={hide}>
              <i class="fa-solid fa-eye-slash"></i> Hide Element{" "}
            </button>
          </div>
          <div className="col-lg-5  button">
            <button className=" btn11" onClick={show}>
              <i class="fa-solid fa-eye"></i> Show Element{" "}
            </button>
          </div>
        </div>
      </div>
      {/*  small cards end  */}

      <br />
    </>
  );
};

export default Index;
