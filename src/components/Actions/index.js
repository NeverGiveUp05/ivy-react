import "./Actions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { shopContainer } from "../../App";
import { arrShop } from "../Shop";

function Actions() {
    const shopBox = useContext(shopContainer);

    const openShop = () => {
        shopBox.current.classList.add("open");
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
                <span className="number-cart">{arrShop.length}</span>
            </div>
        </div>
    );
}

export default Actions;
