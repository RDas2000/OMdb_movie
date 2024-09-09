//https://www.omdbapi.com/?s=harry&apikey=10454410

import React from 'react'
import logo1 from './images/netflix4.png'
import './Movie.css'
import { NavLink, useNavigate } from 'react-router-dom';

export default function M_nav() {
  const nav=useNavigate()
  const login=()=>{
      nav(`/signin`)
  }


  return (
    <>
   <div className='nav-div transparent fixed shadow-lg ... w-full top-0 left-0 z-50'>
   <nav className='nav flex justify-between pl-10 pr-40'>
   <NavLink to="/"><img src={logo1} className='movie-logo' ></img></NavLink>
   <div className='movie-signIn pt-5 '><button className='signIn-button bg-red-600 rounded-lg  text-white text-xs tracking-wide' onClick={login} >Sign IN</button></div>
   </nav>
   </div>

    </>
  )
}