import React from 'react'
import './CategoryCard.scss'
import Lib from 'infinite-react-carousel'
import { Link } from 'react-router-dom'
const CategoryCard = ({item}) => {
  return (
    <Link to="/">
        
        <div className='categorycard'>
       <img src={item.img} alt='category image' />
       
       
    </div>
    </Link>
  )
}

export default CategoryCard