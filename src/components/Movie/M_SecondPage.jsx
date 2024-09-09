import axios from 'axios'
import React, { useEffect, useState } from 'react'
import M_nav from './M_nav'
import EndNav from './M_EndNav';
import M_SecondPageChild from './M_SecondPageChild';
export default function M_SecondPage() {
    const [search,setSearch]=useState("pirates")
    const [movies,setMovies]=useState([])
    const [allmovies,setAllmovies]=useState([])
    const [movieToggle,setMovieToggle]=useState(false)
    const [movieInfo,setMovieInfo]=useState({})
    const [showModel,setShowModel]=useState(false)

    useEffect(()=>{
      
        axios.get(`https://www.omdbapi.com/?s=${search}&apikey=10454410`)
        .then((res)=>{
          setTimeout(()=>{
          if((res.data.Search==null)){return []}
          else{
            setAllmovies(res.data.Search)
          }
        },2000)
            
        })
        .catch((err)=>{
            console.log(err);
        })
      
    })
    // const handleSearch=()=>{
    //   setAllmovies(movies)
      
    // }
  
    // {
    //   "Title": "Harry Potter and the Deathly Hallows: Part 2",
    //   "Year": "2011",
    //   "imdbID": "tt1201607",
    //   "Type": "movie",
    //   "Poster": "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"
    // }
    
  

   
  return (
    <>
  
     <div className='bg-black'> <M_nav/> </div>

    <div className='background-img bg-black'>
    {showModel && <M_SecondPageChild info={{movieInfo}} onClose={()=>setShowModel(false)}/>}
     <div className='back-img-secondpg justify-center'>
     
      <div className='secondpg flex border-white text-white  ' >
        {/* left--div--- */}
          <div className='secondpg-left bg-neutral-900 p-10'>
            <div className='secondpg-left-1'>
            <label>Search:</label>
            <br></br>
            <input type="text" 
            name="moviename"
            placeholder='Enter movie name' 
            onChange={(e)=>setSearch(e.target.value)} 
            className='search-box bg-red-700 rounded-lg '/>
              {/* <button  className='search-btn bg-red-700 hover:bg-red-900' onClick={()=>{setSearchToggle(true)}}> Search </button> */}
              </div>
              <div className='text-white mt-5'><br></br>
              {(movieToggle)?
              <>
                  <div><h3 className='movie-info text-white'>Movie Information:</h3>
                <div> <img src={movieInfo.Poster} 
                      className='poster-movie text-white text-lg'
                       alt={movieInfo.Title}/></div>
                       <br></br>
                      <label id="label">Title:</label><div className='movie-info-title'> {movieInfo.Title}</div>
                      <label id="label">Year:</label><div className='movie-info-title'> {movieInfo.Year}</div>
                      <label id="label">IMDB:</label><div className='movie-info-title'> {movieInfo.imdbID}</div>
                </div>
              </>:null}
                
        
      
              </div>
          </div>
          {/* right--div */}
          <div className='secondpg-right bg-black'>
        
            <div className=' box mt-3 m-10 p-10 grid  grid-cols-3 gap-5 z-100 hover:z-0'>
              {allmovies.map((movie,index)=>{
            
              return (
                
                <div className='mt-1  gap-3 shadow-lg...  hover:shadow-xl text-black' >
                <div className='movie-poster-grid grid grid-cols-1'>
                    <div>
                      <img src={movie.Poster} 
                      className='poster-movie text-white text-lg'
                       alt={movie.Title} 
                       onClick={()=>{setMovieInfo(movie);setMovieToggle(true);setShowModel(true)}}/></div>
                </div>
                </div>
            
              )})}
            </div>
            
           
          
       
       
    </div>
         
         {/*  */}
      </div>
      </div>
  
    </div>
  

    

    <div><EndNav/></div>
    {/* <input type="text" name="moviename" onChange={(e)=>setSearch(e.target.value)} style={{border:'1px solid black'}}/>
    <button onClick={handleSearch} >Click</button>

    {
      movies.map((movie)=>{
       
        return <><ol>
          <li>{movie.Title}</li>
          </ol> </>
      })
    } */}
    </>
  )
}
