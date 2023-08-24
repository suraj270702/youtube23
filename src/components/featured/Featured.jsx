import React from 'react'
import   './Featured.scss'
import img from '../../img/AdobeStock_351441036-1068x641.jpeg'
import searchimg from '../../img/icons8-search-50.png'
const Featured = () => {
  return (
    <div className='featured'>
        <div className='container'>
            <div className='left'>
                <h1>Give for Good: Empower Change with Your Generosity</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src={searchimg} alt='search' />
                        <input type='text' placeholder='e.g Food Donation'/>

                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Common Category</span>
                    <button>Food</button>
                    <button>Clothes</button>
                    <button>Education</button>
                    <button>Pets Food</button>
                </div>
            </div>
            <div className='right'>
                <img src={img} className='hide-bg'/>
            </div>
        </div>
    </div>
  )
}

export default Featured