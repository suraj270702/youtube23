import Navbar from "./components/navbar/Navbar"
import React from "react"
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";
import './app.scss'
import Gigs from "./pages/gigs/Gigs";
import Gig from "./pages/gig/Gig";
import MyGigs from "./pages/mygigs/MyGigs";
import Help from "./pages/orders/Help";
import Messages from "./pages/messages/Messages";
import Message from "./pages/message/Message";
function App() {

  const Layout =()=>{
    return(
      <>
      <Navbar />
      <Outlet />
      <Footer />
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element : <Home />
        },
        {
          path:"/add",
          element : <Add />
        },
        {
          path:"/gigs",
          element : <Gigs />
        },{
          path:"/gigs/:id",
          element : <Gig />
        },{
          path:"mygigs",
          element:<MyGigs />
        },{
          path : "/help",
          element : <Help />
        },{
          path : "/messages",
          element : <Messages />
        },
        {
          path : "message/123",
          element : <Message />
        },
        

      ]
    },
  ]);
  
  return (
    <div>
       <RouterProvider router={router} />
      
    </div>
  )
}

export default App
