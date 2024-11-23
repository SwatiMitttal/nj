import {useEffect,useState} from 'react'
  import { Outlet, useParams } from 'react-router-dom'
  import Layout1 from './Layout1'
  import Pcart from './Pcart'
  import { prods1 } from '../assets/prods1'
 
  import Iconn from './Iconn'
function  Home(props){

  const cat=localStorage.getItem('scat')
   
    return(
        <>
          <Layout1/>
        <h3  className='text-md text-green-950 justify-center text-2xl items-center font-weight-600'></h3>
        <div  className='flex justify-center items-center '  >
        <div  className='grid  lg:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 gap-6'  >
      
        {prods1.map((item,ind)=>(
              <div>
             <Pcart  data={item} key={ind}/>
               </div>
        ))};
     </div></div>

       
       <Iconn/>
      
        </>
    )
}

export default Home