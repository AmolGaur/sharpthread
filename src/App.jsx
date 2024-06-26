import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Signup from "./components/Sign-up/Sign_up";
import Footer from "./components/Footer/Footer";
import Category from "./components/Category/category";
import SingleProduct from "./components/OneProduct/oneproduct";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                    <Route path = "/" element ={<Home />}/>
                    <Route path = "/category/:id" element ={<Category />}/>
                    <Route path = "/product/:id" element ={<SingleProduct />}/>
            </Routes>
            <Signup />
            <Footer />
        </BrowserRouter>
    )
}

export default App;
