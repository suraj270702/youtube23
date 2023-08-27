import React from 'react'
import './Gigcard.scss'
import img from '../../img/360_F_406154090_rkriySX3dV4KkKwVq0ZLf3Igr956JvU1.jpg'
import img1 from '../../img/kisspng-logo-brand-font-product-line-your-home-for-health-achhadoctor-in-5c7c8f19d4cff5.0460816115516669698717.jpg'
import { Link } from 'react-router-dom'
const GigCard = ({item}) => {
  return (
    <Link to="/" className='link'>
    <div className='gigCard'>
        <img src={item.img} />
        <div className="info">
            <div className="user">
                <img src={item.profile} />
                <span>{item.username}</span>
            </div>
            <p>{item.description}</p>
            <div className='verify'>
                {
                    item.verify ? (
                        <img src={img} />
                    ):(
                        <img src={img1} />
                    )
                }
                
            </div>
        </div>
    </div>
    </Link>
  )
}

export default GigCard