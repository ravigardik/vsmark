import React from "react";
import Header from "./MainComponent/Header";
import Footer from "./MainComponent/Footer";

const Master = (props) => {
  return (
    <>
      <Header />

      <props.Comp></props.Comp>
      <Footer />
    </>
  );
};

export default Master;
