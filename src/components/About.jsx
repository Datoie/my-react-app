import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about-container'>
        <div className='card'>
            <img src="./public/assets/icon-access-anywhere.svg" alt="pc acces" />
            <h2>Access your files, anywhere</h2>
            <p>The ability to use a smartphone, tablet, or computer to access your account means your 
              files follow you everywhere.
            </p>
        </div>

        <div className='card'>
            <img src="./public/assets/icon-security.svg" alt="Securtiy icon" />
            <h2>Security you can trust</h2>
            <p>2-factor authentication and user-controlled encryption are just a couple of the security 
              features we allow to help secure your files.
            </p>
        </div>

        <div className='card'>
            <img src="./public/assets/icon-collaboration.svg" alt="Real time collaboration icon" />
            <h2>Real-time Collaboration</h2>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. 
            No email attachments required.
            </p>
        </div>

        <div className='card'>
            <img src="./public/assets/icon-any-file.svg" alt="Store files icon" />
            <h2>Store any type of file</h2>
            <p> Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
              file types to be securely stored and shared.
            </p>
        </div>
    </div>
  )
}

export default About
