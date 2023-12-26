import React, { useEffect, useState } from "react";
import Authuser from "../Aauthentication/Authuser";

const Myorder = () => {
  return (
    <>
      <div className="container">
        <article className="">
          <div className="card-body">
            <h6>Order ID: OD45345345435</h6>

            <div className="track">
              <div className="step active">
                {" "}
                <span className="icon">
                  {" "}
                  <i className="fa fa-check" />{" "}
                </span>{" "}
                <span className="text">Order confirmed</span>{" "}
              </div>
              <div className="step active">
                {" "}
                <span className="icon">
                  {" "}
                  <i className="fa fa-user" />{" "}
                </span>{" "}
                <span className="text"> Picked by courier</span>{" "}
              </div>
              <div className="step">
                {" "}
                <span className="icon">
                  {" "}
                  <i className="fa fa-truck" />{" "}
                </span>{" "}
                <span className="text"> On the way </span>{" "}
              </div>
              <div className="step">
                {" "}
                <span className="icon">
                  {" "}
                  <i className="fa fa-box" />{" "}
                </span>{" "}
                <span className="text">Ready for pickup</span>{" "}
              </div>
              <div className="step">
                {" "}
                <span className="icon">
                  {" "}
                  <i className="fa fa-box" />{" "}
                </span>{" "}
                <span className="text">Ready for pickup</span>{" "}
              </div>
              <div className="step">
                {" "}
                <span className="icon">
                  {" "}
                  <i className="fa fa-box" />{" "}
                </span>{" "}
                <span className="text">Ready for pickup</span>{" "}
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="container bg-light"></div>
    </>
  );
};

export default Myorder;
