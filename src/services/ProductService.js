import instance from "./customize-axios";

const getProduct = () => {
    return instance.get(`/product`);
};

const updateProduct = (id, data) => {
    return instance.put(`/product/${id}`, data);
};

export { getProduct, updateProduct };
