import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Shop.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { forwardRef, useContext } from "react";
import ShopProduct from "../ShopProduct";
import { shopContainer } from "../../App";

const Shop = (props, ref) => {
    const arrShop = useContext(shopContainer).arrShop;
    const handleChangeArrShop = useContext(shopContainer).setArrShop;

    const totalQuantity = arrShop.reduce((total, prod) => total + prod.quantity, 0);

    const totalPriceShop = arrShop.reduce((total, prod) => total + prod.totalPricePro, 0);

    const closeShop = () => {
        ref.current.classList.remove("open");
    };

    return (
        <div className="shopping" id="shopping" ref={ref}>
            <div className="top-shop">
                <h3>
                    Giỏ hàng<span className="number-cart">{totalQuantity}</span>
                </h3>
            </div>
            <div className="main-shop" id="main-shop">
                {arrShop.length === 0 ? (
                    <span>Bạn chưa có sản phẩm nào</span>
                ) : (
                    arrShop.map((product, index) => {
                        return (
                            <ShopProduct key={index} data={product} shop={arrShop} handleShop={handleChangeArrShop} />
                        );
                    })
                )}
            </div>
            <div className="bottom-shop">
                <div className="total-price">
                    Tổng cộng: <strong id="total">{totalPriceShop}.00$</strong>
                </div>
                <div className="box-action">
                    <div className="box-title">Thanh toán</div>
                </div>
            </div>
            <div className="close-shop" id="close" onClick={closeShop}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
        </div>
    );
};

export default forwardRef(Shop);
