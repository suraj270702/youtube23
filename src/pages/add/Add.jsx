import React from 'react'
import './Add.scss'
const Add = () => {
  return (
    <div className='add'>
      <div className="container">
        <h1>Add A New Request</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input type='text' placeholder='e.g Food Donation' />
            <label htmlFor=''>Category</label>
            <select id='category' name='category' >
              <option value='Food Donation'>Food Donation</option>
              <option value='Clothes Donation'>Clothes Donation</option>
              <option value='Pets Food Donation'>Pets Food Donation</option>
              <option value='Toys Donation'>Toys Donation</option>



            </select>
            <label htmlFor=''>Cover Images</label>
            <input type='file' />
            <label htmlFor=''>Upload Images</label>
            <input type='file' multiple/>
            <label htmlFor=''>Description</label>
            <textarea name='' cols='30' rows='10' />
            <button>Add</button>
          </div>
          <div className="right">
          <label htmlFor=''>Sub Category</label>
          <input type='text' placeholder='e.g Food Donation' />
          <label htmlFor=''>Short Description</label>
            <textarea name='' cols='30' rows='10' />
            <label htmlFor=''>Add Basic Donation</label>
          <input type='text' placeholder='e.g Healthy Food' />
          <input type='text' placeholder='e.g Home Cooked Food' />
          <input type='text' placeholder='e.g Healthy Food' />

          <input type='text' placeholder='e.g Healthy Food' />
          <label htmlFor=''>Add Minimum Donation</label>
          <input type='number'  />



          </div>
        </div>
      </div>
    </div>
  )
}

export default Add