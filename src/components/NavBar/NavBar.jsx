import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='header'>
        <h1 className="animate__animated animate__fadeInLeftBig">Cakes By Jack</h1>
      </div>
      <div className='links animate__animated animate__fadeInDownBig'>
        <Link className='link' to={'/'}>Home</Link>
        <Link className='link' to={'/cakes'}>Cakes</Link>
        <Link className='link' to={'/pricing'}>Pricing</Link>
        <Link className='link' to={'/order'}>Order</Link>
        <Link className='link' to={'/online'}>Online</Link>
        <Link className='link' to={'/gallery'}>Gallery</Link>
        <Link className='link' to={'/t&c'}>Terms and Conditions</Link>
      </div>
      <div className='icons'>
        <i className="fa-brands fa-instagram fa-lg animate__animated animate__fadeInRightBig"></i>
        <i className="fa-brands fa-facebook-f fa-lg animate__animated animate__fadeInRightBig"></i>
      </div>
    </div>
  )
}

export default NavBar