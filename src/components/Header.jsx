import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import {toggleS} from '../store/Cart'
import { useDispatch } from "react-redux"
import { FaUser,FaBars,FaList,FaSearch } from "react-icons/fa"

import Mdrop from "./Mdrop"


function Header(props){
    
    const [totq,setTotq]=useState(0)
    const cart=useSelector(store=>store.cart.items)
    const dispatch=useDispatch()
    const [cat,setCat]=useState("")
   
   
    
  const handleCart=()=>{
     dispatch(toggleS)
    }

    const handleC=()=>{

    }
    return (
        <>
     <div className=" bg-white">
  <span id='p1' className="text-green-800  text-xl font-semibold bg-white rounded-l" >bags  <span className=" text-red-600"> toys 
    </span>  <span className="text-yellow-700">   stationary exclusive   </span></span>
  </div><br></br>  
           
    <div className='container bg-white max-w-full px-2 py-2'>

    <div className='flex justify-between items-center '>
        <img   src='../../NewJanta.jpeg' alt='logo' className="h-25 w-20 hover:bg-slate-200 rounded-2xl border-red-500 border-2"></img>
    <Link  to='/' >  <h4 className='font-bold text-xl hover:text-2xl'>Home</h4></Link>
    
    <Mdrop   icon ='FaBars'  cat=''/>   
      <Mdrop   icon ='FaSearch'  cat=''/>      
     

<div  className="flex justify-center items-center"  >
  <div  className='flex justify-center relative' onClick={handleCart} >
   <svg className="w-10 h-10 text-green-800 dark:text-white bg-white rounded-full justify-center
    items-center hover:scale-150" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" 
      stroke-width="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"/>
      </svg>
    <span   className='flex h-6 w-6 rounded-full absolute top-2/3 right-1/2 bg-red-500 justify-center 
    text-sm text-white items-center '>{cart.length}</span>
    </div>

  <div  className='flex justify-center relative  gap-3' onClick={handleCart} >
     <Link  to='/login' >    <FaUser  className="h-10 w-10 bg-white rounded-full p-2 hover:scale-125" /></Link>   </div>
</div>    
  </div>
  </div>
     <div  id='brands' className="inline-flex" >
     <img    src='../../brands/cross_logo.png'
      className="h-20 w-20 rounded-md  border-2  border-amber-700 hover:scale-110"  alt='cross'
      onClick={()=>{localStorage.setItem("scat","cross");handleC()}}
      ></img>
     <img    src='../../brands/hamster.png'
      className="h-20 w-20 rounded-md  border-2  border-amber-700 hover:scale-110 "  alt='cross'
      onClick={()=>{localStorage.setItem("scat","hamster");handleC()}}
      ></img>
     <img    src='../../brands/probot.jpg' 
     className="h-20 w-20 rounded-md  border-2  border-amber-700 hover:scale-110" 
      alt='probot'
      ></img>
     </div>

      
        </>
    )


}

export default Header