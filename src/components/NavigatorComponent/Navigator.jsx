import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavigatorWrapper } from './style';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faLifeRing, faMoneyBill, faCreditCard, faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navigator() {
  return (
    <NavigatorWrapper className='d-none d-md-block'>
      <Navbar variant="light" expand="lg" className='container'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-around w-100">
            <NavDropdown title={
              <>
                <FontAwesomeIcon className='mx-1' icon={faBars} />
                {' Danh mục sản phẩm'}
              </>
            }>
              <NavDropdown.Item to="">
                Load danh mục sản phẩm ở đây</NavDropdown.Item>
              <NavDropdown.Item to="">Danh mục...</NavDropdown.Item>
            </NavDropdown>

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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavigatorWrapper>
  );
}
