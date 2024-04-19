import { faRuler } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import DetailTab from "../DetailTab";
import { DetailProd } from "../InfoProduct";
import Rating from "../Rating";
import SizeProduct from "../SizeProduct";
import styles from "./ProductDescription.module.css";
import DetailProdShop from "../DetailProdShop";

function ProductDescription() {
    const data = useContext(DetailProd);

    return (
        <div className={styles["wrapper"]}>
            <h1 className={styles["prod-name"]}>{data.name}</h1>

            <div className={styles["sub-info"]}>
                <p>
                    SKU: <span>48M8653</span>
                </p>
                <Rating />
            </div>

            <div className={styles["price"]}>
                <b>{data.price}$</b>
                <del>{data.delPrice}$</del>
                <div className={styles["price-sale"]}>
                    {(-((Number(data.delPrice) - Number(data.price)) / Number(data.delPrice)) * 100).toFixed(2)}
                    <span>%</span>
                </div>
            </div>

            <div className={styles["color"]}>
                <p>Màu sắc: Họa tiết Hồng nhạt </p>
                <div className={styles["wrap-color"]}>
                    <div className={styles["color-df8230"]}></div>
                    <div className={styles["color-d2a0ad"].concat(" " + styles["checked"])}></div>
                </div>
            </div>

            <SizeProduct />

            <div className={styles["check-size"]}>
                <FontAwesomeIcon icon={faRuler} />
                &nbsp;
                <span> Kiểm tra size của bạn</span>
            </div>

            <DetailProdShop data={data} />

            <DetailTab />
        </div>
    );
}

export default ProductDescription;
