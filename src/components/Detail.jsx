import { useState ,useEffect} from "react"
import { useParams } from "react-router-dom"
import { prods1 } from "../assets/prods1"
import { FaRupeeSign } from 'react-icons/fa'
import {addItem,remItem} from '../store/Cart'
import { useDispatch } from "react-redux"
function Detail(){
    const {slug}=useParams()
    const [quantity,setQuantity]=useState(1)
    
    const [detail,setDetail]=useState([])
    const dispatch=useDispatch()

    useEffect(()=>{
      const fdetail=prods1.filter(item=>item.slug===slug)
      if(fdetail.length>0){
        setDetail(fdetail[0])
      
      }
    },[slug])

    const handleAdd=()=>{
       dispatch(addItem(detail.id,1))
       setQuantity(quantity+1)
       
    }

    const handleRem=()=>{
      dispatch(remItem(detail.id))
      setQuantity(quantity-1<1 ? 1:quantity-1)

    }

   return(
        <>
        <h2 className="text-xl">Product Detail</h2>
        <div  className="grid grid-cols-3 gap-5  mt-5" >
           <div>
            <img  src={detail.imgUrl}  alt=''className="h-25 w-25" ></img>
        </div>
        <div className="flex flex-col  gap-6 mt-20 ">
           <h2 className="flex font-bold uppercase text-2xl justify-center items-center">{detail.slug}</h2> 
           <h4 className=" text-xl font-semibold  flex justify-center items-center "><FaRupeeSign/>{detail.price}</h4>
           <h4 className=" text-xl font-semibold  flex justify-center items-center ">{detail.note}</h4>

           <button  className="bg-slate-950  text-sm  text-white font-semibold  rounded-lg p-3 w-18 justify-center items-center" >ADD TO CART</button>
           <div className="  flex justify-center items-center">
            <button onClick={handleAdd} className="bg-zinc-500  text-md font-bold rounded-lg h-10 w-10 justify-center items-center">+</button>
            <span  className='bg-zinc-100 rounded-sm  font-bold h-10 w-10'>{quantity}</span>
            <button onClick={handleRem} className="bg-zinc-500 text-md font-bold rounded-lg h-10 w-10 justify-center items-center">-</button>
            </div>     
      
      </div>
     </div>
       </>
    )
}

export default  Detail