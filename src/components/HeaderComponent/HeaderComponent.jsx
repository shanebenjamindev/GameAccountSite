import React from 'react';
import wibulogo from '../../assets/images/wibulogo.png';
import headerlunar from '../../assets/images/header-lunar.png';
import headerlunar2 from '../../assets/images/header-lunar2.png';
import { CarOutlined, CaretDownOutlined, FileSearchOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { WrapperAccount, WrapperSearch, SearchButton, WrapperHeader } from './style';
import { Button, Col, Input, Row } from 'antd';
import { Link } from 'react-router-dom';

export default function HeaderComponent() {
  return (
    <WrapperHeader>
      <Navbar />
    </WrapperHeader>
  );
}

const Navbar = () => {
  return (
    <div className='d-flex'>
      <img className='d-none d-md-block' src={headerlunar2} />
      <nav className="navbar px-5 container">

        <Col md={6}>
          <div className='d-none d-md-block'>
            <Link to="/">
              <img height={70} src={wibulogo} />
            </Link>
          </div>
        </Col>

        <Col md={11} sm={17}>
          <WrapperSearch placeholder="Nhập tên game hoặc tag để tìm kiếm"
          suffix={
              <SearchButton type="primary" icon={<SearchOutlined />} className='bg-danger'></SearchButton>
            }
          />
        </Col>

        <Col md={3} sm={4} className='text-light'>
          <Link className='text-light' to="/account">
            <WrapperAccount>
              <UserOutlined style={{ fontSize: "25px", marginRight: "5px" }} />
              Đăng nhập
            </WrapperAccount>
          </Link>
        </Col>

        <Col md={3} sm={2}>
          <Link to="/cart">
            <button className='btn btn-outline-light'>
              <ShoppingCartOutlined style={{ fontSize: "25px", marginRight: "5px" }} />
              Giỏ hàng
            </button>
          </Link>
        </Col>
      </nav>
      <img className='d-none d-md-block' src={headerlunar} />
    </div>
  );
};
