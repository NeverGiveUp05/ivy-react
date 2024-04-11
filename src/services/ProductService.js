import axios from "./customize-axios";

const getProduct = () => {
    return axios.get(`/product`);
};

export { getProduct };
