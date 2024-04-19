import { useState } from "react";
import styles from "./SizeProduct.module.css";

function SizeProduct() {
    const [active, setActive] = useState(0);

    return (
        <div className={styles["size"]}>
            <div
                className={`${styles["info-size"]}`.concat(active === 1 ? " " + `${styles["active"]}` : "")}
                onClick={() => setActive(1)}
            >
                S
            </div>
            <div
                className={`${styles["info-size"]}`.concat(active === 2 ? " " + `${styles["active"]}` : "")}
                onClick={() => setActive(2)}
            >
                M
            </div>
            <div
                className={`${styles["info-size"]}`.concat(active === 3 ? " " + `${styles["active"]}` : "")}
                onClick={() => setActive(3)}
            >
                L
            </div>
            <div
                className={`${styles["info-size"]}`.concat(active === 4 ? " " + `${styles["active"]}` : "")}
                onClick={() => setActive(4)}
            >
                XL
            </div>
            <div
                className={`${styles["info-size"]}`.concat(active === 5 ? " " + `${styles["active"]}` : "")}
                onClick={() => setActive(5)}
            >
                XXL
            </div>
        </div>
    );
}

export default SizeProduct;
