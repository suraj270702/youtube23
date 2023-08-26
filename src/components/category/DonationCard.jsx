import React from 'react'
import { Link } from 'react-router-dom'
import './DonationCard.scss'
const DonationCard = ({item}) => {
  return (
    <Link to="/" className='link'>
        <div className='donationcard'>
        <img src={item.img} />
        <div className="info">
            <img src={item.profile} alt='avatar' />
            <div className="texts">
                <h1>{item.category}</h1>
                <span>{item.username}</span>
            </div>
        </div>
    </div>
    </Link>
  )
}

export default DonationCard