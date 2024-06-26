import "./Home.css";
import Banner from "./Banner/Banner";
import Genre from "./Genre/Genre";
import Products from "../products/products";


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Genre />
                    <Products headingText="Popular Products" />
                </div>
            </div>
        </div>
    );
};

export default Home;