import React from "react";
import Authuser from "../Aauthentication/Authuser";
import { useState } from "react";
import { useEffect } from "react";

const Cartview = () => {
  const { http, token } = Authuser();
  const [Cart, setCart] = useState([]);
  //   const [Cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [subto, setSubto] = useState(0);
  const [gst, setGst] = useState(0);
  const [pv, setPv] = useState(0);
  const [disc, setDisc] = useState(0);

  const getCartItem = () => {
    http
      .get(`/get-cart-list`)
      .then((res) => {
        setCart(res.data.cart);
        // console.log(res.data.cart);
      })
      .catch((e) => {
        // console.log(e);
      });
  };
  useEffect(() => {
    getCartItem();
  }, [token]);

  useEffect(() => {
    // Calculate the subtotal whenever the cart items change

    const newSubtotal = Cart.reduce(
      (accumulator, item) =>
        accumulator + item.online_price * item.cart_product_qty,
      0
    );
    setSubtotal(newSubtotal);

    // Calculate the Gst whenever the cart items change
    // $gst = ($subto * $task->tax_per) / (100 + $task->tax_per);
    const gst = Cart.reduce(
      (accumulator, item) =>
        accumulator +
        (item.online_price * item.cart_product_qty * item.tax_per) /
          (100 + item.tax_per),
      0
    );
    setGst(gst);
    // Calculate the P v whenever the cart items change

    const pv = Cart.reduce(
      (accumulator, item) => accumulator + item.point_value,
      0
    );
    setPv(pv);
    // Calculate the Discount whenever the cart items change

    const disc = Cart.reduce((accumulator, item) => {
      console.log("Total Discount:", item.total_discount);
      const totalDiscount = parseFloat(item.total_discount);
      return accumulator + totalDiscount;
    }, 0);
    setDisc(disc);
    console.log(disc);
  }, [Cart]);

  // const removewishlist = (wish_id) => {
  //   // console.log(wish_id);
  //   http
  //     .get(`/remove-from-wishlist/${wish_id}`)
  //     .then((res) => {
  //       // console.log(res.data);
  //       setWish(wish_id);
  //       console.log(
  //         setWishlist((prevWishlist) =>
  //           prevWishlist.filter((item) => item.wish_id !== wish_id)
  //         )
  //       );
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  return (
    <>
      <div>
        <div className="conntainer-fluid allpro">
          <div className="conntainer-fluid cover">
            <h1 className="heading">Your Cart </h1>
          </div>
        </div>
        <div className="container carttable">
          <table className="table-cart overflow-scroll">
            <thead>
              <tr className="cartrow">
                <th>Sr.No</th>
                <th> Product</th>
                <th>Product Name </th>
                <th>Price</th>
                <th> Brand </th>
                <th>Quantity</th>
                <th>Tav</th>
                <th>Pv </th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody className="tbody-cart">
              {Cart.map((item) => (
                <tr className="table-body">
                  <td className="li-product-remove">
                    <li>
                      {/* <li onClick={() => removewishlist(item.wish_id)}> */}
                      <i className="fa fa-times" />
                    </li>
                  </td>
                  <td className="li-product-thumbnail">
                    <a href="#">
                      <img
                        width={150}
                        height={150}
                        src={
                          "https://vsmart.ajspire.com/uploads/product_image/" +
                          item.product_image
                        }
                        alt="Li's Product Image"
                      />
                    </a>
                  </td>
                  <td className="li-product-name">
                    <a href="#">{item.english_name}</a>
                  </td>
                  <td className="li-product-price">
                    <span className="amount">&#8377;{item.online_price}</span>
                  </td>
                  <td>{item.brand_name}</td>
                  <td className="quantity">
                    {/* <label>Quantity</label> */}
                    <div className="cart-plus-minus">
                      <input
                        type="number"
                        className="form-control"
                        value={item.cart_product_qty}
                      />
                      {/* <div className="dec qtybutton">
                      <i className="fa fa-angle-down" />
                    </div>
                    <div className="inc qtybutton">
                      <i className="fa fa-angle-up" />
                    </div> */}
                    </div>
                  </td>
                  <td className="product-subtotal">
                    <span className="amount">
                      &#8377;
                      {(
                        (item.online_price *
                          item.cart_product_qty *
                          item.tax_per) /
                        (100 + item.tax_per)
                      ).toFixed(2)}
                    </span>
                  </td>
                  <td className="product-subtotal">
                    <span className="amount">{item.point_value}</span>
                  </td>

                  <td className="product-subtotal">
                    &#8377;{item.online_price * item.cart_product_qty}
                  </td>
                </tr>
              ))}
              {/* <tr className="table-body">
              <td>ravi</td>
            </tr> */}
            </tbody>
          </table>

          <br />
        </div>
        <div className="container text-black">
          <h1>Cart Detailes</h1>
          <h3>Sub Total</h3>
          <button className="btn"> Procces to check out </button>
        </div>
      </div>
      <h3>Payment </h3>
      <div className="proback"></div>
      <div className="proicon">
        <i class="fa-solid fa-check "></i>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
};

export default Cartview;
