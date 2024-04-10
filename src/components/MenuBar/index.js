import "./MenuBar.css";

function MenuBar() {
    return (
        <div className="nav">
            <div className="nav-info left-nav">
                <a href="/">
                    <span>SALE all 50% + thêm 10% HĐ từ 2 SP</span>
                </a>
            </div>
            <div className="nav-info center-nav">
                <a href="/">
                    <span>SALE UPTO 75%</span>
                </a>
            </div>
            <div className="nav-info right-nav">
                <a href="/">
                    <span>NEW ARRIVAL + giảm 10% HĐ từ 2 SP</span>
                </a>
            </div>
        </div>
    );
}

export default MenuBar;
