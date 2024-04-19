import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./DetailTab.css";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function DetailTab() {
    const [active, setActive] = useState(0);
    const [isShowFull, setIsShowFull] = useState(false);

    return (
        <div className="detail-tab">
            <div className="tab-header">
                <div
                    className={"tab-item ".concat(active === 0 ? "active" : "")}
                    onClick={() => {
                        setActive(0);
                        setIsShowFull(false);
                    }}
                >
                    <span>GIỚI THIỆU</span>
                </div>
                <div
                    className={"tab-item ".concat(active === 1 ? "active" : "")}
                    onClick={() => {
                        setActive(1);
                        setIsShowFull(false);
                    }}
                >
                    <span>CHI TIẾT SẢN PHẨM</span>
                </div>
                <div
                    className={"tab-item ".concat(active === 2 ? "active" : "")}
                    onClick={() => {
                        setActive(2);
                        setIsShowFull(false);
                    }}
                >
                    <span>BẢO QUẢN</span>
                </div>
            </div>
            <div className="tab-body">
                <div
                    className={"tab-content "
                        .concat(active === 0 ? "active " : "")
                        .concat(isShowFull ? "show-content" : "")}
                >
                    <p>
                        Nhẹ nhàng, mềm mại trong thiết kế đầm hoa yêu kiều. Đầm cổ thuyền, có độ dài qua gối cùng kiểu
                        dáng chữ A quen thuộc, khéo léo tôn lên nét đẹp dịu dàng của người mặc. Thiết kế tạo điểm nhấn
                        thắt đai ngang eo, giúp che khuyết điểm tốt.
                    </p>

                    <p>
                        Chất liệu tơ voan mềm mại tạo cảm giác dễ chịu khi tiếp xúc với da cũng như giúp bạn luôn cảm
                        thấy thoải mái và mát mẻ trong suốt cả ngày dài.
                    </p>

                    <p>
                        Đầm có họa tiết hoa bắt mắt, có thể đi kèm với các phụ kiện như khuyên tai và một đôi giày cao
                        gót, hoặc có thể được kết hợp với một chiếc mũ vành rộng cùng đôi sandal để tạo ra một vẻ ngoài
                        năng lượng và phong cách.
                    </p>

                    <p>
                        <strong>Thông tin mẫu:</strong>
                    </p>

                    <p>
                        <strong>Chiều cao: </strong>167 cm
                    </p>

                    <p>
                        <strong>Cân nặng: </strong>50 kg
                    </p>

                    <p>
                        <strong>Số đo 3 vòng: </strong>83-65-93 cm
                    </p>

                    <p>Mẫu mặc size M</p>

                    <p>
                        Lưu ý: Màu sắc sản phẩm thực tế sẽ có sự chênh lệch nhỏ so với ảnh do điều kiện ánh sáng khi
                        chụp và màu sắc hiển thị qua màn hình máy tính/ điện thoại.
                    </p>
                </div>
                <div
                    className={"tab-content "
                        .concat(active === 1 ? "active " : "")
                        .concat(isShowFull ? "show-content" : "")}
                >
                    <table className="" width="70%">
                        <tbody>
                            <tr>
                                <td>
                                    <b>Dòng sản phẩm</b>
                                </td>
                                <td>Ladies</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Nhóm sản phẩm</b>
                                </td>
                                <td>Đầm</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Cổ áo</b>
                                </td>
                                <td>Cổ thuyền</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Tay áo</b>
                                </td>
                                <td>Tay liền</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Kiểu dáng</b>
                                </td>
                                <td>Chữ A</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Độ dài</b>
                                </td>
                                <td>Qua gối</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Họa tiết</b>
                                </td>
                                <td>Hoa</td>
                            </tr>
                            <tr>
                                <td>
                                    <b>Chất liệu</b>
                                </td>
                                <td>Voan</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div
                    className={"tab-content "
                        .concat(active === 2 ? "active " : "")
                        .concat(isShowFull ? "show-content" : "")}
                >
                    <p>Chi tiết bảo quản sản phẩm : </p>

                    <p>
                        <strong>
                            * Các sản phẩm thuộc dòng cao cấp (Senora) và áo khoác (dạ, tweed, lông, phao) chỉ giặt khô,
                            tuyệt đối không giặt ướt.
                        </strong>
                    </p>

                    <p>* Vải dệt kim: sau khi giặt sản phẩm phải được phơi ngang tránh bai giãn.</p>

                    <p>* Vải voan, lụa, chiffon nên giặt bằng tay.</p>

                    <p>* Vải thô, tuytsi, kaki không có phối hay trang trí đá cườm thì có thể giặt máy.</p>

                    <p>
                        * Vải thô, tuytsi, kaki có phối màu tương phản hay trang trí voan, lụa, đá cườm thì cần giặt
                        tay.
                    </p>

                    <p>
                        * Đồ Jeans nên hạn chế giặt bằng máy giặt vì sẽ làm phai màu jeans. Nếu giặt thì nên lộn trái
                        sản phẩm khi giặt, đóng khuy, kéo khóa, không nên giặt chung cùng đồ sáng màu, tránh dính màu
                        vào các sản phẩm khác.
                    </p>

                    <p>
                        * Các sản phẩm cần được giặt ngay không ngâm tránh bị loang màu, phân biệt màu và loại vải để
                        tránh trường hợp vải phai. Không nên giặt sản phẩm với xà phòng có chất tẩy mạnh, nên giặt cùng
                        xà phòng pha loãng.
                    </p>

                    <p>
                        * Các sản phẩm có thể giặt bằng máy thì chỉ nên để chế độ giặt nhẹ, vắt mức trung bình và nên
                        phân các loại sản phẩm cùng màu và cùng loại vải khi giặt.
                    </p>

                    <p>
                        * Nên phơi sản phẩm tại chỗ thoáng mát, tránh ánh nắng trực tiếp sẽ dễ bị phai bạc màu, nên làm
                        khô quần áo bằng cách phơi ở những điểm gió sẽ giữ màu vải tốt hơn.
                    </p>

                    <p>
                        * Những chất vải 100% cotton, không nên phơi sản phẩm bằng mắc áo mà nên vắt ngang sản phẩm lên
                        dây phơi để tránh tình trạng rạn vải.
                    </p>

                    <p>
                        * Khi ủi sản phẩm bằng bàn là và sử dụng chế độ hơi nước sẽ làm cho sản phẩm dễ ủi phẳng, mát và
                        không bị cháy, giữ màu sản phẩm được đẹp và bền lâu hơn. Nhiệt độ của bàn là tùy theo từng loại
                        vải.
                    </p>
                </div>
                <div className="show-more">
                    <div className="circle-caret" onClick={() => setIsShowFull(!isShowFull)}>
                        {isShowFull ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailTab;
