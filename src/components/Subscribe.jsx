import React from 'react'
import './Subscribe.css'

function Subscribe() {
  return (
    <>
        <div className='subscribe-height'></div>
        <div className='subscribe-container'>
            <h2>Get early acces today</h2>
            <p> It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
                questions, our support team would be happy to help you.</p>
            <form action="/" method='get'>
                <input type='input' className='subscribe-input' placeholder='email@example.com'/>
                <button className='submit-btn' size={'50px'} type='submit' >Get Started For Free</button>
            </form>
        </div>
    </>
  )
}

export default Subscribe
