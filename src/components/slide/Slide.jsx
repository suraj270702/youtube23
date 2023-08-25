import React from 'react'
import './Slider.scss'
import Slider from 'infinite-react-carousel';
import { data } from '../../data';
import CategoryCard from '../category/CategoryCard';
const Slide = () => {
  return (
    <div className='slide'>
        <div className="container">
        <Slider slidesToShow={5} arrowsScroll={5}>
    {
      data?.map((card)=>(
        <CategoryCard item={card} key={card.id}/>
      ))
    }
  </Slider>
        </div>
    </div>
  )
}

export default Slide