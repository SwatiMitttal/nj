import { useEffect, useState} from "react"
import { Await, Link } from "react-router-dom"
import { FaRupeeSign } from "react-icons/fa"
import {addItem} from '../utilities/cartSlice'
import { UseDispatch, useDispatch } from "react-redux"
import Itemcard from "./Itemcard"

function Menu(props){

   const lwomen=['/all','/Lehngas','/coords','/embroidery']
   const [cat,setCat]=useState('women')
   const lnjanta=['/all','/pens','/stationary','/schoolbags']
   const [dat,setDat]=useState([])
   const [index,setIndex]=useState(0)
   
  

   const dispatch=useDispatch()
   useEffect(()=>{
    
    fetch('/items').then(res=>res.json()).then(data=>
      {setDat(data);})},[])
    return(
        <>
<div id='div6'>
  <div className="btn-group">
  <button type="button"  onClick={()=>{setCat('men')}}
  class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    MEN</button>
  <ul class="dropdown-menu">
    {lnjanta.map((item,ind)=>(<>
   <a href={item}>    <h4 className="dropdown-item" onClick={()=>{setIndex({ind});}}>{item}</h4></a> 
        <h4><hr class="dropdown-divider"></hr></h4>
        </>
    ))}
   </ul>
   <br></br>
</div>


<div className="btn-group ">
  <button type="button"  onClick={()=>{setCat('women')}}
  class="btn  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    WOMEN</button>
  <ul class="dropdown-menu">
    {lwomen.map((item,ii)=>(<>
    <a  href={item}>    <h4 className="dropdown-item" onClick={()=>{setIndex({ii});}} >{item}</h4></a>
        <h4><hr class="dropdown-divider"></hr></h4>
        </>
    ))}
   </ul>
   <br></br>
</div>

</div>
<br></br><br></br><br></br>

     </>
    )
}

export default Menu