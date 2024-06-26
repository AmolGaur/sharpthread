import { MdClose } from "react-icons/md";

import prod from "../../images/shirt1.png";
import "./search.css";

const Search = ({setShowSearch}) => {
    return (
        <div className="search-model">
            <div className="form-field">
                <input 
                    type="text" 
                    autoFocus
                    placeholder="Search for products"
                />
                <MdClose onClick={() => setShowSearch(false)}/>
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="img-container">
                            <img src={prod} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">product name</span>
                            <span className="desc">product description</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;