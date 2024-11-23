import { prods1} from '../assets/prods1'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import {useDispatch,useSelector}  from 'react-redux'
import { FaRupeeSign,FaCartPlus } from 'react-icons/fa'
import appStore from '../store/appStore'
import Rating from './Rating'
import { addItem } from '../store/Cart'
import axios from 'axios'
function Pcart(props){
    const {id,note,imgUrl,rating,price,slug}=props.data

     const dispatch=useDispatch()
     const items=useSelector(store=>store.cart.items)

    
    async function handleAdd(){
      
     
    dispatch(addItem({
            id:id,
            quantity:1
        }))

     
            
    }
    return(
        
        <div className='bg-white p-5 rounded-lg  shadow-sm'>
          <Link  to={slug}>
        
         <img   src={imgUrl} alt='' className='h-80 w-70 object-cover rounded-xl object-top' ></img> 
         </Link>
         <h3 className='flex justify-center items-center'><FaRupeeSign/>  {price}</h3>
         <h3 className='flex justify-center items-center text-bold '> {note}
            <Rating  rating={rating} />
         </h3>

         <div className='flex justify-center items-center'>
         
            <button className='text-sm text-white bg-slate-950 rounded-xl
            p-2  flex  justify-center items-center gap-2 hover:bg-slate-700
            ' type='button' 
            onClick={handleAdd} 
            >     <FaCartPlus/>ADD TO CART</button>
         </div>
         </div>
    )
}

export default Pcart