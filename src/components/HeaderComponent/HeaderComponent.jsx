import React from 'react'
import wibulogo from '../../assets/images/wibulogo.png'
import headerlunar from '../../assets/images/header-lunar.png'
import headerlunar2 from '../../assets/images/header-lunar2.png'

export default function HeaderComponent() {
  return (
    <header className='bg-danger d-flex'>
      <img src={headerlunar2} />
      <Navbar />
      <img src={headerlunar} />
    </header>
  )
}

const Navbar = () => {
  return (
    <nav className="navbar container">
      <a className="navbar-brand">
        <img width={200} src={wibulogo} />
      </a>
      <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>
      <button className='btn btn-outline-warning'>Giỏ hàng</button>
    </nav>

  )
}