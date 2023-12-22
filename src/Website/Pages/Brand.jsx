import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Authuser from "../Aauthentication/Authuser";

const Brand = () => {
  const { http, user, token } = Authuser();
  let { brand_id } = useParams();
  const [activeindex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    if (index === activeindex) {
      //close currently open submenu
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  //product
  const [MainBrand, setMainBrand] = useState([]);
  // console.log(MainBrand);
  //brand name
  const [brands, setbrands] = useState([]);
  // console.log(brands);

  const [subBrand_, setsubBrand_] = useState([]);

  //Scroll menu
  const [Cat, SetCat] = useState([]);
  const [Brand, SetBrand] = useState([]);

  //count for cat cat and brand
  const [Count, SetCount] = useState([]);
  const [Count1, SetCount1] = useState([]);
  const getbrandproductData = () => {
    try {
      http
        .get(`/product-shop/${brand_id}`)
        .then((res) => {
          console.log(res.data);
          setMainBrand(res.data.brand);
          // console.log(res.data.brand);

          setbrands(res.data.brands_);
          // console.log(res.data.brands_);

          setsubBrand_(res.data.subBrand_);

          SetCat(res.data.cat);
          // console.log(res.data.cat)

          SetBrand(res.data.brandss);
          // console.log(res.data.brandss);

          SetCount(res.data.count[""]);
          SetCount1(res.data.count1[""]);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (error) {}
  };
  useEffect(() => {
    getbrandproductData();
  }, [brand_id]);

  // add to cart
  const addTocart = (product_id) => {
    console.log(product_id);
    http
      .get(`/add-to-cart/${product_id}`)
      .then((res) => {
        console.log(res.data);
        alert(res.data.msg);
      })

      .catch((e) => {
        console.log(e);
      });
  };
  // add to wishlist
  // const[productid,setproductid]=useState('');
  const addTowish = (product_id) => {
    console.log(product_id);
    http
      .get(`add-to-wishlist/${product_id}`)
      .then((res) => {
        console.log(res.data);
        alert(res.data.msg);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <div className="conntainer-fluid allpro">
        <div className="conntainer-fluid cover">
          {/* {category1.map((roy) => ( */}
          <h1 className="heading">{brands.brand_name}</h1>
          {/* <h6>Home /{sub1.subcategory_name}</h6> */}
          {/* ))} */}
        </div>
      </div>

      {/* {/ filter-by-price /} */}
      <div className="container-fluid shop-con2 text-black mb-2">
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
          {/* product-card  */}
          <div className="col-md-9">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 ">
              {MainBrand.map((pro1) => (
                <div className="col ">
                  <div className="card">
                    <div className="product-tumb">
                      <img className="cardimg " src={pro1.product_image} />
                    </div>
                    <div className="product-details margin1">
                      <span className="product-catagory margin1">
                        {pro1.subcategory_name}
                      </span>
                      <h6 className="title">
                        <a href>{pro1.english_name}</a>
                      </h6>
                      <p></p>
                      <div className="product-bottom-details margin1">
                        <div className="product-price margin1">
                          <small>{pro1.mrp_price}</small>
                          {pro1.sale_price}
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
          {/* <div className="col-lg-9 col-md-6 col-sm-12">
            <div className="container-fluid">
              <div className="row">
                {MainBrand.map((pro1, data) => (
                  <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
                    <div
                      className="card subcat-card mt-3"
                      style={{ width: "14rem" }}
                    >
                      <div className="subcat-heart-icon">
                        {token ? (
                          <Link onClick={() => addTowish(pro1.product_id)}>
                            {" "}
                            <i class="fa-solid fa-heart subcat-heart-iconnn"></i>
                          </Link>
                        ) : (
                          <Link to={"/login"}>
                            {" "}
                            <i class="fa-solid fa-heart subcat-heart-iconnn"></i>
                          </Link>
                        )}
                      </div>

                      <img
                        src={pro1.product_image}
                        className="card-img-top subcat-img"
                        alt="..."
                      />
                      <div className="subcat-icon">
                        <a class="btn btn-success m-2" href="#" role="button">
                          <i class="fa-solid fa-shuffle"></i>
                        </a>
                        <a class="btn btn-success" href="#" role="button">
                          <i class="fa-solid fa-eye"></i>
                        </a>
                      </div>
                      <div className="card-body">
                        <a className="card-title" href="#">
                          {pro1.english_name}
                        </a>
                        <p className="card-text11 text-primary">
                          {pro1.point_value}
                        </p>
                        <p className="card-text22 text-black">
                          {" "}
                          MRP
                          <strike className="text-danger">
                            {pro1.mrp_price}
                          </strike>
                          <span className="text-success">
                            {pro1.sale_price}
                          </span>
                        </p>
                        <div class="d-grid gap-2">
                          <button class="btn add-cart-btn" type="button">
                            <i className="fa-solid fa-basket-shopping nav-sec-icon1"></i>
                            {token ? (
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "white",
                                  fontSize: "12px",
                                }}
                                onClick={() => addTocart(pro1.product_id)}
                              >
                                Add to cart{" "}
                              </Link>
                            ) : (
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                  fontSize: "12px",
                                }}
                                to={"/login"}
                              >
                                {" "}
                                Add
                              </Link>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Brand;
