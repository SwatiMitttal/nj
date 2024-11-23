
import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector  ,useNavigate} from "react-redux";
import Cartab from "./Cartab";
import Header from "./Header"
import axios from "axios"
import { checkU,setU } from "../store/Users"

function Login(props){
    

    const [email,setEmail]=useState('');
    const [passw,setPassw]=useState('');
    const ffields=['EMAIL  ','PASSWORD'];
    const ff=['email','passw']
    const ins=[email,passw];
    const sett=[setEmail,setPassw];
    const [isSignup,SetisSignup]=useState(false)
    const allusers=useSelector(store=>store.users.user)
    const citems=useSelector(store=>store.cart.items)
    const dispatch=useDispatch()
     const cuser=useSelector(store=>store.users.cuser)
     
     async function handleSubmit(e){

      //e.preventDefault()
        try{
      await axios.post('http://localhost:4001/signup',{
        email,passw
      }).then(res=>{
              
           if (res.status==202){
            
            dispatch(setU(email,res.data.name))
           
           }
      })
      
        }catch(err){
          console.log(err.message)
        }}
   
    
       
return(
        <>
    <div className="bg-slate-100">
         <div  className="w-[1050px]">
         <Header/>
         
      
 <h2 className="font-bold text-2xl mt-8 ml-10">PLS LOGIN</h2>
        <form  className='outline-4 mt-10 grid  w-50 ml-12 '>
      <div className="inline-flex" >
      
<label  className="bg-slate-800 w-25 p-3 pb-2 mt-3 h-10 text-white font-semibold justify items-center  ">EMAIL </label>
       
 <input  type='text' id='email'
        placeholder='email'
        className='ml-6 outline-4 bg-slate-200 text-slate-900 w-30 font-semibold hover:bg-slate-300 overflow-auto'
        onChange={(e)=>{setEmail(e.target.value);}}
        required='true'
        ></input></div> <br></br>
        <div className="inline-flex">
        
<label  className="bg-slate-800 w-27 p-3 mt-2 text-white font-semibold justify items-center  ">PASSWORD </label>
       
     <input  type='text' id='passw'
        placeholder='password'
        className='ml-6  bg-slate-200 text-slate-900 w-50 font-semibold justify-center hover:bg-slate-300'
        onChange={(e)=>{console.log(e.target.value);setPassw(e.target.value)}}
        required='true'
        ></input>
      
        </div><br></br>
    
<Link to='/totamt'>
<button  type='submit'
     className="w-20  ml-10 bg-amber-700 hover:bg-amber-800 focus:ring-4   focus:ring-amber-900 font-small rounded px-2 py-2 text-center text-white " 
     onClick={handleSubmit}
     >  SUBMIT  </button>
       </Link>
      </form>
   
     <h3> New User? <Link to='/signup' className="font-semibold text-slate-700 hover:text-blue-700">{!isSignup ? 'Register' : 'Login'}  </Link>  </h3>

     </div>
        <Cartab/>
    </div>

   
        </>
    )
}

export default Login