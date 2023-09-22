import React from 'react'
import { Link } from 'react-router-dom'
import './Gallery.css'

const Gallery = () => {
  return (
    <div>
        <div className='gallery'>
            
        <div className='img-card'>
            <img src='https://media.bakingo.com/warmth-of-love-vanilla-cake-cake3181vani-A.jpg' alt='cake4' />
            </div>
            
            <div className='img-card'>
            <img src='https://wallpapersmug.com/download/3840x2400/26150f/cake-dessert.jpg' alt='cake2' />
            </div>
            <div className='img-card'>
            <img src='https://rare-gallery.com/uploads/posts/560347-cake-4k-wallpaper.jpg' alt='cake3' />
            </div>
            <div className='img-card'>
            <img src='https://images3.alphacoders.com/104/1042455.jpg' alt='cake1' />
            </div>
            <div className='img-card'>
            <img src='https://images3.alphacoders.com/106/1066385.jpg' alt='cake5' />
            </div>
            <div className='img-card'>
            <img src='https://e0.pxfuel.com/wallpapers/338/378/desktop-wallpaper-cinnamon-coffee-cake-retina-ultra-background.jpg' alt='cake6' />
            </div>
            <div className='img-card'>
            <img src='https://images.unsplash.com/photo-1562440499-64c9a111f713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80' alt='cake7' />
            </div>
            <div className='img-card'>
            <img src='https://images.pond5.com/birthday-cake-candles-and-sparklers-footage-085537367_prevstill.jpeg' alt='cake8' />
            </div>
        </div>
        <div className='below-sect'>
            <Link className='stu' to={'/home/studio'}><i class="fa-solid fa-arrow-left-long"></i></Link>
            <h1><Link className='stu' to={'/home/studio'}>Pricing</Link></h1>
        </div>
    </div>
  )
}

export default Gallery