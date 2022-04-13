import React from "react";
import Product from "./product";

class Body extends React.Component {
    render() {
        return(
            <div className="body-center">
                <div className="content-box">
                <Product />
                <Product />
                <Product />
                <Product />
                </div>

            </div>
        )
    }
}

export default Body;