import React, { useEffect } from 'react'
import Header from './Header'
import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        });
    }, [pathname]);

  return (
    <div>
      <Header />
      <Navbar />
      
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
