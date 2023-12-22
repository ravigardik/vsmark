import React, { useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { Link, useSearchParams } from "react-router-dom";
import Authuser from "../Aauthentication/Authuser";
// import '../../App.css'

const Header = ({ name, ...props }) => {
  const { http, user, token } = Authuser();
  const [Cart, setCart] = useState([]);
  const [Product, SetProduct] = useState([]);
  const [username, Setusername] = useState();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams(); // Use useSearchParams

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const [show, setShow] = useState(false);
  const [Catagory, SetCategory] = useState([]);
  const [Subcategories, SetSubcategories] = useState([]);
  const [Brand, SetBrand] = useState([]);
  const handleClose = () => setShow(false);
  // console.log(show);
  const handleShow = () => setShow(true);
  const getslider1 = () => {
    http
      .get(`/categories`)
      .then((res) => {
        SetCategory(res.data.categories);
        res.data.categories.forEach((categories) => {
          getsubcat(categories.category_id);
        });
      })
      .catch((e) => {
        // console.log(e);
      });
    http
      .get(`/products`)
      .then((res) => {
        SetProduct(res.data.products.data);
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
      })
      .catch((e) => {
        // console.log(e);
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

  // setting cart
  const getCartItem = () => {
    http
      .get(`/get-cart-list`)
      .then((res) => {
        setCart(res.data.cart);
        console.log("ravi" + res.data.cart);
        console.log("Roy is king");
      })
      .catch((e) => {
        // console.log(e);
      });
  };

  const getsubcat = (Cotagoryid) => {
    http
      .get(`/subcategories/${Cotagoryid}`)
      .then((res) => {
        const newsubcatagry = res.data.subcategories;
        SetSubcategories((previussubcaat) => {
          const filltersubcatagery = newsubcatagry.filter(
            (newsubcategory) =>
              !previussubcaat.some(
                (previs) =>
                  previs.subcategory_id === newsubcategory.subcategory_id
              )
          );
          return [...previussubcaat, ...filltersubcatagery];
        });
      })
      .catch((e) => {
        // console.log(e);
      });
  };
  useEffect(() => {
    getCartItem();
  }, [token]);
  useEffect(() => {
    getslider1();
    getsubcat();
  }, [token]);
  return (
    <>
      {/* <div className='container-fluid bg-success '>
        <div className='row'>
          <div className='col-lg-6'> 
        <b className='text-light'>Welcome to VS Mart in Your Dream Online Store! </b>
        </div>
        <div className='col-lg-6 px-5 text-end '>
          <Link to="/contact" className=''><p className='con ' >Contact</p></Link>
        </div>
        </div>
      </div> */}
      <div className="container-fluid header  bg-light">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light  navesh ms-5 ">
            <Link className="navbar-brand " to="/">
              <img className="roy" src="asset/img/logo.png" alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse  "
              id="navbarSupportedContent"
            >
              {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

          </form> */}

              <form className="search">
                <input
                  type="text"
                  placeholder="Search"
                  className="searchinput"
                  value={searchQuery}
                  onChange={handleInputChange}
                />
                {/* <Link to="/search">
                  <button type="button" className="searchbutton">
                    <i class="fa-solid fa-magnifying-glass fa-beat-fade"></i>
                  </button>
                </Link> */}

                <button className="searchbutton">
                  <Link
                    className="text-white"
                    to={`/search?query=${encodeURIComponent(searchQuery)}`}
                    onChange={() => setSearchParams({ query: searchQuery })}
                  >
                    <i class="fa-solid fa-magnifying-glass fa-beat-fade"></i>
                  </Link>
                </button>
              </form>

              <ul className="navbar-nav mr-auto ms-5">
                <li className="nav-item active ">
                  <Link className="nav-link" to="/">
                    <div className="icons ">
                      {" "}
                      <i class="fa-solid fa-solidi fa-wallet"></i>
                    </div>
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    <div className="icons">
                      {" "}
                      <i class="fa-solid fa-solidi fa-shuffle"></i>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link" to="/wishlist">
                    <div className="icons">
                      {" "}
                      <i class="fa-solid fa-solidi fa-heart"></i>
                    </div>
                  </Link> */}
                  {token ? (
                    <Link className="nav-link" to={"/wishlist"}>
                      <div className="icons">
                        {" "}
                        <i class="fa-solid fa-solidi fa-heart"></i>
                      </div>
                    </Link>
                  ) : (
                    <Link className="nav-link" to={"/login"}>
                      <div className="icons">
                        {" "}
                        <i class="fa-solid fa-solidi fa-heart"></i>
                      </div>
                    </Link>
                  )}
                </li>
                <li className="nav-item">
                  <Link
                    variant="primary"
                    onClick={handleShow}
                    className="me-2 nav-link"
                  >
                    <div className="icons">
                      {" "}
                      <i class="fa-solid fa-solidi fa-basket-shopping"></i>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    <div className="icons">
                      {" "}
                      <i class="fa-solid fa-solidi fa-user-tie"></i>
                      <p className="foot"> Login </p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* second header strat */}
      <div className="container-fluid">
        <nav className="navesh">
          <ul className="navigation-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">Category</Link>
              {Catagory.slice(0, 8).map((cate) => (
                <ul>
                  <li>
                    <Link to="/">{cate.category_name}</Link>
                    <ul>
                      {Subcategories.filter(
                        (subcategory) =>
                          subcategory.subcategory_category_id ===
                          cate.category_id
                      )
                        .slice(0, 4)
                        .map((subcategory) => (
                          <li key={subcategory.subcategory_id}>
                            <Link
                              className="text-block t"
                              to={`/product-shop/${cate.category_id}/${subcategory.subcategory_id}`}
                              style={{ textDecoration: "none" }}
                            >
                              {subcategory.subcategory_name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </li>
                </ul>
              ))}
            </li>
            <li>
              <Link to="/">Brand</Link>
              <ul>
                {Brand.slice(0, 5).map((brands) => (
                  <li>
                    <Link to={`/product-shop/${brands.brand_id}`}>
                      {brands.brand_name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/">
                    <i class="fa-solid fa-eye"></i> Show More
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li>
              <Link to="/">About Us</Link>
            </li>

            <li>
              <Link to="/">Download</Link>
            </li>
            <li>
              <Link to="/">Legal</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>

            <li>
              <Link to="/">
                <i class="fa-solid fa-mobile-screen-button"></i>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <Offcanvas placement="end" show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header className="offcan" closeButton>
            <Offcanvas.Title>
              <div className="container-fluid ">
                {" "}
                <i class="fa-solid fa-store traaa"></i>
              </div>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="container-fluid">
              {Cart.map((item) => (
                <div class=" smallcard1">
                  <img
                    src={
                      "https://vsmart.ajspire.com/uploads/product_image/" +
                      item.product_image
                    }
                    class="cardsm"
                    alt="..."
                  />
                  <div class="rating">
                    <h5 class="card-title text-black text-bold">
                      {Cart.english_name}
                    </h5>

                    <h6> Rs. {item.sale_price} </h6>

                    <div>
                      <div className="row">
                        <div className="col-lg-4">
                          <input type="number" className="form-control" />
                        </div>
                        <div className="col-lg-4">
                          <button className="btnoff ">+</button>
                        </div>
                        <div className="col-lg-4">
                          <h6>{item.sale_price} </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </Offcanvas.Body>
          <footer className="">
            <div className="container-fluid view-cart fixed-end pb-2">
              <Link to="/viewcart">
                <button className="btn bg-success text-light">
                  <i class="fa-solid fa-eye"></i>
                  <b> View to Cart </b>
                </button>
              </Link>
            </div>
          </footer>
        </Offcanvas>
      </div>
    </>
  );
};

export default Header;
