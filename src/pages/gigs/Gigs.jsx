import React from 'react'
import './Gigs.scss'
import { donationCategory } from '../../data'
import GigCard from '../../components/Gigcard/GigCard'
const Gigs = () => {
  return (
    <div className='gigs'>
      <div className="container">
        <span>LetsHelp ,Food Donation</span>
        <h1>Food Donations Requests</h1>
        <p>
          Your contribution will bring smiles on peoples
        </p>
        <div className="cards">
         {
          donationCategory?.map((item)=>(
            <GigCard key={item.id} item={item} />
          ))
         }
        </div>
      </div>
    </div>
  )
}

export default Gigs