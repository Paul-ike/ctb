import React from 'react'
import './Order.css'
import NavBar from '../NavBar/NavBar'


const Order = () => {
  return (
    <>
    <NavBar />
    <div className='order-header'>
        <h1  className="animate__animated animate__fadeInUp">Come Grab A Slice</h1>
    </div>
    <div className='low-section'>
        <div className='low-head'>
            <h1>Wedding & Event Cake Form</h1>
            <p>Cake Design Begins At $500</p>
        </div>
        <hr />
        <form>
            <label for="name">Name <span>(required)</span></label><br/>
            <div className='name'>
                <div className='firstname'>
                    <label for="firstname">First Name</label><br/>
                    <input id='firstname' type="text" name="firstname"/><br/>
                </div>
                <div>
                    <label for="lastname">Last Name</label><br/>
                    <input id='lastname' type="text" name="lastname"/><br/>
                </div>
            </div>
            <label htmlFor="email">Email <span>(required)</span></label><br/>
            <input id= "email"type="email"/><br/>
            <label for="contact">Contact Number <span>(required)</span></label><br/>
            <input id= "contact"type="text"/><br/>
            <label for="event">Event Type <span>(required)</span></label><br/>
            <select id='event'>
                <option value="1">Engagement</option>
                <option value="2">Wedding</option>
                <option value="3">Anniversary</option>
                <option value="4">Birthday</option>
                <option value="5">Baby Shower</option>
                <option value="6">Christening</option>
                <option value="7">Other</option>
            </select><br/>
            <p className='date'>Date of Event <span>(required)</span></p><br/>
            <span>DD/MM/YY</span><br/>
            <input id= "date"type="text"/><br/>
            <label for="time">Time of Reception/Event <span>(required)</span></label><br/>
            <input className='eat-input' type="time" id="timeInput" name="time" /><br/>
            <p className='eat'>in East African Time</p><br/>
            <label for="location">Event Location <span>(required)</span></label><br/>
            <input id= "location"type="text"/><br/>
            <label for="guest">Number of Guests <span>(required)</span></label><br/>
            <input id= "guest"type="text"/><br/>
            <label for="portion">Portion Sizes <span>(required)</span></label><br/>
            <p><span>Size of portion needed. Eg, Served as dessert or after dessert with tea & coffee</span></p>
            <div className='checkbox'>
                <input className='check' id='portion1' type='checkbox'/> Coffee Portions<br/>
                <input className='check' id='portion2' type='checkbox'/> Dessert Portions<br/>
            </div>
            <label for="desc">Description <span>(required)</span></label><br/>
            <p className='descr'><span>Please provide a description of the cake you are after and information such as themes and colour palettes</span></p>
            <textarea id='desc'></textarea><br/>
            <label for="comment">Other Comments</label><br/>
            <textarea id='comment'></textarea><br/>
            <label for="hear">Where did you hear about us?</label><br/>
            <select id='hear'>
                <option value="1">Instagram</option>
                <option value="2">Facebook</option>
                <option value="3">From a friend</option>
                <option value="4">Website</option>
                <option value="5">Other</option>
            </select><br/>
            <button className='button' type="submit">Submit</button>
        </form>
        <div className='low-socials'>
            <h1>Follow</h1>
            <a href='https://www.instagram.com/tabbz_the_baker/' className='link'>Instagram</a><br/>
            <a href='https://www.facebook.com/people/tabbz_the_baker/100063595178186/' className='link'>Facebook</a>
            <h1>Contact Us</h1>
            <p>Email: tashsamuels@gmail.com</p>
            <p>tel: +254 705 673 353</p>
        </div>
    </div>
    </>
  )
}

export default Order