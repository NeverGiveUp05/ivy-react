import { faHeart as HeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as HeartSolid, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useRef } from "react";
import { updateProduct } from "../../services/ProductService";
import "./Pro.css";
import { shopContainer } from "../../App";
import { Link } from "react-router-dom";

function Pro({ item, index, updateProChangeHeart }) {
    const heart = useRef();
    const heartRed = useRef();

    const handleAddProduct = useContext(shopContainer).setArrShop;

    let data;

    if (index === 0) {
        data = {
            id: item.id,
            name: item.name0,
            price: item.price0,
            delPrice: item.delPrice0,
            image: item.image0,
            pseudoImage: item.pseudoImage0,
            favorite: item.favorite,
        };
    } else if (index === 1) {
        data = {
            id: item.id,
            name: item.name1,
            price: item.price1,
            delPrice: item.delPrice1,
            image: item.image1,
            pseudoImage: item.pseudoImage1,
            favorite: item.favorite,
        };
    } else if (index === 2) {
        data = {
            id: item.id,
            name: item.name2,
            price: item.price2,
            delPrice: item.delPrice2,
            image: item.image2,
            pseudoImage: item.pseudoImage2,
            favorite: item.favorite,
        };
    }

    const changeHeart = async (id, data) => {
        const resutl = await updateProduct(id, { ...data, favorite: !data.favorite });

        updateProChangeHeart(Number(resutl.data.id - 1), resutl.data);
    };

    const addPro = (data) => {
        handleAddProduct((prev) => {
            const currentIndex = prev.findIndex((pro) => {
                return pro.id === data.id;
            });

            if (currentIndex !== -1) {
                prev[currentIndex].quantity += data.quantity;
                prev[currentIndex].totalPricePro = prev[currentIndex].quantity * Number(data.price);
                const newData = prev.toSpliced(currentIndex, 1, prev[currentIndex]);
                return newData;
            } else {
                data.totalPricePro = data.quantity * data.price;
                return [...prev, data];
            }
        });
    };

    return (
        <div className="box">
            <div className="cart">NEW</div>
            <Link to="/product" state={item}>
                <img className="cart-img" src={data.image} alt="" />

                <img className="pseudo-img" src={data.pseudoImage} alt="" />
            </Link>

            <div className="detail">
                <div className="detail-head">
                    <div className="list-color">
                        <div className="color color-c5a782"></div>
                        <div className="color color-a3784e"></div>
                        <div className="color color-ec6795 checked"></div>
                    </div>
                    <div className="heart" onClick={() => changeHeart(data.id, data)}>
                        <FontAwesomeIcon
                            className={"fa-heart ".concat(data.favorite ? "dis-none" : "dis-block")}
                            icon={HeartRegular}
                            ref={heart}
                        />
                        <FontAwesomeIcon
                            className={"fa-heart heart-red ".concat(!data.favorite ? "dis-none" : "dis-block")}
                            icon={HeartSolid}
                            ref={heartRed}
                        />
                    </div>
                </div>

                <div className="detail-desp">{data.name}</div>

                <div className="detail-foot">
                    <div className="price">
                        <span>{data.price}$</span> <del>{data.delPrice}$</del>
                    </div>
                    <div className="add-to-cart" onClick={() => addPro({ ...data, quantity: 1 })}>
                        <FontAwesomeIcon className="fa-cart-shopping" icon={faCartShopping} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pro;
