import "./Banner.css";

import BannerImg from "../../images/banner-img.png"

const Banner = () => {
    return (
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>DEAL ZONE</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Deserunt, vero officiis consequatur ea hic modi ratione quae facere. 
                </p>
                <div className="ctas">
                    <div className="banner-cta">Read More</div>
                    <div className="banner-cta v2">Shop Now</div>
                </div>
            </div>
            <img className="banner-img" src={BannerImg} alt="" />
        </div>
    </div>
    );
};

export default Banner;