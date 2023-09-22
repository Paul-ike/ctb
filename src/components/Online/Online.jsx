import React from 'react'
import './Online.css'

const Online = () => {
  return (
    <div className='store'>
        <div className='store-header'>
            <h1>Online Store</h1>
            <div className='store-variety'>
                <div className='cupcake'>Cupcakes</div>
                <div className='tasting'>Tasting Boxes</div>
                <div className='cak'>Cakes</div>
            </div>
        </div>
        <hr />
        <div className='store-items'>
            <div className='item-card'>
                <img src='https://cdn.thewirecutter.com/wp-content/media/2023/07/boxedchocolates-2048px-1188.jpg?auto=webp&quality=75&width=1024' alt='taste-box' />
                <p>Cake Tasting Box - September 30th</p>
                <p>Ksh 5000</p>
            </div>
        </div>
    </div>
  )
}

export default Online