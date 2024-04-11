import "./ShowMore.css";
import { useContext } from "react";
import { DataContext } from "../Content";

function ShowMore() {
    const { quantityShow, setQuantityShow, isShowFull } = useContext(DataContext);

    const handleSetQuantity = () => {
        if (isShowFull) {
            setQuantityShow(quantityShow - 5);
        } else {
            setQuantityShow(quantityShow + 5);
        }
    };

    return (
        <div className="show-all" onClick={handleSetQuantity}>
            <div id="more-pro" className="show-text">
                {isShowFull ? "Thu gọn" : "Xem thêm"}
            </div>
        </div>
    );
}

export default ShowMore;
