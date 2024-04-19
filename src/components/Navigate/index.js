import "./Navigate.css";
import { Link } from "react-router-dom";

function Navigate() {
    return (
        <ul className="navigate">
            <li>
                <Link to="/">NỮ</Link>
            </li>
            <li>
                <Link to="/">NAM</Link>
            </li>
            <li>
                <Link to="/">TRẺ EM</Link>
            </li>
            <li>
                <Link to="/" className="text-red-color">
                    BIG SALE THÁNG 3
                </Link>
            </li>
            <li>
                <Link to="/">BỘ SƯU TẬP</Link>
            </li>
            <li>
                <Link to="/">VỀ CHÚNG TÔI</Link>
            </li>
        </ul>
    );
}

export default Navigate;
