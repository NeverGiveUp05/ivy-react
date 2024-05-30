import "./Actions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { shopContainer } from "../../App";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Actions() {
    const shopBox = useContext(shopContainer);
    const arrShop = useSelector((state) => state.shop.arrShop);

    const totalQuantity = arrShop.reduce((total, prod) => total + prod.quantity, 0);

    const openShop = () => {
        shopBox.shopRef.current.classList.add("open");
    };

    return (
        <div className="header-action">
            <div className="item">
                <FontAwesomeIcon icon={faHeadphones} />
            </div>
            <div className="item">
                <Link to="/login" style={{ color: "#373737ef" }}>
                    <FontAwesomeIcon icon={faUser} />
                </Link>
            </div>
            <div className="item" id="open" onClick={openShop}>
                <FontAwesomeIcon icon={faShopify} />
                <span className="number-cart">{totalQuantity}</span>
            </div>
        </div>
    );
}

export default Actions;
