import "./Navigate.css";

function Navigate() {
    return (
        <ul className="navigate">
            <li>
                <a href="/">NỮ</a>
            </li>
            <li>
                <a href="/">NAM</a>
            </li>
            <li>
                <a href="/">TRẺ EM</a>
            </li>
            <li>
                <a href="/" className="text-red-color">
                    BIG SALE THÁNG 3
                </a>
            </li>
            <li>
                <a href="/">BỘ SƯU TẬP</a>
            </li>
            <li>
                <a href="/">VỀ CHÚNG TÔI</a>
            </li>
        </ul>
    );
}

export default Navigate;
