import React from 'react'

const Register = () => {
 
  {

  }
  return (
    <>
    
    <div className="container checkout__form">
  <h4>Billing Details</h4>
  <form action="#">
    <div className="row">
      <div className="col-lg-8 col-md-6">
        <div className="row">
          <div className="col-lg-6">
            <div className="checkout__input">
              <p>Fist Name<span>*</span></p>
              <input type="text" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="checkout__input">
              <p>Last Name<span>*</span></p>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="checkout__input">
          <p>E-mail<span>*</span></p>
          <input type="text" />
        </div>
        <div className="checkout__input">
          <p>Mobile No<span>*</span></p>
          <input type="text" />
        </div>
        <div className="checkout__input">
          <p>Password<span>*</span></p>
          <input type="text" placeholder="Password" className="checkout__input__add" />
          <input type="text" placeholder="Confirm Password" />
        </div>
        
       
        
       
        <div className="checkout__input__checkbox">
          <label htmlFor="acc">
            Create an account?
            <input type="checkbox" id="acc" />
            <span className="checkmark" />
          </label>
        </div>
        
        
        <div className="checkout__input">
         
          <input type="button" placeholder="Submit"  value={SubmitEvent}/>
        </div>
      </div>
      {/* <div className="col-lg-4 col-md-6">
        <div className="checkout__order">
          <h4>Your Order</h4>
          <div className="checkout__order__products">Products <span>Total</span></div>
          <ul>
            <li>Vegetable’s Package <span>$75.99</span></li>
            <li>Fresh Vegetable <span>$151.99</span></li>
            <li>Organic Bananas <span>$53.99</span></li>
          </ul>
          <div className="checkout__order__subtotal">Subtotal <span>$750.99</span></div>
          <div className="checkout__order__total">Total <span>$750.99</span></div>
          <div className="checkout__input__checkbox">
            <label htmlFor="acc-or">
              Create an account?
              <input type="checkbox" id="acc-or" />
              <span className="checkmark" />
            </label>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.</p>
          <div className="checkout__input__checkbox">
            <label htmlFor="payment">
              Check Payment
              <input type="checkbox" id="payment" />
              <span className="checkmark" />
            </label>
          </div>
          <div className="checkout__input__checkbox">
            <label htmlFor="paypal">
              Paypal
              <input type="checkbox" id="paypal" />
              <span className="checkmark" />
            </label>
          </div>
          <button type="submit" className="site-btn">PLACE ORDER</button>
        </div>
      </div> */}
    </div>
  </form>
</div>

    
    
    
    </>
  )
}

export default Register
