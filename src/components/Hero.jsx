import React from 'react'
import './Hero.css'
import illustration from '../assets/illustration-intro.png'

function Hero() {
  return (
    <div className='hero-contianer'>
      <div className='bg-img'></div>
        <div className='hero-img'>
            <img src={illustration} />
        </div>
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p className='hero-p'>
        Fylo stores all your most important files in one secure location. Access them wherever 
        you need, share and collaborate with friends family, and co-workers.
        </p>
      <button className='hero-button'>Get Started</button>
    </div>
  )
}

export default Hero
