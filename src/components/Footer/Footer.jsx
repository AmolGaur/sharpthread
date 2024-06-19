import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import payment from ".././images/payments.png";

import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Deserunt, vero officiis consequatur ea hic modi ratione quae facere. 
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Radhika puram, Rajiv chowk , 
                            New Delhi 222222
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0223 332 0234</div>
                    </div> 
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: hello@2345.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Shirts</span>
                    <span className="text">Tshirts</span>
                    <span className="text">Jackets</span>
                    <span className="text">Kids Wear</span>
                    <span className="text">Womens Western</span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privact Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        Sharpthread
                    </div>
                    <img src={ payment } alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
