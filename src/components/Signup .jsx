import { useState } from "react"
import {Link} from 'react-router-dom'
import Cartab from "./Cartab"
import Header from "./Header"
import { useDispatch } from "react-redux"
import { addUser } from "../store/Users"
function Signup(){
   
  const [isSignup,SetisSignup]=useState(false)
  const [email,setEmail]=useState('')
  const [mobile,setMobile]=useState('')
  const [passw,setPassw]=useState('')
  const [name,setName]=useState('')
  const ffields=['NAME  ','EMAIL  ','PASSWORD','MOBILE'];
  const sett=[setName,setEmail,setPassw,setMobile];
  const dispatch=useDispatch()
 const handleSubmit=()=>{
    dispatch(addUser({
      name:name,
      email,email,
      passw:passw,
      mobile,mobile,
      exist:true
    }))
 }

 return (
    <>
   <div className="bg-slate-100">
         <div  className="w-[1050px]">
         <Header/>
         
    <h2 className="font-bold text-xl">SIGNUP</h2>
    <form action='POST'  className='outline-4'>
   {ffields.map((item,ind)=><div>
    <label className=" text-white p-2 rounded-lg bg-slate-800">{item}</label>
    <input  type='text' id={item}
    placeholder={item}
    className='ml-6 text-white p-2 rounded-lg bg-slate-200 hover:bg-slate-300'
    onChange={(e)=>sett[ind](e.target.value)}
    required='true'
    ></input>
    <br></br><br></br>
   </div>
   
   )}

  <Link to ='/' > <button  type='submit'
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