import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../images/logo.9a3d2645.svg'
export default function Navbar() {
  return (
    <>
    <nav className='navbar'>
      <div className='nav-center'>
        <Link to='/'>
          <img src={logo} alt='cocktail db logo' className='logo' />
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
      </nav>
      <Outlet/>
    </>
  )
}