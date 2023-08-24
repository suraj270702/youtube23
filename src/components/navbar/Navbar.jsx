import React,{useEffect, useState} from 'react'
import './Navbar.scss'

import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
    const [active,setActive] = useState(false)
    const [open,setOpen] = useState(false)
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    const {pathname} = useLocation()
    useEffect(()=>{
       window.addEventListener("scroll",isActive);
       return ()=>{
          window.removeEventListener("scroll",isActive);
       }
    },[])
    const user={
        id : 1,
        name:"suraj",
        isNgo : true
    }
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className='link'>
               <span className='text'>LetsHelp</span>
               </Link>
               <span className='dot'>.</span>
            </div>
            <div className="links">
              <span>Donations</span>
              <span>Explore</span>
              <span>Latest</span>
              <span>Sign in</span>
              {!user?.isNgo && <span>Create A NGO Account</span>}
              {!user && <button>Join</button>}
              {
                user && (
                    <div className="user" onClick={()=>setOpen(!open)}>
                        
                        <img src="https://img.freepik.com/premium-vector/symbol-male-user-icon-circle-profile-icon-vector-illustration_276184-154.jpg?w=2000" alt="" />
                        <span>{user?.name}</span>
                        {
                            open && (
                                <div className="options">
                            {
                                user?.isNgo && (
                                    <>
                                    <Link to="/" className='link'>Add Donation Request</Link>
                                    <Link to="/" className='link'>Donations Request Listed</Link>
                                    
                                    </>
                                )
                            }
                            <Link to="/" className='link'>Donations</Link>
                            <Link to="/" className='link'>Messages</Link>
                            <Link to="/" className='link'>Logout</Link>
                        </div>
                            )
                        }
                    </div>
                )
              }
            </div>
            
        </div>
        {
            (active || pathname !== "/") && (
                <>
            <hr/>
            <div className="menu">
                <Link to="/" className='link'>Food </Link>
                <Link to="/" className='link'>Clothes </Link>
                <Link to="/" className='link'>Pets Food</Link>
                <Link to="/" className='link'>Toys </Link>
                <Link to="/" className='link'>Clothes </Link>
                <Link to="/" className='link'>Packed Foods </Link>
                <Link to="/" className='link'>Old Age Home </Link>
                <Link to="/" className='link'>Medicine</Link>
                <Link to="/" className='link'>Education</Link>
            </div>
            </>
            )
        }
        </div>
  )
}

export default Navbar