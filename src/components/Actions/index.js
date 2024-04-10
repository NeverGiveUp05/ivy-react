import "./Actions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Actions() {
    const openShop = () => {};

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
                <span className="number-cart">0</span>
            </div>
        </div>
    );
}

export default Actions;
