import '../../src/App.css';

 

function Car1(){
    const imgs=['../../bottles/bot1.jpeg','../../sbag/sbag2.jpeg','../../bottles/bot1.jpeg','../../bottles/bot2.jpeg','../../toys/toy1.jpeg','../../toys/toy2.jpeg']
    return(
        <>
        <br></br>
       
     <div  id= 'divi ' className='inline-flex border-2 border-red-600 border-solid rounded-xl font-extrabold' >   
     <img   id='img1' alt='img1'  src='../../bottles/bot1.jpeg' className='rounded-xl ' />  
   <img   id='img2' alt='img2'  src='../../sbag/sbag1.jpeg' className='rounded-xl' />
   <img   id='img3' alt='img3'  src='../../toys/toy1.jpeg' className='rounded-xl'  />
    <img   id='img4' alt='img3'  src='../../toys/toy2.jpeg' className='rounded-xl'  />
  
   </div>  
     </>

    )}
export default Car1