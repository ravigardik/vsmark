import React, { useEffect, useState } from "react";
import Authuser from "../Aauthentication/Authuser";

const Myorder = () => {
  return (
    <>
      {/* Tracking code start */}
      <div className="container">
        {/* {item.ordermaster_order_status == 1 ? ( */}
        <article className="">
          <div className="card-body">
            <h6>Order ID: OD45345345435</h6>

            {/* track div start */}
            <div className="track">
              <div className="step active">
                {" "}
                <span className="icon">
                  {" "}
                  <i className="fa fa-check" />{" "}
                </span>{" "}
                <span className="text">Order Pendding</span>{" "}
              </div>
              <div className="step active">
                {" "}
                <span className="icon">
                  {" "}
                  <i className="fa fa-user" />{" "}
                </span>{" "}
                <span className="text"> Order Accepted</span>{" "}
              </div>
              <div className="step">
                {" "}
                <span className="icon">
                  {" "}
                  <i className="fa fa-truck" />{" "}
                </span>{" "}
                <span className="text"> Shipped </span>{" "}
              </div>
              <div className="step">
                {" "}
                <span className="icon">
                  {" "}
                  <i className="fa fa-truck" />{" "}
                </span>{" "}
                <span className="text">Transporting</span>{" "}
              </div>
              <div className="step">
                {" "}
                <span className="icon">
                  {" "}
                  <i className="fa fa-box" />{" "}
                </span>{" "}
                <span className="text">Order Dilivered</span>{" "}
              </div>
              <div className="step">
                {" "}
                <span className="icon">
                  {" "}
                  <i className="fa fa-xmark" />{" "}
                </span>{" "}
                <span className="text">Order Rejected</span>{" "}
              </div>
            </div>
          </div>
        </article>
        // {/* trake div end */}
        {/* ) : item.ordermaster_order_status == 2 ? (
            ) : item.ordermaster_order_status == 3 ? (
            ) : item.ordermaster_order_status == 4 ? (
            ) : item.ordermaster_order_status == 5 ? (
            ) : item.ordermaster_order_status == 6 ? (
            ) : item.ordermaster_order_status != 6 ? (
              ) :
                            null
}
           */}
      </div>
      {/* tracking product code end */}
      <div class="container mt-3 p-3" style={{ backgroundColor: "#D3D3D3" }}>
        <div class="row">
          <h6 class="payl">Payment Option</h6>
        </div>

        <div className="container">
          <div className="row">
            <div className="pb-2 col-lg-4 col-md-6 col-sm-12">
              <div
                className="card11 card-payment"
                style={{ borderRadius: "10px" }}
              >
                <div className="card-body">
                  <div className="d-flex">
                    <div className="order-card-head">
                      <h6 style={{ fontWeight: "bold" }}>Order Id</h6>
                    </div>
                    <div className="order-card-para">
                      <p>5245</p>
                    </div>
                  </div>

                  <div class="card-body">
                    <ul type="none">
                      <li>
                        <div className="d-flex">
                          <div className="order-card-head">
                            <h6 style={{ fontWeight: "bold" }}>Total Item</h6>
                          </div>
                          <div className="order-card-para">
                            <p>2Items</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="order-card-head">
                            <h6 style={{ fontWeight: "bold" }}>Order Time</h6>
                          </div>
                          <div className="order-card-para">
                            <p>2023-10-11 12:58:42</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="d-flex">
                          <div className="order-card-head">
                            <h6 style={{ fontWeight: "bold" }}>
                              Delivery Time
                            </h6>
                          </div>
                          <div className="order-card-para">
                            <p>
                              After Accepted Order Required Minimum 2 Days To
                              Place Order
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className=" pb-2 col-lg-4 col-md-6 col-sm-12">
              <div
                className="card11 card-payment"
                style={{ borderRadius: "10px" }}
              >
                <div className="card-body">
                  <label>
                    <input
                      type="radio"
                      id="redi"
                      name="ww"
                      value="CashOnDelivery"
                      style={{ width: "17px", height: "17px" }}
                    />
                    <b style={{ color: "black", fontSize: "15px" }}>
                      Online Transfer
                    </b>
                  </label>
                  <h3 className="card-title mb-2" style={{ fontSize: "25px" }}>
                    &#8377;5000{" "}
                  </h3>
                </div>
              </div>
            </div>
            <div className=" pb-2 col-lg-4 col-md-6 col-sm-12">
              <div
                className="card11 card-payment"
                style={{ borderRadius: "10px" }}
              >
                <div className="card-body">
                  <label>
                    <input
                      type="radio"
                      id="redi"
                      name="ww"
                      value="CashOnDelivery"
                      style={{ width: "17px", height: "17px" }}
                    />
                    <b style={{ color: "black", fontSize: "15px" }}>
                      Use Wallet balance Current Month
                    </b>
                  </label>
                  <h3 className="card-title mb-2" style={{ fontSize: "25px" }}>
                    &#8377;0.00{" "}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myorder;
