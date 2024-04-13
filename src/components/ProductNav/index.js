import "./ProductNav.css";
import { useContext } from "react";
import { DataContext } from "../Content";

function ProductNav() {
    const { isActive, setIsActive, setQuantityShow } = useContext(DataContext);
    const arrTitle = ["IVY moda", "IVY men", "IVY kids"];

    const handleChangeTag = (index) => {
        setIsActive(index);
        setQuantityShow(5);
    };

    return (
        <div className="wrap">
            <ul>
                {arrTitle.map((title, index) => {
                    return (
                        <li
                            key={index}
                            className={"tab ".concat(isActive === index ? "active" : "")}
                            onClick={() => handleChangeTag(index)}
                        >
                            {title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ProductNav;
