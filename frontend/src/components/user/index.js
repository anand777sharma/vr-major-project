import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../user/Header';
import Footer from './Footer';
const User = () => {
  return (
    <div>
       <Header />
       <Outlet/>
       
    </div>
  )
}

export default User