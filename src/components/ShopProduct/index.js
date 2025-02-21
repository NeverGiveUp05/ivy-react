import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ShopProduct.css";
import { faMinus, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { increaseValue, decreaseValue, changeNumber, checkNumber, removePro } from "../../redux/shopSlice";

function ShopProduct({ data }) {
    const shop = useSelector((state) => state.shop.value);

    const dispatch = useDispatch();

    const minus = (data) => {
        dispatch(decreaseValue(data));
    };

    const increase = (data) => {
        dispatch(increaseValue(data));
    };

    const handleChangeNumber = (value, data) => {
        dispatch(changeNumber({ value, data }));
    };

    const handleCheckNumber = (value, data) => {
        if (Number(value) < 1) {
            dispatch(checkNumber({ value, data }));
        }
    };

    const handleRemovePro = (data) => {
        dispatch(removePro(data));
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
                            onBlur={(e) => handleCheckNumber(e.target.value, data)}
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
