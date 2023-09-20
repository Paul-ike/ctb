import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import './Home.css'

const Home = () => {
  return (
    <>
    <NavBar />
    <div className='home'>
      <h1 className="animate__animated animate__fadeIn">Discover Your Cake Dreams</h1>
    </div>
    <div className='low-section'>
      <div className='cards'>
        <div className='card'>
          <img src='https://i.weddingomania.com/2013/09/a-stylish-white-wedding-cake-with-grey-drip-fresh-berries-fruits-and-leaves-and-blooms-is-ultimate-for-Halloween.jpg' alt='cake1'/>
          <p>Our Process</p>
        </div>
        <div className='card'>
          <img src='https://whimsicalwonderlandweddings.com/wp-content/uploads/2023/06/Vintage-Buttercrea-Wedding-Cake-Lines-Wildly-In-Love-720x1080.jpg' alt='cake2' />
          <p>Pricing</p>
        </div>
        <div className='card'>
          <img src='https://www.theknot.com/tk-media/images/657849da-42f6-4a0c-aeb7-8a8bd01fe76a~rs_768.h-cr_0.157.1080.1597' alt='cake3' />
          <p>Gallery</p>
        </div>
      </div>
      <div className='btn'>
      <Link to={'/order'}>
        <button>Get In Touch</button>
      </Link>
      </div>
    </div>
    </>
  )
}

export default Home