import "./Pro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart as HeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as HeartSolid } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Pro({ item, index }) {
    const [active, setActive] = useState(false);

    const changeHeart = () => {
        setActive(!active);
    };

    const addPro = () => {};

    return (
        <div className="box">
            <div className="cart">NEW</div>
            {index === 0 && <img className="cart-img" src={item.image0} alt="" />}
            {index === 1 && <img className="cart-img" src={item.image1} alt="" />}
            {index === 2 && <img className="cart-img" src={item.image2} alt="" />}

            {index === 0 && <img className="pseudo-img" src={item.pseudoImage0} alt="" />}
            {index === 1 && <img className="pseudo-img" src={item.pseudoImage1} alt="" />}
            {index === 2 && <img className="pseudo-img" src={item.pseudoImage2} alt="" />}

            <div className="detail">
                <div className="detail-head">
                    <div className="list-color">
                        <div className="color color-c5a782"></div>
                        <div className="color color-a3784e"></div>
                        <div className="color color-ec6795 checked"></div>
                    </div>
                    <div className="heart" onClick={() => changeHeart()}>
                        <FontAwesomeIcon
                            className={"fa-heart ".concat(active ? "dis-none" : "dis-block")}
                            icon={HeartRegular}
                        />
                        <FontAwesomeIcon
                            className={"fa-heart heart-red ".concat(!active ? "dis-none" : "dis-block")}
                            icon={HeartSolid}
                        />
                    </div>
                </div>

                <div className="detail-desp">{item.name}</div>

                <div className="detail-foot">
                    <div className="price">
                        <span>{item.price}$</span> <del>{item.delPrice}$</del>
                    </div>
                    <div
                        className="add-to-cart"
                        onClick={() =>
                            addPro({
                                name: "Lantana Dress - Đầm Xòe Phối Đai",
                                price: 2000000,
                                img: "./images/image1.1.jfif",
                            })
                        }
                    >
                        <FontAwesomeIcon className="fa-cart-shopping" icon={faCartShopping} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pro;
