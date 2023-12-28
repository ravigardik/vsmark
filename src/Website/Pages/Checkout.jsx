import React from "react";
import { Link } from "react-router-dom";
import Authuser from "../Aauthentication/Authuser";

const Checkout = () => {
  const { http, token, user } = Authuser();
  return (
    <>
      <div className="container-fluid order-list bg-success">
        <Link to="/myorder">My Order</Link>
      </div>
      {/* Delivery Address code start  */}
      <div class="container p-3" style={{ backgroundColor: "#D3D3D3" }}>
        <div class="row">
          <h4 class="grp" style={{ paddingTop: "8px", textAlign: "center" }}>
            Delivery Address
          </h4>
          <div class=" mt-2 col-sm-12 col-lg-6">
            <div class="card11">
              <div class="card-body">
                <h5 class="card-title ">Home</h5>
                <p>{user.address}</p>
              </div>
            </div>
          </div>
          <div class="mt-2 col-sm-12 col-lg-6">
            <div class="card11">
              <div class="card-body">
                <h5 class="card-title">Contact Number</h5>
                <p>{user.mob_no}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* delivery address end  */}
      {/* payment option start  */}
      <div class="container mt-3 p-3" style={{ backgroundColor: "#D3D3D3" }}>
        <div class="row">
          <h6 class="payl">Payment Option</h6>
        </div>

        <div className="container">
          <div className="row">
            <div className="pb-2 col-lg-3 col-md-6 col-sm-12">
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
                      value={"cash on delivery"}
                      style={{ width: "17px", height: "17px" }}
                    />
                    <b style={{ color: "black", fontSize: "15px" }}>
                      Cash On Delivery
                    </b>
                  </label>
                  <h3 className="card-title mb-2" style={{ fontSize: "25px" }}>
                    &#8377;5000{" "}
                  </h3>
                </div>
              </div>
            </div>
            <div className=" pb-2 col-lg-3 col-md-6 col-sm-12">
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
            <div className=" pb-2 col-lg-3 col-md-6 col-sm-12">
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
            <div className="pb-2 col-lg-3 col-md-6 col-sm-12">
              <div
                className="card11 card-payment"
                style={{ borderRadius: "10px" }}
              >
                <div className="card-body" style={{ marginBottom: "40px" }}>
                  <label>
                    <input
                      type="radio"
                      id="redi"
                      name="ww"
                      value="CashOnDelivery"
                      style={{ width: "17px", height: "17px" }}
                    />
                    <b style={{ color: "black", fontSize: "15px" }}>
                      Repurchase Amount
                    </b>
                  </label>
                  <h3 className="card-title mb-2" style={{ fontSize: "25px" }}>
                    {" "}
                    ₹
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "90px" }}>
        <label style={{ fontSize: "18px", color: "black" }}>
          {" "}
          <input
            type="checkbox"
            style={{ marginRight: "8px", width: "17px", height: "17px" }}
          />
          By making this purchase you agree to our Terms and Conditions
        </label>
      </div>
      <div class="d-grid gap-2">
        <div
          className="btncheck"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button type="submit" class="btn-process btn-success p-3">
            <Link to="" style={{ textDecoration: "none", color: "white" }}>
              CONFIRM ORDER
            </Link>{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
