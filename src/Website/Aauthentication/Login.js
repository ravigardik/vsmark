import React from "react";
import { useState } from "react";
import Authuser from "./Authuser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {
  const { http, SetToken, token } = Authuser();

  // navigation code
  const notify = (M) => toast.error(M);
  const navigate = useNavigate();
  useEffect(() => {
    if (token != null) {
      navigate("/");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [navigate, token]);

  // login code start
  const [login, Setlogin] = useState({
    email: "",
    password: "",
  });
  console.log(login);

  // console.log('ravi');
  //   function Submitfun() {}
  const [formData, SetformData] = useState({
    name: "",
    mob_no: "",
    address: "",
    email: "",
    password: "",
    cpassword: "",
  });
  console.log(formData);
  const onSubmit = (e) => {
    http
      .post("/userregister", formData)
      .then((res) => {
        console.log(res.data);
        toast.success("User Registration successful!", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          text: "success",
        });
      })
      .catch((e) => {});
  };

  const OnLogin = (e) => {
    http
      .post("/user/login", login)
      .then((res) => {
        console.log(res.data);
        if (res.data.token) {
          SetToken(res.data.user_data, res.data.token);
          navigate("/");
        } else {
          notify(res.data.message);

          // Show a toast notification
          toast.success("User Login successful!", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
            text: "success",
          });
        }
      })
      .catch((e) => {
        toast.error("User Login Failed! Please try again.", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
          text: "danger",
        });
      });
  };

  const OninputChange = (e) => {
    SetformData({ ...formData, [e.target.name]: e.target.value });
    Setlogin({ ...login, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="section login">
        <div className="container ">
          <div className="row full-height justify-content-center">
            <div className="col-12 text-center align-self-center py-5">
              <div className="section pb-5 pt-5 pt-sm-2 text-center">
                <h6 className="mb-0 pb-3 text-dark">
                  <span>Log In </span>
                  <span>Register</span>
                </h6>
                <input
                  className="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                  onChange={(e) => OninputChange(e)}
                />
                <label htmlFor="reg-log" />
                <div className="card-3d-wrap mx-auto">
                  <div className="card-3d-wrapper">
                    <div className="card-front">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Log In</h4>
                          <div className="form-group">
                            <input
                              type="email"
                              required="text"
                              name="logemail"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              onChange={(e) => OninputChange(e)}
                            />
                            <i className="input-icon uil uil-at" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt" />
                          </div>
                          <a
                            href="#"
                            className="btn mt-4"
                            onClick={(e) => OnLogin(e)}
                          >
                            submit
                          </a>
                          {/* <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p> */}
                        </div>
                      </div>
                    </div>
                    {/* <ToastContainer /> */}
                    <div className="card-back">
                      <div className="center-wrap">
                        <div className="section text-center">
                          <h4 className="mb-4 pb-3">Register Now</h4>
                          <div className="form-group">
                            <input
                              type="text"
                              name="name"
                              className="form-style"
                              placeholder="Your Name"
                              id="logname"
                              onChange={(e) => OninputChange(e)}
                            />
                            <i className="input-icon uil uil-user" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="email"
                              className="form-style"
                              placeholder="Your Email"
                              id="logemail"
                              onChange={(e) => OninputChange(e)}
                            />
                            <i className="input-icon uil uil-at" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="email"
                              name="mob_no"
                              className="form-style"
                              placeholder="Mobile No"
                              id="logmob"
                              onChange={(e) => OninputChange(e)}
                            />
                            <i className="input-icon uil uil-at" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="text"
                              name="address"
                              className="form-style"
                              placeholder="Address"
                              id="logadd"
                              onChange={(e) => OninputChange(e)}
                            />
                            <i className="input-icon uil uil-at" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="password"
                              className="form-style"
                              placeholder=" Password"
                              id="logpass"
                              onChange={(e) => OninputChange(e)}
                            />
                            <i className="input-icon uil uil-lock-alt" />
                          </div>
                          <div className="form-group mt-2">
                            <input
                              type="password"
                              name="cpassword"
                              className="form-style"
                              placeholder="Confirm Password"
                              id="logcpass"
                              onChange={(e) => OninputChange(e)}
                            />
                            <i className="input-icon uil uil-lock-alt" />
                          </div>
                          <button
                            className="btn mt-4"
                            onClick={(e) => onSubmit(e)}
                          >
                            submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
