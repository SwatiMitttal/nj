import { useState,useEffect } from "react"
import Itemcard from "./Itemcard"
import Home from "./Home"
function Mitem(props){

    const [dat,setDat]=useState([])
    const [slug,setSlug]=useState(props.slug)
  useEffect(()=>{
       fetch(props.field).then(res=>res.json()).then(
        data=>{setDat(data)      }
       )
  },[])

 
    return(
        <>
        <Home/>
        <h1>{props.field}</h1>
        <div  className="d-lg-table-row gap-4 grid" >
        {dat.map((item,ind)=>(
         <Itemcard  item={item} nitems={props.nitems} />
        ))}

</div>
    <br></br><br></br>
        </>
    )
}

export default Mitem