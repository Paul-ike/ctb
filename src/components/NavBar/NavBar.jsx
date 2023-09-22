import React from 'react'
import './NavBar.css'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='nav'>
      <div className='header'>
        <Link className='h1' to={'/'}>
          <h1 className="animate__animated animate__fadeInLeftBig">Cakes By Jack</h1>
        </Link>
      </div>
      <div className='links animate__animated animate__fadeInDownBig'>
        <Link className='link' to={'/'}>Home</Link>
        <Link className='link' to={'/home/weddings'}>Cakes</Link>
        <Link className='link' to={'/home/studio'}>Pricing</Link>
        <Link className='link' to={'/order'}>Order</Link>
        <Link className='link' to={'/shop-online'}>Online</Link>
        <Link className='link' to={'/gallery'}>Gallery</Link>
        <Link className='link' to={'/t&c'}>Terms and Conditions</Link>
      </div>
      <div className='icons'>
        <a href='https://www.instagram.com/tabbz_the_baker/'><i className="fa-brands fa-instagram fa-lg animate__animated animate__fadeInRightBig"></i></a>
        <a href='https://www.facebook.com/people/tabbz_the_baker/100063595178186/'><i className="fa-brands fa-facebook-f fa-lg animate__animated animate__fadeInRightBig"></i></a>
      </div>
    </div>
  )
}

export default NavBar