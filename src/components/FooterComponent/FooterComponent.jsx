import React from 'react'

export default function FooterComponent() {
    return (
        <footer>
            <div>
                <div className="container">
                    <div className="row position-relative">
                        <div className="col-md-6 col-lg-3 flex-column">
                            <div className="paragraph">WIBUGEM.COM</div>
                            <ul>
                                <li><a href="https://help.wibugem.com/dieu-khoan-dich-vu" target="_blank">Điều khoản dịch vụ</a></li>
                                <li><a href="https://help.wibugem.com" target="_blank">Chính sách bảo mật</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-2 flex-column">
                            <div className="paragraph">TÀI KHOẢN</div>
                            <ul>
                                <li><a href="javascript:void(0);" id="open_register_mini" className="open_register_mini">
                                    Đăng ký
                                </a></li>
                                <li><a href="/dangnhap">Đăng nhập</a></li>
                                <div className="modal in" id="modal-mini-login" role="dialog" style={{ cursor: 'initial', top: '-35px', zIndex: 999999 }}>
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close close-mini-login" data-dismiss="modal"><i className="fa fa-times" /></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="screen-modal">
                                                    <div className="text-compresssion-tinypng">
                                                        <i className="fa fa-spinner fa-spin fa-3x" />
                                                        <p>Vui lòng đợi chút ...</p>
                                                    </div>
                                                </div>
                                                <div className="tab_login">
                                                    <div className="vietlott-container" />
                                                    <div className="login-info account-content">
                                                        <div className="tile-login">Đăng nhập</div>
                                                        <p> Đăng nhập để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích, nhận nhiều ưu đãi hấp dẫn.</p>
                                                        <div className="mt-84">
                                                            <img src="./image/login-mini-header/personnel.png" alt />
                                                        </div>
                                                    </div>
                                                    <div className="momo-quick" style={{ display: 'none' }}>
                                                    </div>
                                                    <div className="content-login">
                                                        <div className="nav-header-login">
                                                            <a className="nav-title open_login_mini nav-title-active">Đăng nhập</a>
                                                            <a className="nav-title open_register_mini">Tạo tài khoản</a>
                                                        </div>
                                                        <div className="alert alert-mess-warning text-left" style={{ display: 'none' }} />
                                                        <div className="form-login">
                                                            <style dangerouslySetInnerHTML={{ __html: "\n                                                                #formJoin .alert {color: #000; width: 300px; padding: 8px 7px; margin: auto; margin-top: 10px; text-align: center; display: none;}\n                                                            " }} />
                                                            <form method="POST" id="formJoin" onsubmit="if (!window.__cfRLUnblockHandlers) return false; return false;">
                                                                <div className="alert danger" />
                                                                <div className="login-container">
                                                                    <label htmlFor>Địa chỉ Email</label>
                                                                    <div className="input-group">
                                                                        <i className="far fa-envelope" />
                                                                        <input type="text" name="mail" id="mail_login" placeholder="Nhập địa chỉ Email" className="input-popup-login" />
                                                                    </div>
                                                                </div>
                                                                <div className="login-container">
                                                                    <label htmlFor>Mật khẩu</label>
                                                                    <div className="input-group">
                                                                        <i className="fas fa-lock" />
                                                                        <input type="password" name="password" id="password_login" placeholder="Nhập mật khẩu" className="input-popup-login" />
                                                                    </div>
                                                                </div>
                                                                <div className="forgot-password"><a href="#">Bạn quên mật khẩu?</a></div>
                                                                <button type="button" name="submit" id="btn-login-mini" className="btn-submit-info"> Đăng nhập</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="tab_register">
                                                    <div className="container-register">
                                                        <div className="vietlott-container" />
                                                        <div className="login-info account-content">
                                                            <div className="tile-login">Tạo tài khoản</div>
                                                            <p> Tạo tài khoản để theo dõi đơn hàng, lưu danh sách sản phẩm yêu thích, nhận nhiều ưu đãi hấp dẫn.</p>
                                                            <div className="mt-29">
                                                                <img src="./image/login-mini-header/bird.png" alt />
                                                            </div>
                                                        </div>
                                                        <div className="momo-quick" style={{ display: 'none' }}><div className="momo-payment-header" id="momo-instant-content" style={{ display: 'none' }}>
                                                            <div className="tile-login">Mua hàng không cần đăng nhập</div>
                                                            <div className="momo-payment-product-detail">
                                                                <a href className="momo-payment-product-url">
                                                                    <img className="momo-payment-product-img" src />
                                                                </a>
                                                                <div className="momo-payment-item-info">
                                                                    <a href className="momo-payment-product-url momo-payment-item-title" />
                                                                    <div>
                                                                        <span className="momo-payment-cur-p" />
                                                                        <span className="price-block">
                                                                            <span className="momo-payment-old-p" />
                                                                            <span className="dis-p" style={{ display: 'inline', padding: 4 }} id="momo-payment-rate-discount" />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="method-vnpay-instant">
                                                                    <button type="button" id="buy-with-vnpay-instant" className="vnpay-instant-btn vnpay-width-btn-lg vnpay-instant-hide-mobile">
                                                                        <img src="image/catalog/icon/Vnpay-45414.jpg" /><span className="vnpay-instant-text">Mua siêu tốc với VNPAY</span>
                                                                    </button>
                                                                    <div style={{ marginBottom: 10 }} />
                                                                </div>
                                                                <button type="button" id="buy-with-momo-instant" className="momo-payment-btn momo-width-btn-lg">
                                                                    <img src="image/catalog/Logo-bank/Momo.png" /><span className="momo-payment-text">Mua siêu tốc với MoMo</span>
                                                                </button>
                                                                <div className="momo-payment-description">Quét mã, thanh toán ngay, không cần đăng nhập</div>
                                                                <div className="momo-payment-option">
                                                                    <a href="index.php?route=account/topup" className="momo-payment-option-link">
                                                                        Thanh toán bằng các phương thức khác
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="momo-payment-note">
                                                                Tạo tài khoản để tham ra chương trình tích điểm, hoàn tiền khách VIP
                                                            </div>
                                                        </div></div>
                                                        <div className="content-login">
                                                            <div className="nav-header-login">
                                                                <a className="nav-title open_login_mini">Đăng nhập</a>
                                                                <a className="nav-title open_register_mini nav-title-active">Tạo Tài Khoản</a>
                                                            </div>
                                                            <div className="form-login">
                                                                <div className="other-login">
                                                                    <hr style={{ marginTop: 22 }} />
                                                                    <div className="text-other-login">Đăng ký qua MXH</div>
                                                                    <br />
                                                                    <div className="list-login">
                                                                        <a href="/facebook/index.php" className="login-fplus btn btn-info">
                                                                            <span>
                                                                                <i className="fab fa-facebook-f" />
                                                                            </span>
                                                                            Đăng nhập bằng Facebook
                                                                        </a>
                                                                        <a href="/google/index.php" className="login-gplus btn btn-danger">
                                                                            <span>
                                                                                <i className="fab fa-google-plus-g" />
                                                                            </span>
                                                                            Đăng nhập bằng Google
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer" />
                                                </div>
                                            </div>
                                        </div>
                                    </div></div></ul>
                        </div>
                        <div className="col-md-6 col-lg-3 flex-column">
                            <div className="paragraph">LIÊN HỆ</div>
                            <ul>
                                <li>Hotline: <a href="tel:0973562914">0328113543</a> (8:00 - 22:00)</li>
                                <li>Email: hotro@wibugem.com</li>
                                <li><a href="https://www.facebook.com/wibugem">Fanpage</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 flex-column" style={{ marginTop: 10 }}>
                            <div className="fb-page fb_iframe_widget fb_iframe_widget_fluid" data-href="https://www.facebook.com/wibugem" data-tabs data-width data-height data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&app_id=&container_width=307&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fwibugem&locale=vi_VN&sdk=joey&show_facepile=true&small_header=false&tabs=&width="><span style={{ verticalAlign: 'bottom', width: 307, height: 130 }}><iframe width="1000px" height="1000px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameBorder={0} allowTransparency="true" allowFullScreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v15.0/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df5a7279d37dbf4%26domain%3Dwibugem.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwibugem.com%252Ff8265ce7694f9c%26relation%3Dparent.parent&container_width=307&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fwibugem&locale=vi_VN&sdk=joey&show_facepile=true&small_header=false&tabs=&width=" style={{ border: 'none', visibility: 'visible', width: 307, height: 130 }} className /></span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-dark p-2'>
                <span className=' text-danger'>WIBUGAME INC 2024</span>
                <span className='text-white'>@ ALLRIGHT RESERVED</span>
            </div>
        </footer>

    )
}
