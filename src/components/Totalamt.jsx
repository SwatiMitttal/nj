
import { useSelector } from "react-redux"
import { prods1 } from "../assets/prods1"
import Citem from "./Citem"
import Header from "./Header"
import { useEffect, useState } from "react"
import { FaRupeeSign } from "react-icons/fa"
import { Link } from "react-router-dom"
//import  pkg from 'razorpay'

function Totalamt(){


const citems=useSelector(store=>store.cart.items)
const tamt=useSelector(store=>store.cart.totamt)
const cuser=useSelector(store=>store.users.cuser)



return(
        <>
        <Header/>
        <h3  className="text-emerald-700 font-semibold text-2xl" >Welcome back ! {cuser} Your Cart</h3>
       <div  className="font-primary overflow-hidden">
         <div  className="pl-5 pt-14 pb-18 w-[70%] mx-auto flex justify-start items-center">
               <div className="md:w-[60%]  w-[70%]  md:mx-0 mx-auto overflow-scroll lg:overflow-hidden" >
                   
        {citems.map((item,ind)=>(
                          <div className="w-80 h-15 bg-white">
                           
                     < Citem data={item} className='bg-white  text-green-600'/> </div>
                     
                      ))}
                  
               </div>
         </div>
      
         <div className="  inline-flex  md:w-[70%] md:flex-row flex-col mx-auto" >
       <label className="font-semibold text-slate-900 text-md">TOTAL AMOUNT </label>
         <h3 className="font-bold  text-xl inline-flex"><FaRupeeSign/> {tamt}</h3>
         </div>
  
       </div>
     <Link to='https://razorpay.me/@rangkesar' ><button  className='rounded-md bg-amber-600 hover:bg-amber-900 text-white font-semibold
     text-md   p-4 ml-8
   '  >PAY NOW  </button></Link> 

<form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_OlWjD2lUaoppcR" async> </script> </form>
        </>
    )
}

export default Totalamt