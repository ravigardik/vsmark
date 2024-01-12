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
import { Button, Card, Carousel, Image } from "react-bootstrap";
import Slider from "react-slick";
import Authuser from "../Aauthentication/Authuser";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Categry from "../Pages/Categry";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Slider from 'react-slick';

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={onClick}
    />
  );
}

const Index = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2,
          // infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 1,
          // initialSlide: 2
        },
      },
    ],
  };

  const { http, token } = Authuser();
  const [Slider1, SetSlider1] = useState([]);
  const [Product, SetProduct] = useState([]);
  const [Category, SetCategory] = useState([]);
  const [Brand, SetBrand] = useState([]);
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
    http
      .get(`/brands`)
      .then((res) => {
        SetBrand(res.data.brands);
      })
      .catch((e) => {
        // console.log(e);
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
  const settings12 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid">
        <Carousel cols={2} rows={1} gap={10} loop>
          {Slider1.map((slider) => (
            <Carousel.Item>
              <img width="100%" src={slider.slider_image} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="container-fluid deal">
        <h1 className=""> Best Deals</h1>
      </div>
      {/* <div className="container">
        <img className="banner12" src="https://vsmart.ajspire.com/uploads/slider/1667297122.jpg" />
      </div> */}
      <div className="container">
        <Image
          src="https://vsmart.ajspire.com/uploads/slider/1667297122.jpg"
          fluid
        />
      </div>

      {/* {/ slick slider map /} */}
      <div className="container mt-5">
        <Slider {...settings}>
          {Category.map((cat, index) => (
            <div key={index}>
              <img
                src={cat.category_banner}
                className="hj1"
                alt={`Image ${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      {/* {/ end slick slider map /} */}
      {/* small card  start */}

      <br />
      <div className="container-fluid deal">
        <h1 className="">Our Featured Items </h1>
      </div>

      <div className="container-fluid">
        <div className="row cardrow ">
          {Product.filter((pro) => pro.featured === 1).map((product) => (
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

      {/* <div className="round spin">
        <div className="insider"></div>
      </div> */}
      <div className="container-fluid deal">
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

      {/*  small cards end  */}
      {/* <Categry /> */}
      <br />
      {/* <div className="container">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=f5f5f5"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=eee"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=e5e5e5"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Third slide label</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div> */}
      <br></br>
      <div className="container-fluid deal">
        <h1 className="">Product By Brands </h1>
      </div>
      <div className="container-fluid  brands-back">
        <Slider className="pt-5" {...settings}>
          {Brand.slice(0, 12).map((brands) => (
            <div className=" brand-box ">
              <Link className="p-3" to={`/product-shop/${brands.brand_id}`}>
                {brands.brand_name}
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <br />
    </>
  );
};

export default Index;
