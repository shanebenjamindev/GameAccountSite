import React from 'react';
import wibulogo from '../../assets/images/wibulogo.png';
import headerlunar from '../../assets/images/header-lunar.png';
import headerlunar2 from '../../assets/images/header-lunar2.png';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { WrapperAccount, WrapperSearch, SearchButton, WrapperHeader } from './style';
import { Col } from 'antd';
import { Input } from 'antd';
import { Link } from 'react-router-dom';

const NavbarCus = () => {
  return (
    <div className='d-md-flex position-fixed w-100 bg-danger' style={{zIndex: 9999}}>
      <img className='d-none d-md-block' alt='lunar' src={headerlunar2} />

      <div className='container  w-100 d-flex align-items-center justify-content-between'>
        <Col md={6} className='d-none d-md-block'>
          <div>
            <Link to="/">
              <img height={70} src={wibulogo} alt="Logo" />
            </Link>
          </div>
        </Col>

        <Col md={10} sm={21} className='my-2 text-center d-flex align-items-center'>
          <WrapperSearch
            type='text'
            placeholder="Nhập tên game hoặc tag để tìm kiếm"
            suffix={
              <SearchButton type="primary" icon={<SearchOutlined />} className='bg-danger'></SearchButton>
            }
          />
        </Col>

        <Col md={4} className='text-light text-center d-none d-md-block'>
          <Link className='text-light' to="/account">
            <WrapperAccount>
              <UserOutlined style={{ fontSize: "25px", marginRight: "5px" }} />
              <span className='d-none d-md-inline-block'>Đăng nhập</span>
            </WrapperAccount>
          </Link>
        </Col>

        <Col md={4} sm={3} className='text-center'>
          <Link to="/cart">
            <button className='btn btn-outline-light'>
              <ShoppingCartOutlined style={{ fontSize: "25px", marginRight: "5px" }} />
              <span className='d-none d-md-inline-block'>Giỏ hàng</span>
            </button>
          </Link>
        </Col>
      </div>
      <img className='d-none d-md-block' alt='lunar' src={headerlunar} />
    </div >
  );
};

export default function HeaderComponent() {
  return (
    <WrapperHeader>
      <NavbarCus />
    </WrapperHeader>
  );
};
