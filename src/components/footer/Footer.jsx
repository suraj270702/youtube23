import React from 'react'
import './Footer.scss'
import facebook from '../../img/facebook.png'
import instagram from '../../img/instagram.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
          <div className="top">
           <div className="item">
            <h2>Categories</h2>
            <span>Food Donation</span>
            <span>Education Donation</span>
            <span>Pets Food Donation</span>
            <span>Medicine Donation</span>
            <span>Toys Donation</span>
            <span>Clothes Donation</span>
            <span>Packed Food Donation</span>
            <span>Old Age Donation</span>
           </div>
           <div className="item">
            <h2>Categories</h2>
            <span>Food Donation</span>
            <span>Education Donation</span>
            <span>Pets Food Donation</span>
            <span>Medicine Donation</span>
            <span>Toys Donation</span>
            <span>Clothes Donation</span>
            <span>Packed Food Donation</span>
            <span>Old Age Donation</span>
           </div>
           <div className="item">
            <h2>Categories</h2>
            <span>Food Donation</span>
            <span>Education Donation</span>
            <span>Pets Food Donation</span>
            <span>Medicine Donation</span>
            <span>Toys Donation</span>
            <span>Clothes Donation</span>
            <span>Packed Food Donation</span>
            <span>Old Age Donation</span>
           </div>
           <div className="item">
            <h2>Categories</h2>
            <span>Food Donation</span>
            <span>Education Donation</span>
            <span>Pets Food Donation</span>
            <span>Medicine Donation</span>
            <span>Toys Donation</span>
            <span>Clothes Donation</span>
            <span>Packed Food Donation</span>
            <span>Old Age Donation</span>
           </div>
           <div className="item">
            <h2>Categories</h2>
            <span>Food Donation</span>
            <span>Education Donation</span>
            <span>Pets Food Donation</span>
            <span>Medicine Donation</span>
            <span>Toys Donation</span>
            <span>Clothes Donation</span>
            <span>Packed Food Donation</span>
            <span>Old Age Donation</span>
           </div>
          </div>
          <hr/>
          <div className="bottom">
             <div className="left">
                <h2>© LetsHelp</h2>
                <span>© LetsHelp Non Profit Organization Limited </span>
             </div>
             <div className="right">
              <div className='social'>
                <img src={facebook} />
                <img src={instagram} />
              </div>
             </div>
          </div>
        </div>
    </div>
  )
}

export default Footer