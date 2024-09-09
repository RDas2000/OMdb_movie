import React from 'react'
import './Movie.css'
// import { IoLocationOutline } from "react-icons/io5";

export default function EndNav() {
  return (
    <>
    <p className="before-endnav bg-black text-gray-300  font-light pt-10 pl-40 ">Questions? Call <u>000-000-000-0000</u></p>
    <div className='endnav  bg-black text-white flex justify-center pb-5 '>
        <div className=' mt-6 row-1 flex justify-center'>
            <div className=' col bg-black flex leading-10 me-10 '>
                <ul>
                    <u><li className="bg-black text-gray-300  font-light">FAQ</li>         </u>
                    <u><li className="bg-black text-gray-300  font-light">Help Center</li> </u>
                    <u><li className="bg-black text-gray-300  font-light">Privacy</li>     </u>
     
                
                </ul>
            </div>
            <div className="col flex leading-10 me-10 text-sm ">
                <ul>
                <li className="bg-black text-gray-300 font-light"><u>Legal Notices</u></li>
                    <li className="bg-black text-gray-300 font-light"><u>Cookie Preferences</u></li>
                    <li className="bg-black text-gray-300  font-light"><u>Support</u></li>
                </ul>
            </div>
            <div className="col flex leading-10 me-10  text-sm">
            <ul>
                    <u><li className="bg-black text-gray-300 font-light"> Ways to Watch</li></u>
                    <u><li className="bg-black text-gray-300 font-light"> Media Center</li> </u> 
                    <u><li className="bg-black text-gray-300  font-light">Terms of Use</li> </u>  
                    <u><li className="bg-black text-gray-300  font-light">Contact Us</li>   </u>  
                </ul>
            </div>

        </div>

    </div>
    
    
    </>
  )
}
