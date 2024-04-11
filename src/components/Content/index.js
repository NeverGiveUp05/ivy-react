import { useState } from "react";
import { createContext } from "react";
import ListPro from "../ListPro";
import ProductNav from "../ProductNav";
import ShowMore from "../ShowMore";

export const DataContext = createContext();

function Content() {
    const [isActive, setIsActive] = useState(0);
    const [quantityShow, setQuantityShow] = useState(5);
    const [isShowFull, setIsShowFull] = useState(false);

    return (
        <DataContext.Provider
            value={{ isActive, setIsActive, quantityShow, setQuantityShow, isShowFull, setIsShowFull }}
        >
            <ProductNav />
            <ListPro />
            <ShowMore />
        </DataContext.Provider>
    );
}

export default Content;
