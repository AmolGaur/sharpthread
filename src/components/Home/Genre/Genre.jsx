import "./Genre.css";

import img_m from "../../images/men_fashion.png";

const Genre = () => {
    return (
        <div className="shop-by-category">
            <div className="categories">
                <div className="category">
                    <img src={img_m} alt=""/>
                </div>
                <div className="category">
                    <img src={img_m} alt=""/>
                </div>
                <div className="category">
                    <img src={img_m} alt=""/>
                </div>
                <div className="category">
                    <img src={img_m} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Genre;