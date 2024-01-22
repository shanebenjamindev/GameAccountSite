import React from 'react';

export default function FooterComponent() {
    return (
        <footer className='pt-5' style={{ position: 'relative', backgroundColor: 'var(--primary-fade)' }}>
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
                            <li><a href="javascript:void(0);" id="open_register_mini" className="open_register_mini">Đăng ký</a></li>
                            <li><a href="/dangnhap">Đăng nhập</a></li>
                        </ul>
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
                        <div className="fb-page" data-href="https://www.facebook.com/wibugem" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                            <iframe title="fb:page Facebook Social Plugin" src="https://www.facebook.com/v15.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df5a7279d37dbf4%26domain%3Dwibugem.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwibugem.com%252Ff8265ce7694f9c%26relation%3Dparent.parent&amp;container_width=307&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fwibugem&amp;locale=vi_VN&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=&amp;width=" width="1000" height="1000" style={{ border: 'none', visibility: 'visible', width: 307, height: 130 }} className=""></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-dark p-2 text-center'>
                <span className='text-danger'>WIBUGAME INC 2024</span>
                <span className='text-white'>@ ALL RIGHTS RESERVED</span>
            </div>
        </footer>
    );
}
