import './Header.css'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
function Header (){

    const [click, setClick] = useState(false)
    const [widht, setWidth] = useState(800)
    
    function ion() {
        if(handleResize() <= 800){
           return(
               <FontAwesomeIcon onClick={handleClick} className={click ? 'burger-icon' : 'burger-icon'} icon={faBars} />
           )
        }
    }

    function handleResize(){
        window.addEventListener('resize', () => {
            (setWidth(window.innerWidth))
        })
        return widht
    }

    function handleClick(){
        setClick(!click)
    }
    return(
        <div className='header-container'>
            <img src='./assets/logo.svg' alt='Main logo' />
            <ul className={ (widht > 800 || 'ul-top') && widht < 800 && click ? 'burger-resize' : 'ul-top' }>
                <li><a href='#'>Features</a></li>
                <li><a href='#'>Team</a></li>
                <li><a href='#'>Sign in</a></li>
            </ul>
            {ion()}
        </div>
    )
}

export default Header