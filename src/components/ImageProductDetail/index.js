import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useRef, useState } from "react";
import { DetailProd } from "../InfoProduct";
import styles from "./ImageProductDetail.module.css";

function ImageProductDetail() {
    const data = useContext(DetailProd);
    const [currentIndex, setCurrentIndex] = useState(0);
    const arrImage = [data.image, data.slideImage0, data.slideImage1, data.slideImage2];

    const pseudoRef = useRef();

    const handlePosition = (e) => {
        const percentX = (e.offsetX / 648) * 100;
        const percentY = (e.offsetY / 490.5) * 100;

        pseudoRef.current.style.backgroundPosition = `${percentX}% ${percentY}%`;
    };

    const handleAddPosition = () => {
        pseudoRef.current.classList.add(styles["active"]);
        const img = arrImage[currentIndex];
        pseudoRef.current.style.backgroundImage = `url(${img})`;
    };

    const handleRemovePosition = () => {
        pseudoRef.current.classList.remove(styles["active"]);
    };

    useEffect(() => {
        pseudoRef.current.addEventListener("mousemove", (e) => {
            handlePosition(e);
        });

        pseudoRef.current.addEventListener("mouseleave", (e) => {
            handleRemovePosition(e);
        });
    }, []);

    const prev = () => {
        if (currentIndex === 0) {
            setCurrentIndex(arrImage.length - 1);
        } else {
            setCurrentIndex((prevValue) => prevValue - 1);
        }
    };

    const next = () => {
        if (currentIndex >= arrImage.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex((prevValue) => prevValue + 1);
        }
    };

    return (
        <div className={styles["dis-flex"]}>
            <div className={styles["wrap"]}>
                <img
                    src={arrImage[currentIndex]}
                    alt=""
                    className={styles["main-img"]}
                    onMouseOver={() => handleAddPosition()}
                />
                <div className={styles["pseudo"]} ref={pseudoRef}></div>
            </div>

            <div className={styles["slide-show"]}>
                <div className={styles["prev"]} onClick={() => prev()}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
                <div className={styles["wrapper-image"]}>
                    <img src={data.image} alt="" className={styles["slide-img"]} onClick={() => setCurrentIndex(0)} />
                    <img
                        src={data.slideImage0}
                        alt=""
                        className={styles["slide-img"]}
                        onClick={() => setCurrentIndex(1)}
                    />
                    <img
                        src={data.slideImage1}
                        alt=""
                        className={styles["slide-img"]}
                        onClick={() => setCurrentIndex(2)}
                    />
                    <img
                        src={data.slideImage2}
                        alt=""
                        className={styles["slide-img"]}
                        onClick={() => setCurrentIndex(3)}
                    />
                </div>
                <div className={styles["next"]} onClick={() => next()}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </div>
        </div>
    );
}

export default ImageProductDetail;
