import React from "react";
import Authuser from "../Aauthentication/Authuser";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const SubcatagorisProduct = () => {
  let { cat_id, sub_id } = useParams();
  const { http } = Authuser();

  const [pages, Setpages] = useState(1);

  const [Category, SetCategory] = useState([]);
  // console.log(Category)

  const [category1, Setcategory1] = useState([]);

  const [subcategory1, Setsubcategory1] = useState([]);
  // console.log(category1)

  const [Cat, Setcat] = useState([]);

  const [sub1, Setsub1] = useState([]);

  const [Fromidx, SetFromidx] = useState(0);

  const [Index, SetIndex] = useState(9);

  function nextpage() {
    SetFromidx((prevFromidx) => prevFromidx + 9);
    SetIndex((prevIndex) => prevIndex + 9);
    Setpages(pages + 1);
  }

  function Previoupage() {
    SetFromidx((prevFromidx) => prevFromidx - 9);
    SetIndex((prevIndex) => prevIndex - 9);
    Setpages(pages - 1);
  }

  // console.log(Index);
  // console.log(Fromidx);

  const subcate = () => {
    try {
      http
        .get(`/product-shop/${cat_id}/${sub_id}`)
        .then((res) => {
          console.log("ravi", res.data);
          SetCategory(res.data.category.data);
          // console.log(res.data.category.data);
          Setcategory1(res.data.category_);
          Setsubcategory1(res.data.subcategory_);
          Setsub1(res.data.sub);
          Setcat(res.data.cat);
          // console.log(res.data.cat);
        })
        .catch((e) => {
          // console.log(e);
        });
    } catch (error) {}
  };

  useEffect(() => {
    subcate();
    // console.log("king")
  }, [cat_id, sub_id]);

  return (
    <>
      <div className="conntainer-fluid allpro">
        <div className="conntainer-fluid cover">
          {/* {category1.map((roy) => ( */}
          <h1 className="heading">{category1.category_name}</h1>
          <h6>Home /{sub1.subcategory_name}</h6>
          {/* ))} */}
        </div>
      </div>
      <div className="container-fluid text-dark">
        <div className="row">
          <div className="col-md-3">
            <div
              className="bg-light p-3"
              style={{ overflowY: "scroll", height: "280px" }}
            >
              <h3>Product Filter</h3>
              {/* Category Filter */}
              <Link to="/">
                {" "}
                <h5 htmlFor="category">Category:</h5>
              </Link>
              <ul>
                {Cat.map((catt) => (
                  <Link to="/">
                    <li>
                      <h5> {catt.category_name}</h5>{" "}
                    </li>
                  </Link>
                ))}
              </ul>

              {/* <select id="category" className="form-select">

                            <option value="all">All Categories</option>
                            
                            <option value="electronics">category</option>
                            {/* <option value="clothing">Clothing</option>
                            <option value="furniture">Furniture</option> */}
              {/* Add more category options as needed */}
              {/* </select>  */}

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

              {/* Apply Button */}
              <button id="applyFilter" className="btn btn-primary">
                Apply Filter
              </button>
            </div>
            <div class="scrollbar scrollbar-primary">
              <div class="force-overflow">ravi</div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 ">
              {Category.slice(Fromidx, Index).map((sub) => (
                <div className="col ">
                  <div className="card">
                    <div className="product-tumb">
                      <img className="cardimg " src={sub.product_image} alt />
                    </div>
                    <div className="product-details margin1">
                      <span className="product-catagory margin1">
                        {sub.subcategory_name}
                      </span>
                      <h6 className="title">
                        <a href>{sub.english_name}</a>
                      </h6>
                      <p></p>
                      <div className="product-bottom-details margin1">
                        <div className="product-price margin1">
                          <small>{sub.mrp_price}</small>
                          {sub.sale_price}
                        </div>

                        <div className="product-links margin1">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item ">
            <Button className=" page-link" onClick={Previoupage}>
              Previous
            </Button>
          </li>
          {/* <li className="page-item"><Link className="page-link" to="/">1</Link></li> */}
          <li className="page-item">
            <a className="page-link" href="">
              {pages}
            </a>
          </li>
          {/* <li className="page-item"><a className="page-link" href="#">3</a></li> */}
          <li className="page-item">
            <Button className="page-link" onClick={nextpage}>
              Next
            </Button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SubcatagorisProduct;
