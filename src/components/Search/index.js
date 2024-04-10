import "./Search.css";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Search() {
    return (
        <form action="" className="search-form">
            <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
            <input type="text" placeholder="TÌM KIẾM SẢN PHẨM" />
        </form>
    );
}

export default Search;
