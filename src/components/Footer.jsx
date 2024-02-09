import React from 'react'
import './Footer.css'
import locationIcon from '../assets/icon-location.svg'
function Footer() {
  return (
    <div className='footer-container'>
      <img className='footer-img' src="./public/assets/logo.svg" alt="" />
      <div className="footer-bottom">

      <ul className='footer-ul'>
        <div className="heading-container">
          <img src={locationIcon} alt="location logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam obcaecati molestiae repellendus. Vitae molestiae consectetur eos reprehenderit iure iste quaerat itaque omnis. Quos non rerum, aliquam corrupti voluptatibus dolores harum?</p>
        </div>
        
            <li><a href="tel">+1-543-123-4567</a></li>
            <li><a href="email">example@fylo.com</a></li>
        </ul>
        <ol>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy</a></li>
        </ol>
        <div className="fa-icons">
          <i className="fa fa-facebook-f"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-instagram"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer
