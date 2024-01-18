import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavigatorWrapper } from './style';

export default function Navigator() {
  return (
    <NavigatorWrapper>
      <Navbar variant="light" expand="lg" className='container'>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=' '>
          <Nav className="justify-content-around w-100">
            <NavDropdown title="Danh mục sản phẩm">
              <NavDropdown.Item to="">Load danh mục sản phẩm ở đây</NavDropdown.Item>
              <NavDropdown.Item to="">Danh mục...</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link to="/about">Hướng dẫn mua hàng</Nav.Link>
            <Nav.Link to="/about">Hình thức thanh toán</Nav.Link>
            <Nav.Link to="/about">Top nạp</Nav.Link>

            <Nav.Link to="/contact">Hỗ trợ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
    </NavigatorWrapper >
  )
}
