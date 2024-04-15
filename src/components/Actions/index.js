import "./Actions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { shopContainer } from "../../App";

function Actions() {
    const shopBox = useContext(shopContainer);

    const totalQuantity = shopBox.arrShop.reduce((total, prod) => total + prod.quantity, 0);

    const openShop = () => {
        shopBox.shopRef.current.classList.add("open");
    };

    return (
        <div className="header-action">
            <div className="item">
                <FontAwesomeIcon icon={faHeadphones} />
            </div>
            <div className="item">
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="item" id="open" onClick={openShop}>
                <FontAwesomeIcon icon={faShopify} />
                <span className="number-cart">{totalQuantity}</span>
            </div>
        </div>
    );
}

export default Actions;
