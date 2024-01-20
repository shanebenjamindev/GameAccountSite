import React from 'react'
import { WrapperSection } from '../../assets/style/commonStyle'

export default function CreditCard() {
    return (
        <WrapperSection className='container'>
            <div className="form py-4">
                <form method="POST" action="dangnhap.php" className>
                    <h2 className="text-center">Đăng nhập</h2>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="far fa-user" /></span>
                            <input type="text" className="form-control" name="mail" placeholder="Email" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon"><i className="fas fa-lock" /></span>
                            <input type="password" className="form-control" name="password" placeholder="Mật khẩu" required="required" />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" name="submit" id="submit" className="btn btn-primary login-btn btn-block">Đăng Nhập</button>
                    </div>
                    <div className="clearfix">
                        <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                        <a href="/fw" className="pull-right">Quên mật khẩu?</a>
                    </div>
                </form>
                <div className="or-seperator"><i>or</i></div>
                <p className="text-center">Đăng nhập với MXH</p>
                <div className="text-center social-btn">
                    <a href="/facebook" className="btn btn-primary"><i className="fab fa-facebook-f" />&nbsp; Facebook</a>
                    <a href="/google" className="btn btn-danger"><i className="fab fa-google-plus-g" />&nbsp; Google</a>
                </div>
            </div>

        </WrapperSection>
    )
}
