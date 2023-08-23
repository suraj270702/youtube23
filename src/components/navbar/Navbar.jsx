import React,{useEffect, useState} from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [active,setActive] = useState(false)
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    useEffect(()=>{
       window.addEventListener("scroll",isActive);
       return ()=>{
          window.removeEventListener("scroll",isActive);
       }
    },[])
    const user={
        id : 1,
        name:"suraj",
        isNgo : false
    }
  return (
    <div className={active ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
                {/*<Link to="/">*/}
               <span className='text'>LetsHelp</span>
               {/*</div></Link>*/}
               <span className='dot'>.</span>
            </div>
            <div className="links">
              <span>Donations</span>
              <span>Explore</span>
              <span>Latest</span>
              <span>Sign in</span>
              {!user?.isNgo && <span>Create A NGO Account</span>}
              {!user && <button>Donate</button>}
              {
                user && (
                    <div className="user">
                        
                        <img src="https://img.freepik.com/premium-vector/symbol-male-user-icon-circle-profile-icon-vector-illustration_276184-154.jpg?w=2000" alt="" />
                        <span>{user?.name}</span>
                        <div className="options">
                            {
                                user?.isNgo && (
                                    <>
                                    <span>Add Donation Request</span>
                                    <span>Donations Request Listed</span>
                                    
                                    </>
                                )
                            }
                            <span>Donations</span>
                            <span>Messages</span>
                            <span>Logout</span>
                        </div>
                    </div>
                )
              }
            </div>
            
        </div>
        {
            active && (
                <>
            <hr/>
            <div className="menu">
                <span>Test1</span>
                <span>Test2</span>
            </div>
            </>
            )
        }
        </div>
  )
}

export default Navbar