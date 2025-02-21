import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DetailProdShop.module.css";
import { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addShop } from "../../redux/shopSlice";

function DetailProdShop({ data }) {
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);

    const handleChangeQuantity = (value) => {
        setQuantity(value);
    };

    const increase = () => {
        setQuantity((prevValue) => (prevValue += 1));
    };

    const reduce = () => {
        if (quantity > 1) {
            setQuantity((prevValue) => (prevValue -= 1));
        }
    };

    const addToShop = () => {
        if (Number(quantity > 0)) {
            const productPass = { ...data, quantity };

            dispatch(addShop(productPass));

            toast.success("Đã thêm vào giỏ hàng", {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            toast.error("Số lượng không hợp lệ", {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setQuantity(1);
        }
    };

    return (
        <>
            <div className={styles["quantity"]}>
                <p>Số lượng</p>
                <div className={styles["quantity-option"]}>
                    <input
                        className={styles["quantity-input"]}
                        type="number"
                        value={quantity}
                        name="quantity"
                        onChange={(e) => handleChangeQuantity(e.target.value)}
                    />
                    <div className={styles["quantity-increase"]} onClick={() => increase()}>
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className={styles["quantity-decrease"]} onClick={() => reduce()}>
                        <FontAwesomeIcon icon={faMinus} />
                    </div>
                </div>
            </div>

            <div className={styles["actions"]}>
                <button className={styles["btn-add"]} onClick={() => addToShop()}>
                    Thêm vào giỏ
                </button>
                <button className={styles["btn-buy"]}>Mua hàng</button>
            </div>
        </>
    );
}

export default DetailProdShop;
