import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Authuser = () => {
  const navigate = useNavigate();
  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const getUser = () => {
    const userString = JSON.parse(sessionStorage.getItem("user"));
    return userString;
  };

  const saveToken = (user, token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
    console.log(token);
    sessionStorage.setItem("user", JSON.stringify(user));
  };

  const [token, SetToken] = useState(getToken());

  const [user, setUser] = useState(getUser());

  const http = axios.create({
    baseURL: "https://vsmart.ajspire.com/api",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const logout = () => {
    sessionStorage.clear();
    SetToken(null);
    setUser(null);
    navigate("/");
  };

  return {
    SetToken: saveToken,
    token,
    user,
    http,
    logout,
  };
};

export default Authuser;
