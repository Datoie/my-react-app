import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product-container'>
        <div className='product-img'>
            <img src='./public/assets/illustration-stay-productive.png'/>
        </div>
        <div className='product-heading'>
            <h2>Stay productive, wherever you are</h2>
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
            storage needs. <br/><br/>
            Securely share files and folders with friends, family and colleagues for live collaboration. No email 
            attachments required.
            </p>
            <a >See how Fylo works</a>
        </div>
    </div>
  )
}

export default Product
