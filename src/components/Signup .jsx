import { useState,useRef, useEffect } from "react"
import {Link} from 'react-router-dom'
import Cartab from "./Cartab"
import Header from "./Header"
import { useDispatch,useSelector } from "react-redux"
import { addUser,setU } from "../store/Users"
import Autoc from "./Autoc"
import axios from 'axios'
import { FaEye } from "react-icons/fa"

function Signup(){
   
  const [isSignup,SetisSignup]=useState(false)
  const [email,setEmail]=useState('')
  const [mobile,setMobile]=useState('')
  const [passw,setPassw]=useState('')
  const [name,setName]=useState('')
  const  [add1,setAdd1]=useState("")
  const  [add2,setAdd2]=useState("")
  const  [city,setCity]=useState("")
  const  [stat,setStat]=useState("")
  const[tt,setTt]=useState('password')
  const  [country,setCountry]=useState("")
  const  [pin,setPin]=useState("")
  const [ff,setFf]=useState('')
  const ffields=['name  ','email  ','password','mobile','address1','address2','city','state','country','pincode'];
  
  const dispatch=useDispatch()

  const emaill=useSelector(state=>state.users.cuser)


 async function handleSubmit(){
  
    dispatch(addUser({
      name:name,
      email,email,
      passw:passw,
      mobile:mobile,
      add1:add1,
      add2:add2,
      city:city,
      stat:stat,
      country:country,
      pin:pin
      
    }))
 try{
      await axios.post('http://localhost:4001/signup',{
      name,email,passw,mobile,add1,add2,city,stat,country,pin
      }).then(res=>{
          if (res.status==200){
             dispatch(setU(email,res.data.name))
            
     }})}catch(err){
          console.log(err.message)
        }
 }

 const handleC=()=>{
   tt==='text'?setTt('password'):setTt('text')
 }
return (
    <>
   <div className="bg-white">
       
         <Header/>
  <div  className="w-[300px]">    
    <h2 className="font-bold text-xl">SIGNUP</h2>
    <form action='POST' >
    <div className=" inline-flex">
      
    <div className="inline-block">
   {ffields.map((item,ind)=>(<div>
    <label className="  text-white p-2  rounded-lg bg-slate-800 text-sm ">{item}</label>
    </div>))}

    </div>
    <div  className='block'  >
    <input type='text'  key='name' placeholder="name"
    className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    onChange={(e)=>setName(e.target.value)}
    required='true'
    ></input>

     <input type='email' key='email' placeholder="email" 
    className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    onChange={(e)=>setEmail(e.target.value)}
    required='true'
    ></input>
     <div className="inline-flex">
     <input type={tt}   id='passw' placeholder="passw"
    className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    onChange={(e)=>setPassw(e.target.value)}
    required='true'
    ></input>
    <FaEye className="mr-1"   onClick={handleC}
    /></div>

     <input type='text' key='mobile' placeholder="mobile"
    className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    onChange={(e)=>setMobile(e.target.value)}
    required='true'
    ></input>

     <input type='text'  placeholder="add1"
    className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    onChange={(e)=>setAdd1(e.target.value)}
    required='true'
    ></input>

     <input type='text' placeholder="add2"
    className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    onChange={(e)=>setAdd2(e.target.value)}
    required='true'
    ></input>

     <input type='text'  placeholder="city"
    className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    onChange={(e)=>setCity(e.target.value)}
    required='true'
    ></input>

     <input type='text'  placeholder="state"
    className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    onChange={(e)=>setStat(e.target.value)}
    required='true'
    ></input>

     <input type='text'   placeholder="country"
    className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    onChange={(e)=>setCountry(e.target.value)}
    required='true'
    ></input>

     <input type='text'  placeholder="pincode"
    className='ml-6 text-gray-950 p-2  h-5 rounded-lg bg-slate-200 hover:bg-slate-100'
    onChange={(e)=>setPin(e.target.value)}
    required='true'
    ></input>
  
  </div>
    </div>
   
  <Link to ='/totamt' > <button  type='submit'
 className="w-20 bg-amber-600 hover:bg-amber-700 focus:ring-4 text-white  focus:ring-amber-900 font-small rounded px-2 py-2 text-center  dark:bg-blue-600  dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
 onClick={handleSubmit}
 >  SUBMIT  </button>  </Link>
   
  </form>

 <h3>Already have an account? <Link to='/login' className="hover:text-blue-900 font-semibold">{!isSignup ? 'Login' : 'Register'}  </Link>  </h3>
</div>
<Cartab/>
</div>
    </>
)
}



export default Signup