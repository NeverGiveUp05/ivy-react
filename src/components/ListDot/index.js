import "./ListDot.css";

function ListDot({ length, index }) {
    const handleDot = () => {
        const dotArray = [];

        for (let i = 0; i < length; i++) {
            if (i === index) {
                dotArray.push(<div className="dot active" key={i}></div>);
            } else {
                dotArray.push(<div className="dot" key={i}></div>);
            }
        }

        return dotArray;
    };

    return <div id="list-dot">{handleDot()}</div>;
}

export default ListDot;
