import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DetailProdShop.module.css";
import { useContext, useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { shopContainer } from "../../App";
import { toast } from "react-toastify";

function DetailProdShop({ data }) {
    const { arrShop, setArrShop } = useContext(shopContainer);

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

            const currentIndex = arrShop.findIndex((prod) => prod.id === productPass.id);

            if (currentIndex !== -1) {
                arrShop[currentIndex].quantity += Number(productPass.quantity);
                arrShop[currentIndex].totalPricePro = arrShop[currentIndex].quantity * Number(productPass.price);
                const newShop = arrShop.toSpliced(currentIndex, 1, arrShop[currentIndex]);
                setArrShop(newShop);
            } else {
                productPass.totalPricePro = productPass.quantity * Number(productPass.price);
                setArrShop((prevArr) => [...prevArr, productPass]);
            }

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
