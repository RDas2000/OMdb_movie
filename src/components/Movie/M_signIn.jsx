import React,{useState,useEffect} from 'react'
import M_nav from './M_nav'
import EndNav from './M_EndNav';
import vdo from './images/loader.gif'
import {useFormik} from 'formik';
import validationrules from './validationrules';

const getitem=()=>{
  let list=JSON.parse(localStorage.getItem('data'));
  if(!list){
    return []
  }
  else{
    return JSON.parse(localStorage.getItem('data'));
  }
}
export default function M_signIn() {
    const [load,setLoad]=useState(false)
    const [info,setInfo]=useState(getitem())

    useEffect(()=>{
        setTimeout(()=>{
          
        },1000)
        setLoad(true)})

    const formik=useFormik({
      initialValues:{
        email:'',
        password:''
      },
      validationSchema:validationrules,
      onSubmit:(data,action)=>{
        setInfo([...info,data])
        console.log(data);
        action.resetForm();
      }
    })   
    localStorage.setItem('data',JSON.stringify(info))
    console.log(info);
     
  return (
    <>
    {(load)?
    <>
    <div> <M_nav/> </div>
    <div className='background-img bg-black '>
      <div className='back-img-signin justify-center bg-black'>
            <div className='signin-p-1 text-white'>
                <form onSubmit={formik.handleSubmit}>
                    <h3 className='signIn-h3 pt-10 pl-10 text-4xl'>Sign In</h3><br></br>
                <div className='text-center'>
                  
                <input type="email" name="email" 
                className='rounded-md text-md' 
                placeholder='Enter your Email'
                onChange={formik.handleChange}
                value={formik.values.email}/>

                <br></br>
                <span className='text-xs text-left' style={{color:'red'}}>
                  {
                     (formik.errors.email && formik.touched.email)?(formik.errors.email):(null)
                  }
                </span>

                <br></br>
                <br></br>

                <input type="password" name="password" 
                className='rounded-md text-md' 
                placeholder='password'
                onChange={formik.handleChange}
                value={formik.values.password}/>
                <br></br>
                <span className='text-xs text-left' style={{color:'red'}}>
                {
                    (formik.errors.password && formik.touched.password)?(formik.errors.password):(null)
                } </span>

                <br></br><br></br>
                <input type='submit' className="btn rounded-md " value="Sign In"/>
                <br></br><br></br>
                <input type="checkbox"/><span className='remember text-sm pl-3'>Remember me</span><br></br><br></br>
                <p className='remember'>New to Netflix? <u className='remember'>Sign In</u> first</p>

                <br></br><br></br>
                </div>
                
                </form>
                
                </div>
      </div>
    </div>
    <div><EndNav/></div>
    </>
    :
    <div><embed src={vdo} style={{height:'100%',width:'100%'}}></embed></div>
    }

    </>
  )
}
