import React from 'react'
import wibulogo from '../../assets/images/wibulogo.png'
import headerlunar from '../../assets/images/header-lunar.png'
import headerlunar2 from '../../assets/images/header-lunar2.png'
import { CarOutlined, CaretDownOutlined, FileSearchOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
import { WrapperAccount, WrapperSearch, SearchButton, WrapperHeader } from './style';
import { Button, Col, Input } from 'antd';
import { Link } from 'react-router-dom'

export default function HeaderComponent() {
  return (
    <WrapperHeader className=' d-flex'>
      <img src={headerlunar2} />
      <Navbar />
      <img src={headerlunar} />
    </WrapperHeader>
  )
}

const Navbar = () => {
  return (
    <nav className="navbar container">
      <Col span={6} >
        <Link to="/">
          <img height={70} src={wibulogo} />
        </Link>
      </Col>

      <Col span={11}>
        <WrapperSearch placeholder="Nhập tên game hoặc tag để tìm kiếm"
          suffix={
            <SearchButton type="primary" icon={<SearchOutlined />} className='bg-danger'></SearchButton>
          }
        />
      </Col>


      <Col span={3} className='text-light'>
        <WrapperAccount>
          <UserOutlined style={{ fontSize: "25px", marginRight: "5px" }} />
          Đăng nhập
        </WrapperAccount>
      </Col>

      <Col span={3}>
        <button className='btn btn-outline-light'>
          <ShoppingCartOutlined style={{ fontSize: "25px", marginRight: "5px" }} />
          Giỏ hàng
        </button>
      </Col>
    </nav>

  )
}