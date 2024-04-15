import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import { createContext, useRef, useState } from "react";

export const shopContainer = createContext();

function App() {
    const [arrShop, setArrShop] = useState([]);

    const shopRef = useRef();

    return (
        <shopContainer.Provider value={{ shopRef, arrShop, setArrShop }}>
            <div className="container">
                <Header />
                <MenuBar />
                <Banner />
                <Products />
                <Shop ref={shopRef} />
            </div>
            <Footer />
        </shopContainer.Provider>
    );
}

export default App;
