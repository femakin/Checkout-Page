import React, { Component } from "react";
import { IconContext } from "react-icons";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { GiWorld } from "react-icons/gi";
import { FaCity } from "react-icons/fa";
import { TiShoppingBag } from "react-icons/ti";
import photo1 from "../Images/checkout-page-master/photo1.png";
import photo2 from "../Images/checkout-page-master/photo2.png";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      telephone: "",
      fullName: "",
      address: "",
      city: "",
      country: "select",
      postalcode: "",
      formErrors: {},
    };
    this.initialState = this.state;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      emailErr,
      telephoneErr,
      fullNameErr,
      addressErr,
      cityErr,
      countryErr,
      postalcode,
    } = this.state.formErrors;

    return (
      <div>
        <div className="container">
        <h2 className="heading">Checkout</h2>
          <div className="full_content">
        
            <div className="left_content">
              <form action="">
                <h2 className="form_titile">Contact Information</h2>

                <div id="input-container">
                  <label htmlFor="email">Email</label>
                  <div>
                    <IconContext.Provider value={{ className: "icon" }}>
                      {" "}
                      <HiOutlineMail />{" "}
                    </IconContext.Provider>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={this.state.email}
                      placeholder="Enter your email..."
                      onChange={this.handleChange}
                    />

                    {emailErr && (
                      <div style={{ color: "red", paddingBottom: 10 }}>
                        {emailErr}
                      </div>
                    )}
                  </div>
                </div>

                <div id="input-container">
                  <label htmlFor="telephone">Phone</label>
                  <div>
                    <IconContext.Provider value={{ className: "icon" }}>
                      {" "}
                      <FaPhoneAlt />{" "}
                    </IconContext.Provider>
                    <input
                      type="text"
                      id="telephone"
                      name="telephone"
                      value={this.state.telephone}
                      placeholder="Enter your phone..."
                      onChange={this.handleChange}
                    />
                    {telephoneErr && (
                      <div style={{ color: "red", paddingBottom: 10 }}>
                        {telephoneErr}
                      </div>
                    )}
                  </div>
                </div>
                <h2 className="form_titile">Shipping address</h2>

                <div id="input-container">
                  <label htmlFor="fullname">Full name</label>
                  <div>
                    <IconContext.Provider value={{ className: "icon" }}>
                      {" "}
                      <RiContactsLine />{" "}
                    </IconContext.Provider>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={this.state.fullName}
                      placeholder="Rodney Cotton"
                      onChange={this.handleChange}
                    />

                    {fullNameErr && (
                      <div style={{ color: "red", paddingBottom: 10 }}>
                        {fullNameErr}
                      </div>
                    )}
                  </div>
                </div>

                <div id="input-container">
                  <label htmlFor="fullname">Address</label>
                  <div>
                    <IconContext.Provider value={{ className: "icon" }}>
                      {" "}
                      <AiOutlineHome />{" "}
                    </IconContext.Provider>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={this.state.address}
                      placeholder="Your address..."
                      onChange={this.handleChange}
                    />

                    {addressErr && (
                      <div style={{ color: "red", paddingBottom: 10 }}>
                        {addressErr}
                      </div>
                    )}
                  </div>
                </div>

                <div id="input-container">
                  <label htmlFor="email">City</label>
                  <div>
                    <IconContext.Provider value={{ className: "icon" }}>
                      {" "}
                      <FaCity />{" "}
                    </IconContext.Provider>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={this.state.city}
                      placeholder="Your city..."
                      onChange={this.handleChange}
                    />

                    {cityErr && (
                      <div style={{ color: "red", paddingBottom: 10 }}>
                        {cityErr}
                      </div>
                    )}
                  </div>
                </div>

                <div className="last_two">
                  <div className="input_one">
                    <div id="input-container">
                      <label htmlFor="country">Country</label>
                      <div>
                        <IconContext.Provider value={{ className: "icon" }}>
                          {" "}
                          <GiWorld />{" "}
                        </IconContext.Provider>
                        <select
                          name="country"
                          id="country"
                          onChange={this.handleChange}
                          className={countryErr ? " showError" : ""}
                          value={this.state.country}
                        >
                          <option value="select" className="country">Your country...</option>
                          <option value="finland">Finland</option>
                          <option value="nigeria">Nigeria</option>
                          <option value="england">England</option>
                        </select>
                        {countryErr && (
                          <div style={{ color: "red", paddingBottom: 10 }}>
                            {countryErr}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="input_two">
                    <div id="input-container">
                      <label htmlFor="postalcode">Postal code</label>
                      <div>
                        <IconContext.Provider value={{ className: "icon" }}>
                          {" "}
                          <TiShoppingBag />{" "}
                        </IconContext.Provider>
                        <input
                          type="text"
                          id="postalcode"
                          name="postalcode"
                          value={this.state.postalcode}
                          placeholder="Your postal code..."
                          onChange={this.handleChange}
                        />

                        {postalcode && (
                          <div style={{ color: "red", paddingBottom: 10 }}>
                            {postalcode}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="checkbox">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox" className="checkbox">
                  Save this information for next time
                </label>
              </div>
              <button className="btn">
                <a href="/" >Continue</a>
              </button>
            </div>
            <div className="right_content">
              <div className="item_one">
                <div>
                  {" "}
                  <img src={photo1} alt="itemimage" className="image" />{" "}
                </div>
                <div className="innerright">
                  <h2 className="inner_name">Vintage Backbag</h2>
                  <div className="inner_two">
                    <h1 className="actual_price">$54.99</h1>
                    <h1 className="old_price">$94.99</h1>
                  </div>
                  <div className="inputicons">
                    <button className="btn1">-</button>
                    <h2 className="value">{1}</h2>
                    <button className="btn2">+</button>
                  </div>
                </div>
              </div>

              <div className="item_one">
                <div>
                  {" "}
                  <img src={photo2} alt="itemimage" className="image" />{" "}
                </div>
                <div className="innerright">
                  <h2 className="inner_name" id="shoe">
                    Levi Shoes
                  </h2>
                  <div className="inner_two">
                    <p className="actual_price">$74.99</p>
                    <p className="old_price">$124.99</p>
                  </div>
                  <div className="inputicons">
                    <button className="btn1">-</button>
                    <h2 className="value">{1}</h2>
                    <button className="btn2">+</button>
                  </div>
                </div>
              </div>

              <div className="shipping_total">
                <div className="shipping">
                  <h2 className="shipping_title">Shipping</h2>
                  <h2 className="shipping_price">$19</h2>
                </div>
                <div className="total">
                  <h2 className="total_title">Total</h2>
                  <h2 className="total_price">$148.98 </h2>
                </div>

              </div>
            </div>
          </div>
        
        </div>
        <footer>
        <a href="https://github.com/femakin/" className="footer_content">
          Femi @
        </a>
        <a href="https://devchallenges.io/" className="footer_content">
          DevChallenges.io
        </a>
          </footer>
      </div>
      
    );
  }
}

export default Form;
