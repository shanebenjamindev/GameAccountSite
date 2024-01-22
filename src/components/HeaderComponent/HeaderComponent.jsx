import React, { useEffect, useRef, useState } from 'react';
import wibulogo from '../../assets/images/wibulogo.png';
import headerlunar from '../../assets/images/header-lunar.png';
import headerlunar2 from '../../assets/images/header-lunar2.png';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { WrapperAccount, WrapperSearch, SearchButton, WrapperHeaderComponent } from './style';
import { Col } from 'antd';
import { Link } from 'react-router-dom';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import { CustomDropdownContent, CustomNav, CustomNavDropdown, CustomNavbar, Hambur } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faLifeRing, faMoneyBill, faCreditCard, faBars } from '@fortawesome/free-solid-svg-icons';
import ItemComponent from '../ItemComponent/ItemComponent';
import data from '../../data.json';
import { WrapperBanner } from './style';

export default function HeaderComponent() {
  const [nav, setNav] = useState(false);

  const navigatorRef = useRef(null);
  const navigatorToggleRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        navigatorRef.current &&
        !navigatorRef.current.contains(event.target) &&
        navigatorToggleRef.current &&
        !navigatorToggleRef.current.contains(event.target)
      ) {
        setNav(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [])

  const openNavi = () => {
    setNav(!nav);
  };

  return (
    <>
      <WrapperHeaderComponent>
        <img className='d-none d-md-block' alt='lunar' src={headerlunar2} />

        <div className='container  w-100 d-flex align-items-center justify-content-between'>
          <Col sm={4}>
            <Hambur onClick={openNavi} ref={navigatorToggleRef}>
              <span></span>
              <span></span>
              <span></span>
            </Hambur>
          </Col>

          <Col md={6} className='d-none d-md-block'>
            <div>
              <Link to="/">
                <img height={70} src={wibulogo} alt="Logo" />
              </Link>
            </div>
          </Col>

          <Col md={10} sm={7} className='my-2 text-center d-flex align-items-center'>
            <WrapperSearch
              type='text'
              placeholder="Nhập tên game hoặc tag để tìm kiếm"
              suffix={<SearchButton type="primary" icon={<SearchOutlined />} className='bg-danger'></SearchButton>}
            />
          </Col>

          <Col md={4} className='text-light text-center d-none d-md-block'>
            <Link className='text-light' to="/user">
              <UserOutlined style={{ fontSize: "25px", marginRight: "5px" }} />
              <span className='d-none d-md-inline-block'>Đăng nhập</span>
            </Link>
          </Col>

          <Col md={4} sm={10} className='text-center'>
            <ButtonComponent variant="primary-outlined-rev" text={
              <>
                <ShoppingCartOutlined style={{ fontSize: "25px", marginRight: "5px" }} />
                <span className='d-none d-md-inline-block'>Giỏ hàng</span>
              </>
            } />
          </Col>
        </div>
        <img className='d-none d-md-block' alt='lunar' src={headerlunar} />
      </WrapperHeaderComponent>
      <Banner />
      {nav ? <div ref={navigatorRef}><Navi /> </div> : <div className="d-none d-md-block"><Navi /></div>}
    </>
  );
};

function Banner() {
  return (
    <WrapperBanner style={{ height: "250px" }}>
      <h1>Welcome To Shop Wibu Account</h1>
    </WrapperBanner>
  );
}

function Navi() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const renderDropDown = () => {
    return data.map((game, index) => (
      <ItemComponent key={index} item={game} />
    ));
  };

  return (
    <CustomNavbar>
      <CustomNav>
        <CustomNavDropdown
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div onClick={handleDropdownToggle}>
            <FontAwesomeIcon className='mx-1' icon={faBars} />
            {' Danh mục sản phẩm'}
          </div>
          {dropdownVisible && (
            <CustomDropdownContent>
              {renderDropDown()}
            </CustomDropdownContent>
          )}
        </CustomNavDropdown>

        <Link className='nav-link text-dark' to="/tutorial">
          <FontAwesomeIcon className='mx-1' icon={faGamepad} />
          Hướng dẫn mua hàng
        </Link>
        <Link className='nav-link text-dark' to="/credit">
          <FontAwesomeIcon className='mx-1' icon={faCreditCard} />
          Hình thức thanh toán</Link>
        <Link className='nav-link text-dark' to="/top">
          <FontAwesomeIcon className='mx-1' icon={faMoneyBill} />
          Top Nạp</Link>
        <Link className='nav-link text-dark' to="https://www.facebook.com/profile.php?id=100012829152690">
          <FontAwesomeIcon className='mx-1' icon={faLifeRing} />
          Hỗ Trợ</Link>
      </CustomNav>
    </CustomNavbar>
  );
}
