import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Footer Section Begin */}
      <footer className="footer spad">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-lg-3 col-md-6 col-sm-6 ">
              <div className="footer__about foot">
                <div className="footer__about__logo">
                  <Link href="./index.html">
                    <img src="asset/img/logo.png" alt />
                  </Link>
                </div>
                <ul>
                  <li>Address: Baramati, Pune 413113</li>
                  <li>Phone: +91 7398627667</li>
                  <li>Email: mrroyravi23@gmail.com</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
              <div className="footer__widget">
                <h6>Useful Links</h6>
                <ul className="footerliks">
                  <li>
                    <Link href="#">About Us</Link>
                  </li>
                  <li>
                    <Link href="#">About Our Shop</Link>
                  </li>
                  <li>
                    <Link href="#">Secure Shopping</Link>
                  </li>
                  <li>
                    <Link href="#">Delivery infomation</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Our Sitemap</Link>
                  </li>
                </ul>
                <ul>
                  <li>
                    <Link href="#">Who We Are</Link>
                  </li>
                  <li>
                    <Link href="#">Our Services</Link>
                  </li>
                  <li>
                    <Link href="#">Projects</Link>
                  </li>
                  <li>
                    <Link href="#">Contact</Link>
                  </li>
                  <li>
                    <Link href="#">Innovation</Link>
                  </li>
                  <li>
                    <Link href="#">Testimonials</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="footer__widget">
                <h6>Join Our Newsletter Now</h6>
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <form action="#">
                  <input type="text" placeholder="Enter your mail" />
                  <button type="submit" className="site-btn">
                    Subscribe
                  </button>
                </form>
                <div className="footer__widget__social">
                  <Link href="#">
                    <i class="fa-brands fa-facebook"></i>
                  </Link>
                  <Link href="#">
                    <i class="fa-brands fa-instagram"></i>
                  </Link>
                  <Link to="">
                    <i class="fa-brands fa-x-twitter"></i>
                  </Link>
                  <Link href="#">
                    <i class="fa-brands fa-pinterest-p"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__copyright">
                <div className="footer__copyright__text">
                  <p>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                    <Link href="https://colorlib.com" target="_blank">
                      Mr.Roy
                    </Link>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
                <div className="footer__copyright__payment">
                  <img src="asset/img/payment-item.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}
    </>
  );
};

export default Footer;
