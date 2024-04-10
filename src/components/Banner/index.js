import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import imgs from "../../assets/images";
import ListDot from "../ListDot";
import "./Banner.css";

function Banner() {
    const [currentImage, setCurrentImage] = useState(imgs.listBanner[0]);

    const listLength = imgs.listBanner.length;

    const index = useRef(0);

    const prev = () => {
        if (index.current === 0) {
            index.current = listLength - 1;
        } else {
            index.current -= 1;
        }

        setCurrentImage(imgs.listBanner[index.current]);
    };

    const next = () => {
        if (index.current === listLength - 1) {
            index.current = 0;
        } else {
            index.current += 1;
        }

        setCurrentImage(imgs.listBanner[index.current]);
    };

    return (
        <section id="banner">
            <div className="pseudo">
                <div className="wrapper">
                    <FontAwesomeIcon icon={faArrowLeftLong} className="arrow-left" onClick={prev} />

                    <img id="slide-img" src={currentImage} alt="banner" />

                    <FontAwesomeIcon icon={faArrowRightLong} className="arrow-right" onClick={next} />

                    <ListDot length={listLength} index={index.current} />
                </div>
            </div>
        </section>
    );
}

export default Banner;
