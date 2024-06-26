import "./Header.css";
import Navigate from "../Navigate";
import Logo from "../Logo";
import Search from "../Search";
import Actions from "../Actions";
import { memo } from "react";

function Header() {
    return (
        <header id="header">
            <div className="container">
                <Navigate />
                <Logo />
                <div className="right-header">
                    <Search />
                    <Actions />
                </div>
            </div>
        </header>
    );
}

export default memo(Header);
