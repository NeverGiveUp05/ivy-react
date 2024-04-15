import "./Products.css";
import Content from "../Content";
import { memo } from "react";

function Products() {
    return (
        <div id="product">
            <div className="title-section">NEW ARRIVAL</div>
            <Content />
        </div>
    );
}

export default memo(Products);
