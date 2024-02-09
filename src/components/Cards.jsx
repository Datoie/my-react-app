import React from 'react'
import './Cards.css'
import avatarIcon1 from '../assets/profile-1.jpg'
import avatarIcon2 from '../assets/profile-2.jpg'
import avatarIcon3 from '../assets/profile-3.jpg'

function Cards() {
  return (
    <div className='card-container-main'>

      <div className="card-container">
        <p> Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
        become a well-oiled collaboration machine.</p>
        <div className="img-container">
          <img src={avatarIcon1} alt="profile 1" />
          <div>
            <h3>Samule kim</h3>
            <p>Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>

      <div className="card-container">
        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
        become a well-oiled collaboration machine.</p>
        <div className="img-container">
          <img src={avatarIcon2} alt="profile 1" />
          <div>
            <h3>Bruce McKenzie</h3>
            <p>Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>
      <div className="card-container">
        <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
        become a well-oiled collaboration machine.</p>
        <div className="img-container">
          <img src={avatarIcon3} alt="profile 1" />
          <div>
            <h3>Iva Boyd</h3>
            <p>Founder & CEO, Huddle</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cards
