import imgs from "../../assets/images";
import "./Logo.css";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <div className="logo">
            <Link to="/">
                <img src={imgs.logo} alt="logo" />
            </Link>
        </div>
    );
}

export default Logo;
