import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import './Pricing.css'

const Pricing = () => {
  return (
    <div>
        <NavBar />
        <div className='pricing-section'>
          <h1 className="animate__animated animate__fadeIn">Pricing</h1>
        </div>
        <div className='price-guide'>
          <h1>Cake Pricing Guide</h1>
          <hr />
          <div className='details'>
            <div className='detail'>
              <p>There are many details and factors that will affect the pricing of your wedding cake. This is why it is important to get in touch with us so we can discuss your personal style and needs. Certain elements such as fondant designs, fresh and handmade flowers, and cake toppers will affect the overall pricing. Pre designed cakes for smaller events can be found on our online store.</p>
              <p>Pricing for cake design begins at Ksh 3000</p>
            </div>
          </div>
          <div className='btn'>
          <Link to={'/order'}>
            <button>Get In Touch</button>
          </Link>
          </div>
        </div>
        <div className='low-price-sect'>
          <div className='below-link'>
            <Link className='pric-links' to={'/home/wedding'}>
            <i className="fa-solid fa-arrow-left-long"></i>
            </Link>
            <Link className='pric-links' to={'/home/wedding'}>
            <h1>Our Process</h1>
            </Link>
          </div>
          <div className='below-link'>
          <Link className='pric-links' to={'/home/gallery'}>
            <h1>Gallery</h1>
          </Link>
          <Link className='pric-links' to={'/home/gallery'}>
            <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
          </div>
        </div>
    </div>
  )
}

export default Pricing