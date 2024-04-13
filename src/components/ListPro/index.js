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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isActive]);

    useEffect(() => {
        setIsShowFull(quantityShow === result.length);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantityShow]);

    const getData = async () => {
        const data = (await getProduct()).data;

        setProducts(data);
        // test
    };

    const updateProChangeHeart = (id, data) => {
        const newProducts = products.toSpliced(id, 1, data);
        setProducts(newProducts);
    };

    const result = products.filter((pro) => pro.id > isActive * 10 && pro.id <= (isActive + 1) * 10);

    const listProduct = result.filter((product, index) => {
        return index <= quantityShow - 1;
    });

    return (
        <div id="product-show">
            <div className="content">
                {listProduct.map((product) => (
                    <Pro key={product.id} item={product} index={isActive} updateProChangeHeart={updateProChangeHeart} />
                ))}
            </div>
        </div>
    );
}

export default ProductCarts;
