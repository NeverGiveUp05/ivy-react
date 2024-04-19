import { useLocation } from "react-router-dom";
import styles from "./InfoProduct.module.css";
import ImageProductDetail from "../ImageProductDetail";
import { createContext } from "react";
import ProductDescription from "../ProductDescription";

export const DetailProd = createContext();

function InfoProduct() {
    const location = useLocation();
    const dataProd = location.state;

    let data;

    if (dataProd.id <= 10) {
        data = {
            id: dataProd.id,
            name: dataProd.name0,
            price: dataProd.price0,
            delPrice: dataProd.delPrice0,
            image: dataProd.image0,
            favorite: dataProd.favorite,
            slideImage0: dataProd.pseudoImage0,
            slideImage1: dataProd.pseudoImage1,
            slideImage2: dataProd.pseudoImage2,
            slideImage3: dataProd.pseudoImage3,
        };
    } else if (dataProd.id <= 20) {
        data = {
            id: dataProd.id,
            name: dataProd.name1,
            price: dataProd.price1,
            delPrice: dataProd.delPrice1,
            image: dataProd.image1,
            favorite: dataProd.favorite,
            slideImage0: dataProd.pseudoImage0,
            slideImage1: dataProd.pseudoImage1,
            slideImage2: dataProd.pseudoImage2,
            slideImage3: dataProd.pseudoImage3,
        };
    } else if (dataProd.id <= 30) {
        data = {
            id: dataProd.id,
            name: dataProd.name2,
            price: dataProd.price2,
            delPrice: dataProd.delPrice2,
            image: dataProd.image2,
            favorite: dataProd.favorite,
            slideImage0: dataProd.pseudoImage0,
            slideImage1: dataProd.pseudoImage1,
            slideImage2: dataProd.pseudoImage2,
            slideImage3: dataProd.pseudoImage3,
        };
    }

    return (
        <DetailProd.Provider value={data}>
            <div id={styles.main}>
                <div className={styles["product-detail"]}>
                    <ImageProductDetail />
                    <ProductDescription />
                </div>
            </div>
        </DetailProd.Provider>
    );
}

export default InfoProduct;
