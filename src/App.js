import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Banner from "./components/Banner";
import Products from "./components/Products";

function App() {
    return (
        <div className="container">
            <Header />
            <MenuBar />
            <Banner />
            <Products />
        </div>
    );
}

export default App;
