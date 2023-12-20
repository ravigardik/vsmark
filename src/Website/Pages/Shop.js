import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Authuser from "../Aauthentication/Authuser";

const Shop = () => {
  const { http, token } = Authuser();
  const [Product, SetProduct] = useState([]);
  const [Category, SetCategory] = useState([]);
  const [Subcatagory, SetSubcatagory] = useState([]);

  const getProducts = () => {
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
    getProducts();
    // addTocart();
  }, []);

  // const [productid,Setproductid]= useState('');
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
      <div className="conntainer-fluid allpro">
        <div className="conntainer-fluid cover">
          <h1 className="heading">VIEW ALL PRODUCT </h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="bg-light p-3">
              <h3>Product Filter</h3>
              {/* Category Filter */}
              <label htmlFor="category">Category:</label>

              <select id="category" className="form-select">
                <option value="all">All Categories</option>
                {Category.map((product) => (
                  <option value="electronics">{product.category_name}</option>
                ))}
                {/* <option value="clothing">Clothing</option>
                            <option value="furniture">Furniture</option> */}
                {/* Add more category options as needed */}
              </select>

              {/* Price Range Filter */}
              <div className="mb-3">
                <label htmlFor="price">Price Range:</label>
                <input
                  type="number"
                  id="minPrice"
                  placeholder="Min Price"
                  className="form-control "
                />
                <input
                  type="number"
                  id="maxPrice"
                  placeholder="Max Price"
                  className="form-control"
                />
              </div>
              {/* Brand Filter */}
              <div className="mb-3">
                <label htmlFor="brand">Brand:</label>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="brand1"
                    value="brand1"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="brand1">
                    Brand 1
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="brand2"
                    value="brand2"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="brand2">
                    Brand 2
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="brand3"
                    value="brand3"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="brand3">
                    Brand 3
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="brand3"
                    value="brand3"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="brand3">
                    Brand 3
                  </label>
                </div>
                {/* Add more brand options as needed */}
              </div>
              {/* Apply Button */}
              <button id="applyFilter" className="btn btn-primary">
                Apply Filter
              </button>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 ">
              {Product.slice(0, 6).map((product) => (
                <div className="col " key={product.id}>
                  <div className="card">
                    <div className="product-tumb">
                      <img
                        className="cardimg "
                        src={product.product_image}
                        alt
                      />
                    </div>
                    <div className="product-details margin1">
                      <span className="product-catagory margin1">
                        {product.category_name}
                      </span>
                      <h6 className="title">
                        <a href>{product.english_name}</a>
                      </h6>
                      <p>{product.product_description}</p>
                      <div className="product-bottom-details margin1">
                        <div className="product-price margin1">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex={-1}>
              Previous
            </a>
          </li>
          <li className="page-item">
            <Link className="page-link" to="/">
              1
            </Link>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>

          <li className="page-item">
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Shop;
