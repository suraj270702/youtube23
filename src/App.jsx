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
        }

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
