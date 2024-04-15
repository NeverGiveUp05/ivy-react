import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ShopProduct.css";
import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function ShopProduct({ data, shop, handleShop }) {
    const minus = (data) => {
        const currentIndex = shop.findIndex((item) => item.id === data.id);
        if (data.quantity > 1) {
            shop[currentIndex].quantity -= 1;
        } else {
            return;
        }
        shop[currentIndex].totalPricePro = shop[currentIndex].quantity * Number(data.price);
        const newShop = shop.toSpliced(currentIndex, 1, shop[currentIndex]);
        handleShop(newShop);
    };

    const increase = (data) => {
        const currentIndex = shop.findIndex((item) => item.id === data.id);
        shop[currentIndex].quantity += 1;
        shop[currentIndex].totalPricePro = shop[currentIndex].quantity * Number(data.price);
        const newShop = shop.toSpliced(currentIndex, 1, shop[currentIndex]);
        handleShop(newShop);
    };

    const handleChangeNumber = (value, data) => {
        const currentIndex = shop.findIndex((item) => item.id === data.id);
        shop[currentIndex].quantity = Number(value);
        shop[currentIndex].totalPricePro = shop[currentIndex].quantity * Number(data.price);
        const newShop = shop.toSpliced(currentIndex, 1, shop[currentIndex]);
        handleShop(newShop);
    };

    const handleRemovePro = (data) => {
        const currentIndex = shop.findIndex((item) => item.id === data.id);
        const newShop = shop.filter((item, index) => index !== currentIndex);
        handleShop(newShop);
    };

    return (
        <div className="item-product">
            <div className="thumb">
                <img src={data.image} alt="" />
            </div>

            <div className="container-flex">
                <div className="info-product">
                    <h3 id="product-name">{data.name}</h3>
                </div>
                <div className="trash">
                    <FontAwesomeIcon icon={faTrashCan} onClick={() => handleRemovePro(data)} />
                </div>
                <div className="item-bottom">
                    <div className="quantity">
                        <div className="quantity-left" onClick={() => minus(data)}>
                            <FontAwesomeIcon icon={faMinus} className="fa-minus" />
                        </div>
                        <input
                            type="number"
                            id="quantity-number"
                            value={data.quantity <= 0 ? " " : data.quantity}
                            onChange={(e) => handleChangeNumber(e.target.value, data)}
                        />
                        <div className="quantity-right" onClick={() => increase(data)}>
                            <FontAwesomeIcon icon={faPlus} className="fa-plus" />
                        </div>
                    </div>

                    <div className="item-price">{data.totalPricePro}.00$</div>
                </div>
            </div>
        </div>
    );
}

export default ShopProduct;
