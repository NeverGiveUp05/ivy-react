import "./ProductNav.css";
import { useContext } from "react";
import { DataContext } from "../Content";

function ProductNav() {
    const { isActive, setIsActive } = useContext(DataContext);
    const arrTitle = ["IVY moda", "IVY men", "IVY kids"];

    return (
        <div className="wrap">
            <ul>
                {arrTitle.map((title, index) => {
                    return (
                        <li
                            key={index}
                            className={"tab ".concat(isActive === index ? "active" : "")}
                            onClick={() => setIsActive(index)}
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
