//https://www.omdbapi.com/?s=harry&apikey=10454410
import React, { useEffect, useState } from 'react'
import M_nav from './M_nav'
import EndNav from './M_EndNav';

import { PiGreaterThanLight } from "react-icons/pi";
import { TfiPlus } from "react-icons/tfi";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import dataReason from './JsonFile.json'



import axios from 'axios';
//https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies

export default function M_FstPage() {

  const nav=useNavigate()
  const [storage,setStorage]=useState([])
  const [email,setEmail]=useState(null)
  const [load,setLoad]=useState(false)
  const [data,setData]=useState([])
  const [toggle,setToggle]=useState(false)
  const [toggleAns,setToggleAns]=useState(false)
  const [secondtoggle,setSecondTtoggle]=useState(false)
  const [secondToggleAns,setSecondToggleAns]=useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      
    },1000)
     setLoad(true)
   
  })
  

  useEffect(()=>{
    axios.get('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
    .then((res)=>{
      setData(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    setStorage(JSON.parse(localStorage.getItem('data')));
  },[])
  //console.log(data);

  const handleCheckEmail=()=>{
    console.log(storage);
    if(email===""){alert("Kindly give your email address!!")}
    else{nav('/secondpg')}
    // storage.find(item=>item.email==email)?
    // nav('/secondpg')
    // :
    // alert("kindly signIn first");nav('/signin')
  }
  

  


  return (
    <>
    {
      (load)?
  <>
      <div> <M_nav/> </div>
  <div className='background-img bg-black '>
      <div className='back-img justify-center bg-black'>
        <div className='part1 text-white grid-rows-3 grid-flow-col gap-4  relative top-20'>
            <div className='line1 text-white  '>Ultimate movies,TV shows and more</div>
            <div className='line2 justify-items-center'>Watch anywhere.Cancel anytime</div>
            <br></br>
            <div className='line3'>Ready to Watch? Enter your email to Start.</div>
            <br></br>
            <input type='text'name='email' placeholder='Enter your Email' className='line4 rounded-lg'onChange={(e)=>setEmail(e.target.value)}></input>
            <button className='line5 bg-red-600 rounded-lg text-lg' onClick={handleCheckEmail}>Get Started</button>
          </div>
      </div><hr></hr>

      <div className='part2 bg-black'>
        <h2 className='part2-h3 flex text-white mt-32 pl-20 text-xl'>Tranding Now<IoIosArrowDown className=' mt-2'/></h2>
         <div className='part-2 flex m-10 border-white'>
         
          {
            data.map((item)=>{
              //console.log(item);
              return<>
                <div className='poster text-white mt-10 ml-10 mr-10'>
                  <div><NavLink to="/secondpg">
                  <img src={item.Poster} className='poster-image rounded-xl'/></NavLink>
                  </div>
                </div>
              </>
            })
          }
         </div>
      </div>


      <div className='part3 bg-black'>
        <h2 className='part3-h3 flex text-white mt-32 pl-20 '>More reasons to join<IoIosArrowDown className=' mt-2'/></h2>
         <div className='part-3 flex m-10 border-white'>
         
          {
            dataReason.map((item)=>{
              //console.log(item);
              return<>
                <div className='part3-part text-white  m-2 h-30 bg-gradient-to-r from-slate-950 via-zink-700 via-zinc-800  to-pink-900 ... '>
                  <div className='part3-title'>{item.Title}</div><br></br>
                  <div className='part3-about'>{item.about}</div>
                </div>
              </>
            })
          }
         </div>
      </div>

      <div className='part4 bg-black'>
         
                <h2 className='part4-h2 text-white pl-20 mb-10 text-xl'>Frequently Asked Questions</h2><br></br>
                <div className='part4-question'>
                <div className='question bg-zinc-800 justify-between flex m-2'>What is netflix 
                    {
                    (toggle)?<>
                    <button className='text-white flex' onClick={()=>{setToggle(false);setToggleAns(false)}}><TfiPlus className='h-10'/></button></>
                    :
                    <button className='text-white flex' onClick={()=>{setToggle(true);setToggleAns(true)}}><RxCross1 className='h-10'/></button>
                  }
                 </div>
                 {(toggleAns)?
                 <div className='question-ans '>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more on thousands of internet-connected devices.

                 You can watch as much as you want, whenever you want, without a single ad - all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</div>:null}
                 


                 <div className='question bg-zinc-800 justify-between flex m-2'>How much does Netflix cost? 
                    {
                    (secondtoggle)?<>
                    <button className='text-white flex' onClick={()=>{setSecondTtoggle(false);setSecondToggleAns(false)}}><TfiPlus className='h-10'/></button></>
                    :
                    <button className='text-white flex' onClick={()=>{setSecondTtoggle(true);setSecondToggleAns(true)}}><RxCross1 className='h-10'/></button>
                  }
                 </div>
                 {(secondToggleAns)?
                 <div className='question-ans'>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</div>:null}
                 

                 </div>
               
                  {/* <input type='button' value={(toggle)?<TfiPlus/>:<TfiPlus/>} onClick={()=>setToggle(!toggle)}/> */}

                  



      </div>
      
  </div>
  <div><EndNav/></div>
  </>:
  <embed></embed>

    }
   

    </>
  )
}
