import React, { Children } from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
     {children}
    <Footer/>
    </>
  )
}

export default Layout