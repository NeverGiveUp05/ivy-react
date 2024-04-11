import "./ListPro.css";
import { getProduct } from "../../services/ProductService";
import { useEffect, useState } from "react";
import Pro from "../Pro";
import { useContext } from "react";
import { DataContext } from "../Content";

function ProductCarts() {
    const [products, setProducts] = useState([]);
    const { isActive, quantityShow, setIsShowFull } = useContext(DataContext);

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (quantityShow === products.length) {
            setIsShowFull(true);
        } else {
            setIsShowFull(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantityShow]);

    const getData = async () => {
        const data = (await getProduct()).data;

        setProducts(data);
    };

    const listProduct = products.filter((product) => {
        return Number(product.id) <= quantityShow;
    });

    return (
        <div id="product-show">
            <div className="content">
                {listProduct.map((product) => (
                    <Pro key={product.id} item={product} index={isActive} />
                ))}
            </div>
        </div>
    );
}

export default ProductCarts;
