import React from 'react';
import { WrapperSection } from '../../assets/style/commonStyle';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import { WrapperButton } from '../../components/ButtonComponent/style';

export default function CreditCard() {
    return (
        <WrapperSection className="container">
            <div className="form py-4">
                <form method="POST" action="dangnhap.php">
                    <h2 className="text-center">Đăng nhập</h2>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="far fa-user" />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                name="mail"
                                placeholder="Email"
                                required="required"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fas fa-lock" />
                            </span>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Mật khẩu"
                                required="required"
                            />
                        </div>
                    </div>
                    <div className="form-group text-center">
                        <a href="/fw" className="pull-right">
                            Quên mật khẩu?
                        </a>
                        <div>
                            <ButtonComponent variant="primary-outlined" text="Đăng Nhập" />
                            <ButtonComponent variant="primary-success" text="Đăng Ký" />
                        </div>
                    </div>
                </form>

                <p className="text-center">Đăng nhập với</p>
                <div className="text-center social-btn">
                    <ButtonComponent variant="facebook-outlined" text="Facebook" />
                    <ButtonComponent variant="google-outlined" text="Google" />
                </div>
            </div>
        </WrapperSection>
    );
}
