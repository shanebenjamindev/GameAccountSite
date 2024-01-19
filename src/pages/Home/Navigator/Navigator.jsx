import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavigatorWrapper } from './style';
import { Link } from 'react-router-dom';

export default function Navigator() {
  return (
    <NavigatorWrapper className='d-none d-md-block'>
      <Navbar variant="light" expand="lg" className='container'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-link justify-content-around w-100">
            <NavDropdown title="Danh mục sản phẩm">
              <NavDropdown.Item to="">Load danh mục sản phẩm ở đây</NavDropdown.Item>
              <NavDropdown.Item to="">Danh mục...</NavDropdown.Item>
            </NavDropdown>

            <Link className='nav-link text-dark' to="/about">Hướng dẫn mua hàng</Link>
            <Link className='nav-link text-dark' to="/about">Hình thức thanh toán</Link>
            <Link className='nav-link text-dark' to="/top">Top Nạp</Link>
            <Link className='nav-link text-dark' to={"https://www.facebook.com/profile.php?id=100012829152690"}>Hỗ Trợ</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    </NavigatorWrapper >
  )
}
