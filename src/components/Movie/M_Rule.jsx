import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import M_FstPage from './M_FstPage'
import M_signIn from './M_signIn'
import M_nav from './M_nav'
import M_SecondPage from './M_SecondPage'

export default function M_Rule() {
  return (
    <>
    <BrowserRouter>
    <M_nav/>
    <Routes>
        <Route path="/" element={<M_FstPage/>}/>
        <Route path="/secondpg" element={<M_SecondPage/>}/>
        <Route path="/signin" element={<M_signIn/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}
