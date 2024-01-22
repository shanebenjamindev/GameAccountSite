import React, { useRef, useState } from 'react';
import { CustomDropdownContent, CustomNav, CustomNavDropdown, CustomNavbar } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faLifeRing, faMoneyBill, faCreditCard, faBars } from '@fortawesome/free-solid-svg-icons';
import ItemComponent from '../ItemComponent/ItemComponent';
import data from '../../data.json';
import { Link } from 'react-router-dom';

export default function Navigator() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

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
    <CustomNavbar className=''>
      <CustomNav>
        <CustomNavDropdown
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div>
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