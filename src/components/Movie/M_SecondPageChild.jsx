import React from 'react'
import { RxCross2 } from "react-icons/rx";

export default function M_SecondPageChild({info,onClose}) {
   
   console.log(info.movieInfo.Title);
  return (
    <div className=' fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm text-white flex justify-center items-center '>
        <div className='sc-bg mt-14 flex-col gap-5 text-white place-self-center bg-zinc-800 bg-opacity-70'>
            <button onClick={onClose} className='place-self-end float-end h-8 w-8 pl-2 hover:bg-zinc-400'><RxCross2/></button>
            <div className='sc-total-div mt-10 flex gap-10 m-3'>
                <div className='sc-image h-full w-72'><img src={info.movieInfo.Poster} alt={info.movieInfo.Title}/></div>
                <div className='sc-rightdiv'>
                <div className=' sc-text text-2xl mt-5'>Movie :</div>
                <div className=' sc-text-moviename mt-2 text-xl w-60'> {info.movieInfo.Title}</div>
                <div className=' sc-text text-2xl mt-10'>Release Year :</div>
                <div className=' sc-text mt-2 text-xl w-60'> {info.movieInfo.Year}</div>
                <div className=' sc-text text-2xl mt-10'>IMDB :</div>
                <div className=' sc-text mt-2 text-xl w-60'> {info.movieInfo.imdbID}</div>
                </div>

            </div>
        </div>
    </div>
  )
}
