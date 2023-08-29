import React from 'react'
import './Message.scss'
import { Link } from 'react-router-dom'
const Message = () => {
  return (
    <div className='message'>
        <div className="container">
            <span className='breadcrumb'>
                <Link to="/messages" className='link'>Messages</Link>
                John Doe 

            </span>
            <div className="messages">
               <div className="item">
                <img src='https://cdn-icons-png.flaticon.com/128/2202/2202112.png' />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, cupiditate! Consequatur vitae incidunt, eos suscipit error ad, repellat neque sit obcaecati saepe sed maxime, ea adipisci veritatis modi quaerat quibusdam.</p>
               </div>
               <div className="item owner">
                <img src='https://cdn-icons-png.flaticon.com/128/2202/2202112.png' />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, cupiditate! Consequatur vitae incidunt, eos suscipit error ad, repellat neque sit obcaecati saepe sed maxime, ea adipisci veritatis modi quaerat quibusdam.</p>
               </div>
               <div className="item">
                <img src='https://cdn-icons-png.flaticon.com/128/2202/2202112.png' />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, cupiditate! Consequatur vitae incidunt, eos suscipit error ad, repellat neque sit obcaecati saepe sed maxime, ea adipisci veritatis modi quaerat quibusdam.</p>
               </div>
               <div className="item owner">
                <img src='https://cdn-icons-png.flaticon.com/128/2202/2202112.png' />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, cupiditate! Consequatur vitae incidunt, eos suscipit error ad, repellat neque sit obcaecati saepe sed maxime, ea adipisci veritatis modi quaerat quibusdam.</p>
               </div>
            </div>
            <div className="write">
                <textarea name='' placeholder='write a message ' id='' cols='30' rows='10'></textarea>
                <button>Send</button>
            </div>
        </div>
    </div>
  )
}

export default Message