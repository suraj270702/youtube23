import React from 'react'
import './Slider.scss'
import Slider from 'infinite-react-carousel';
import { data } from '../../data';
import CategoryCard from '../category/CategoryCard';
const Slide = ({children,slidesToShow,arrowsScroll}) => {
  return (
    <div className='slide'>
        <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
    {
      children
    }
  </Slider>
        </div>
    </div>
  )
}

export default Slide