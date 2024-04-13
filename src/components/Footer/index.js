import "./Footer.css";
import images from "../../assets/images";

function Footer() {
    return (
        <>
            <div id="bottom">
                <div className="container">
                    <div className="left-bottom">
                        <div className="top-left">
                            <div>
                                <img src={images.logoFooter} alt="" />
                            </div>
                            <div>
                                <img src={images.protectedImage} alt="" />{" "}
                            </div>
                            <div>
                                <img src={images.boCongThuong} alt="" />
                            </div>
                        </div>
                        <div className="left-info">
                            <p>Công ty Cổ phần Dự Kim với số đăng ký kinh doanh: 0105777650</p>
                            <p>
                                <strong>Địa chỉ đăng ký: </strong>Tổ dân phố Tháp, P.Đại Mỗ, Q.Nam Từ Liêm, TP.Hà Nội,
                                Việt Nam
                            </p>
                            <p>
                                <strong>Số điện thoại: </strong>0243 205 2222/ 090 589 8683
                            </p>
                            <p>
                                <strong>Email: </strong> cskh@ivy.com.vn
                            </p>
                        </div>
                        <ul className="list-social">
                            <li>
                                <img src={images.fb} alt="" />
                            </li>
                            <li>
                                <img src={images.gg} alt="" />
                            </li>
                            <li>
                                <img src={images.instagram} alt="" className="height-30" />
                            </li>
                            <li>
                                <img src={images.pinterest} alt="" className="height-27" />
                            </li>
                            <li>
                                <img src={images.youtube} alt="" />
                            </li>
                        </ul>
                        <div className="hotline">Hotline: 0246 662 3434</div>
                    </div>
                    <div className="center-bottom">
                        <div className="left-center">
                            <p className="title">Giới thiệu</p>
                            <ul>
                                <li>
                                    <a href="/">Về IVY moda</a>
                                </li>
                                <li>
                                    <a href="/">Tuyển dụng</a>
                                </li>
                                <li>
                                    <a href="/">Hệ thống cửa hàng</a>
                                </li>
                            </ul>
                        </div>
                        <div className="mid-center">
                            <p className="title">Dịch vụ khách hàng</p>
                            <ul>
                                <li>
                                    <a href="/">Chính sách điều khoản</a>
                                </li>
                                <li>
                                    <a href="/">Hướng dẫn mua hàng</a>
                                </li>
                                <li>
                                    <a href="/">Chính sách thanh toán</a>
                                </li>
                                <li>
                                    <a href="/">Chính sách đổi trả</a>
                                </li>
                                <li>
                                    <a href="/">Chính sách bảo hành</a>
                                </li>
                                <li>
                                    <a href="/">Chính sách giao nhận vận chuyển</a>
                                </li>
                                <li>
                                    <a href="/">Chính sách thẻ thành viên</a>
                                </li>
                                <li>
                                    <a href="/">Hệ thống cửa hàng</a>
                                </li>
                                <li>
                                    <a href="/">Q&A</a>
                                </li>
                            </ul>
                        </div>
                        <div className="right-center">
                            <p className="title">Liên hệ</p>
                            <ul>
                                <li>
                                    <a href="/">Hotline</a>
                                </li>
                                <li>
                                    <a href="/">Email</a>
                                </li>
                                <li>
                                    <a href="/">Live Chat</a>
                                </li>
                                <li>
                                    <a href="/">Messenger</a>
                                </li>
                                <li>
                                    <a href="/">Liên hệ</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="right-bottom">
                        <div className="register-form">
                            <div className="register-title">Nhận thông tin các chương trình của IVY moda</div>
                            <form action="" id="form-subscribe">
                                <input type="text" placeholder="Nhập địa chỉ email" className="email-subscribe" />
                                <button className="btn-submit">Đăng ký</button>
                            </form>
                        </div>
                        <div className="app">
                            <div className="app-title">Download App</div>
                            <img src={images.appStore} alt="" />
                            <img src={images.googlePlay} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <footer id="footer">
                <div className="copy-right">©IVYmoda All rights reserved</div>
            </footer>
        </>
    );
}

export default Footer;
