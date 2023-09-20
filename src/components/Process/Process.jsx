import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import './Process.css'

const Process = () => {
  return (
    <div className='process-section'>
        <NavBar />
        <div className='process'>
            <h1>Our Process</h1>
            <hr />
            <div className='process-cards'>
                <div className='process-card'>
                    <h4>Step 1 - Get in touch</h4>
                    <p>Get in touch via  our contact form below - tell us all about your wedding and all about your style! we want to know as much as possible that will help us create the perfect piece to match your event. If you are not sure what you would like, we are more than happy to set up a phone call/meeting to discuss your cake. We recommend getting in touch at least 6 months prior to your wedding day, however the earlier the better.</p>
                </div>
                <div className='process-card'>
                    <h4>Step 2 - Quote</h4>
                    <p>Once we have your wedding details established. We will supply you with a quote for your desired design.<br/>If you wish to proceed with your order, a 50% deposit will secure your date!</p>
                </div>
                <div className='process-card'>
                    <h4>Step 3 - Tasting</h4>
                    <p>Purchase a tasting box from our online store to try our signature flavours. You may choose as many flavours as the number of tiers you have for your cake. eg, 3 tiers = 3 flavours. Or you can simply choose 1 if that is what you prefer.</p>
                </div>
                <div className='process-card'>
                    <h4>Step 4 - Finalising Details</h4>
                    <p>Now that we have your flavours and design sorted, we can discuss important details for the day of your wedding. Eg bump in/bump out times and all of the behind the scenes work. We are more than happy to liaise with your venue manager to ensure the day runs smoothly. If your cake has fresh florals we will also be in touch with your florist to ensure we are using the same varieties/colours.</p>
                </div>
                <div className='button'>
                    <Link to={'/order'}>
                        <button>Get In Touch</button>
                    </Link>
                </div>
            </div>
        </div>
        <div className='next'>
            <h1><Link className='stu' to={'/home/studio'}>Pricing</Link></h1>
            <Link className='stu' to={'/home/studio'}><i class="fa-solid fa-arrow-right-long"></i></Link>
        </div>
    </div>
  )
}

export default Process