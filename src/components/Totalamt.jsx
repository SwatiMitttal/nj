
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
const dets=useSelector(store=>store.users.user)


return(
        <>
        <Header/>
      
    
    <h3  className="text-emerald-800 font-semibold text-md  ">{cuser} Order Summary</h3>
       <br></br>
      <div className="inline-flex w-[900px]">
        <table className="text-emerald-800 font-semibold text-md text-center ml-500 border-2 border-amber-800 w-600" >
        <tr >
        <td className="border-2 border-amber-800 p-2">Name</td>
        <td className="border-2 border-amber-800 p-2">{dets.name}</td>
        </tr>

        <tr >
        <td className="border-2 border-amber-800 p-2">Email</td>
        <td className="border-2 border-amber-800 p-2">{dets.email}</td>
        </tr>

        <tr >
        <td className="border-2 border-amber-800 p-2">mobile</td>
        <td className="border-2 border-amber-800 p-2">{dets.mobile}</td>
        </tr>

        <tr >
        <td className="border-2 border-amber-800 p-2">Address</td>
        <td className="border-2 border-amber-800 p-2 block">{dets.add1}
        <span>{dets.add2}</span>
        </td>
        </tr>

        <tr >
        <td className="border-2 border-amber-800 p-2">City</td>
        <td className="border-2 border-amber-800 p-2">{dets.city}</td>
        </tr>

        <tr >
        <td className="border-2 border-amber-800 p-2">State</td>
        <td className="border-2 border-amber-800 p-2">{dets.stat}</td>
        </tr>

        <tr >
        <td className="border-2 border-amber-800 p-2">Country</td>
        <td className="border-2 border-amber-800 p-2">{dets.country}</td>
        </tr>

        <tr >
        <td className="border-2 border-amber-800 p-2">Pincode</td>
        <td className="border-2 border-amber-800 p-2">{dets.pin}</td>
        </tr>
       </table>
      <div className="inline-block">
       <div  className="inline-block">
         <div  className="p-2 items-center">
               
                    {citems.map((item,ind)=>(
                          <div className="w-80 h-15 bg-white">
                           
                     < Citem data={item} className='bg-white  text-green-600'/> </div>
                     
                      ))} </div></div>
      
       <div className="  inline-flex md:flex-row flex-col mx-auto" >
       <label className="font-semibold text-slate-900 text-md ml-20">TOTAL AMOUNT </label>
         <h3 className="font-bold  text-xl inline-flex"><FaRupeeSign/> {tamt}</h3>
         </div>
    </div>
  <Link to='https://razorpay.me/@rangkesar' ><button  className='rounded-md bg-amber-600 hover:bg-amber-900 text-white font-semibold
     text-md   p-3 ml-8 w-40
   '  >PAY NOW  </button></Link> 

<form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_OlWjD2lUaoppcR" async> </script> </form>
</div>  </>
    )
}

export default Totalamt