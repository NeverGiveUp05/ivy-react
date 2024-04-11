import ListPro from "../ListPro";
import ProductNav from "../ProductNav";
import "./Products.css";

function Products() {
    return (
        <div id="product">
            <div className="title-section">NEW ARRIVAL</div>
            <ProductNav />
            <ListPro />
        </div>
    );
}

export default Products;
