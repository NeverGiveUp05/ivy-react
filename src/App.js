import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import { createContext, useRef } from "react";

export const shopContainer = createContext();

function App() {
    const shopRef = useRef();

    return (
        <shopContainer.Provider value={shopRef}>
            <div className="container">
                <Header />
                <MenuBar />
                <Banner />
                <Products />
            </div>
            <Footer />
            <Shop ref={shopRef} />
        </shopContainer.Provider>
    );
}

export default App;
