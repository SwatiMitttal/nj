
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Cartab from "./Cartab";
import Header from "./Header"
import axios from "axios"
import { addUser, setU } from "../store/Users"
import { useNavigate } from "react-router-dom"
function Login(props){
    
    const nav=useNavigate()
    const [email,setEmail]=useState('');
    const [signup,setSignup]=useState(false)
    const allusers=useSelector(store=>store.users.user)
    const citems=useSelector(store=>store.cart.items)
    const dispatch=useDispatch()
     const cuser=useSelector(store=>store.users.cuser)
     
    
      async function handleSubmit(e){
       
        if (e.key==='Enter'){
      
        nav('/signup')
        try{
        await axios.post('http://localhost:4001/login',{email}).then(res=>{
          
       if( res.status===200){
        alert('Welcome Back!Happy to see u again');
        dispatch(addUser(res.data));
        
       
         }
       res.status===200?nav('/totamt'):alert('not')
        
        })}catch(err){
            console.log(err.message)
          }}}
       
return(
        <>
    <div className="bg-white">
         <div  className="w-[1050px]">
         <Header/>
         
  <h2 className="font-bold text-xl mt-8 ml-10">LOGIN</h2>
        <form  className='outline-4 mt-10 grid  w-50 ml-12 '>
        <fieldset>

        <legend className="text-sm"> Enter mail address  </legend>
      <div className="inline-flex" >
      
   <input  type='text' id='email'
        placeholder='email'
        className=' p-4 border-slate-500 border-2 rounded-md bg-slate-200 text-slate-900 w-60 font-semibold hover:bg-slate-300 overflow-auto'
        onChange={(e)=>{setEmail(e.target.value);}}
        onKeyDown={handleSubmit}
        
        required='true'
        ></input> 
                 </div> 
       
  </fieldset></form>
   
   

     </div>
        <Cartab/>
    </div>

   
        </>
    )
}

export default Login