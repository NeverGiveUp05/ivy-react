import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { shopContainer } from "../App";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const { shopRef } = useContext(shopContainer);

    useEffect(() => {
        window.scrollTo(0, 0);
        shopRef.current.classList.remove("open");
    }, [pathname]);
};

export default ScrollToTop;
