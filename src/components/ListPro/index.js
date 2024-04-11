import "./ListPro.css";
import { getProduct } from "../../services/ProductService";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function ProductCarts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const changeHeart = () => {};

    const addPro = () => {};

    const getData = async () => {
        const data = (await getProduct()).data;
        setProducts(data);
    };

    return (
        <div id="product-show">
            <div className="content">
                {products.map((item) => {
                    return (
                        <div key={item.id} className="box">
                            <div className="cart">NEW</div>
                            <img className="cart-img" src={item.image} alt="" />
                            <img className="pseudo-img" src={item.pseudoImage} alt="" />

                            <div className="detail">
                                <div className="detail-head">
                                    <div className="list-color">
                                        <div className="color color-c5a782"></div>
                                        <div className="color color-a3784e"></div>
                                        <div className="color color-ec6795 checked"></div>
                                    </div>
                                    <div className="heart">
                                        <FontAwesomeIcon
                                            className="fa-heart"
                                            icon={faHeart}
                                            onClick={() => changeHeart()}
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
                })}
            </div>
        </div>
    );
}

export default ProductCarts;
