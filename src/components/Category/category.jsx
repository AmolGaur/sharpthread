import "./category.css";
import Products from "../products/products";

const Category = () => {
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    Category title
                </div>
                <Products innerpage={true} />
            </div>
        </div>
    );
};

export default Category;
