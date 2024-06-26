import "./oneproduct.css";
import RelatedProducts from "./relatedproducts/relatedproducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";

import prod from "../images/shirt.png";

const SingleProduct = () => {
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={prod} alt="" />
                    </div>
                    <div className="right">
                        <span className="name">Name</span>
                        <span className="price">&#8377;499</span>
                        <span className="desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Dolore soluta harum accusamus. Ex soluta optio eius, 
                            blanditiis tenetur esse nam animi, voluptatem quos qui 
                            quibusdam voluptates veniam dolorum reiciendis officiis.
                        </span>

                        <div className="cart-buttons">
                            <div className="quantity-buttons">
                                <span>-</span>
                                <span>5</span>
                                <span>+</span>
                            </div>
                            <button className="add-to-cart-button">
                                <FaCartPlus size={20}/>
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider" />

                        <div className="info-item">
                            <span className="text-bold">
                                Category:  
                                <span>Headphones</span>
                            </span>

                            <span className="text-bold">
                                Share:
                                <span className="social-icons">
                                    <FaFacebookF size={16}/>
                                    <FaInstagram size={16}/>
                                    <FaLinkedinIn size={16}/>
                                    <FaPinterest size={16}/>
                                    <FaTwitter size={16}/>
                                </span>
                            </span>
                        </div>

                    </div>
                </div>
                <RelatedProducts />
            </div>
        </div>
    );
};

export default SingleProduct;