import React from 'react'
import './Slider.scss'
import Slider from 'infinite-react-carousel';
import { data } from '../../data';
import CategoryCard from '../category/CategoryCard';
const CategorySlider = ({children,slidesToShow,arrowsScroll}) => {
  return (
    <div className='slide'>
        <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
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

export default CategorySlider