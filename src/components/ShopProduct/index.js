import "./ShopProduct.css";

function ShopProduct({ data }) {
    const minus = () => {};
    const increase = () => {};

    return (
        <div className="item-product">
            <div className="thumb">
                <img src={data.image} alt="" />
            </div>

            <div className="container-flex">
                <div className="info-product">
                    <h3 id="product-name">{"name"}</h3>
                </div>
                <div className="trash" onClick="removePro(this)">
                    <i className="fa-solid fa-trash-can"></i>
                </div>
                <div className="item-bottom">
                    <div className="quantity">
                        <div className="quantity-left" onClick={minus}>
                            <i className="fa-solid fa-minus"></i>
                        </div>
                        <input type="number" id="quantity-number" />
                        <div className="quantity-right" onClick={increase}>
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>

                    <div className="item-price">$₫</div>
                </div>
            </div>
        </div>
    );
}

export default ShopProduct;
