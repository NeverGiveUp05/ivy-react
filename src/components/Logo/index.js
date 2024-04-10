import imgs from "../../assets/images";
import "./Logo.css";

function Logo() {
    return (
        <div className="logo">
            <a href="/">
                <img src={imgs.logo} alt="logo" />
            </a>
        </div>
    );
}

export default Logo;
