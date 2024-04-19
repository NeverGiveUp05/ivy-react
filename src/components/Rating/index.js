import styles from "./Rating.module.css";
import Star from "../Star";
import { useState } from "react";

function Rating() {
    const [quantityRating, setQuantityRating] = useState(0);

    return (
        <div className={styles["dis-flex"]}>
            <Star handleSetQuantityRating={setQuantityRating} />
            <span className={styles["evaluate"]}>({quantityRating} đánh giá)</span>
        </div>
    );
}

export default Rating;
