import React, { useEffect, useState } from "react";
import Authuser from "../Aauthentication/Authuser";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Search = () => {
  const { http, user, token } = Authuser();
  const [Product, setProduct] = useState([]);
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search); // Use useSearchParams

  const query = searchParams.get("query");

  const filteredRecords = Product.filter((record) =>
    record.english_name.toLowerCase().includes(query.toLowerCase())
  );
  console.log(filteredRecords + "ravi");

  const getProduct = () => {
    http
      .get(`/products`)
      .then((res) => {
        const filteredRecords = res.data.products.data.filter((record) =>
          record.english_name.toLowerCase().includes(query.toLowerCase())
        );
        setProduct(filteredRecords);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getProduct();
  }, []);

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

  return (
    <>
      <div className="conntainer-fluid allpro">
        <div className="conntainer-fluid cover">
          <h1 className="heading">VIEW SEARCHED PRODUCTS </h1>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 ">
              {Product.map((search) => (
                <div className="col " key={search.id}>
                  <div className="card">
                    <div className="product-tumb">
                      <img
                        className="cardimg "
                        src={search.product_image}
                        alt
                      />
                    </div>
                    <div className="product-details margin1">
                      <span className="product-catagory margin1">
                        {search.category_name}
                      </span>
                      <h6 className="title">
                        <a href>{search.english_name}</a>
                      </h6>
                      <p>{search.product_description}</p>
                      <div className="product-bottom-details margin1">
                        <div className="product-price margin1">
                          <small>{search.mrp_price}</small>
                          {search.sale_price}
                        </div>

                        <div className="product-links margin1">
                          {token ? (
                            <abbr title="Add to WishList">
                              <Link
                                className="links-details"
                                onClick={() => addTowish(search.product_id)}
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
                                onClick={() => addTocart(search.product_id)}
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

export default Search;
