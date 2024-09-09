
import './App.css';
import { useEffect, useState } from 'react';

import vdo1 from './components/Movie/images/loader.gif'
// import M_SecondPage from './components/Movie/M_SecondPage';
// import M_FstPage from './components/Movie/M_FstPage';
// import M_nav from './components/Movie/M_nav';
import M_Rule from './components/Movie/M_Rule';
function App() {
  const [status,setStatus]=useState(false)

  useEffect(()=>{
    setTimeout(() => {
      setStatus(true) 
    },3000);
  })

  return (
    <>
     {
     (status)?
     <>
  
 <M_Rule/>
  
     </>:
     <embed src={vdo1} style={{height:"100%",width:'100%'}} className='loader'></embed>
    } 
       



    </>
  );
}

export default App;
