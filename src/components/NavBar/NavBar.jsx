import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className='header'>
      <div>
      <Link className='logo' to={'/'}>Cakes By Tabbz</Link>
      </div>
      <input type='checkbox' id='check' />
      <label for="check" className='icon'><i class='bx bx-menu' id='menu-icon' ></i>
      <i class='bx bx-x' id='close-icon' ></i></label>
      <div className='navbar'>
        <div className='links'>
          <Link className='link' to={'/'}>Home</Link>
          <Link className='link' to={'/home/weddings'}>Cakes</Link>
          <Link className='link' to={'/home/studio'}>Pricing</Link>
          <Link className='link' to={'/order'}>Order</Link>
          <Link className='link' to={'/shop-online'}>Online</Link>
          <Link className='link' to={'/gallery'}>Gallery</Link>
          <Link className='link' to={'/t&c'}>Terms and Conditions</Link>
        </div>
        <div className='dm'>
          <a href='https://www.instagram.com/tabbz_the_baker/'><i className='fa-brands fa-instagram fa-lg animate__animated animate__fadeInRightBig'></i></a>
          <a href='https://www.facebook.com/people/tabbz_the_baker/100063595178186/'><i className='fa-brands fa-facebook-f fa-lg animate__animated animate__fadeInRightBig'></i></a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
