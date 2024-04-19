import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Banner from "./components/Banner";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Shop from "./components/Shop";
import { createContext, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InfoProduct from "./components/InfoProduct";
import ScrollToTop from "./components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";

export const shopContainer = createContext();

function App() {
    const [arrShop, setArrShop] = useState([]);

    const shopRef = useRef();

    return (
        <BrowserRouter>
            <shopContainer.Provider value={{ shopRef, arrShop, setArrShop }}>
                <ScrollToTop />
                <div className="container">
                    <Header />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <MenuBar />
                                    <Banner />
                                    <Products />
                                </>
                            }
                        />
                        <Route path="/product" element={<InfoProduct />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                    <Shop ref={shopRef} />
                </div>
                <ToastContainer
                    position="bottom-right"
                    autoClose={2500}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    style={{ bottom: "0" }}
                />
                <Footer />
            </shopContainer.Provider>
        </BrowserRouter>
    );
}

export default App;
