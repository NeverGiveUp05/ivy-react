import styles from "./Star.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function Star({ handleSetQuantityRating }) {
    const [active, setActive] = useState(0);

    const handleRating = (index) => {
        if (index === active) {
            handleSetQuantityRating(0);
            setActive(0);
        } else {
            handleSetQuantityRating(1);
            setActive(index);
        }
    };

    return (
        <div className={styles["rating"]}>
            <span className={styles["star"]} onClick={() => handleRating(1)}>
                {active >= 1 ? (
                    <FontAwesomeIcon icon={solidStar} className={styles["yellow"]} />
                ) : (
                    <FontAwesomeIcon icon={regularStar} />
                )}
            </span>
            <span className={styles["star"]} onClick={() => handleRating(2)}>
                {active >= 2 ? (
                    <FontAwesomeIcon icon={solidStar} className={styles["yellow"]} />
                ) : (
                    <FontAwesomeIcon icon={regularStar} />
                )}
            </span>
            <span className={styles["star"]} onClick={() => handleRating(3)}>
                {active >= 3 ? (
                    <FontAwesomeIcon icon={solidStar} className={styles["yellow"]} />
                ) : (
                    <FontAwesomeIcon icon={regularStar} />
                )}
            </span>
            <span className={styles["star"]} onClick={() => handleRating(4)}>
                {active >= 4 ? (
                    <FontAwesomeIcon icon={solidStar} className={styles["yellow"]} />
                ) : (
                    <FontAwesomeIcon icon={regularStar} />
                )}
            </span>
            <span className={styles["star"]} onClick={() => handleRating(5)}>
                {active >= 5 ? (
                    <FontAwesomeIcon icon={solidStar} className={styles["yellow"]} />
                ) : (
                    <FontAwesomeIcon icon={regularStar} />
                )}
            </span>
        </div>
    );
}

export default Star;
