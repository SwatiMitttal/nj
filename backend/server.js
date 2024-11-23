import express from 'express'
import cors from 'cors'
import dbcon from './database/db.js'
import { User ,Item} from './database/db.js'
import  pkg from 'razorpay'
const app=express()

const port=4001
app.use(cors())

dbcon()
const {Razorpay}=pkg
var instance = new pkg({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })

/*instance.orders.create({
amount: 5000,
currency: "INR"})*/

app.use(express.json())

app.get('/',(req,res)=>{
   res.send('hello')})

app.listen(port,()=>{
    console.log('App is listening',port)
})

app.get('/signup',async (req,res)=>{
    const {email,passw}=req.body;
    console.log(email);
    try{
    const user1= await User.findOne({passw:'1111'})
    console.log(user1.email)
    res.send(user1.email)
}
    catch(e){
        console.log(e)
    }
})

app.post('/signup',cors(), async (req,res)=>{
    const {email,passw}=req.body
    console.log('CART EMAIL IS: ',email)
    const user1={
        email:email,
        passw,passw
    }
 try{
    const check=await User.findOne({email:email})
    
    if (check){
        
        res.json(202,check)}
    else{
       res.json('notexist')
        await User.insertMany([user1])
    }
    
 }
 catch(e){
    console.log(e.message)
 }   
  
   
})
app.get('/items',async (req,res)=>{
   const {cat}=req.body
   console.log('CATEGARY IS: ',"toys")
    try{
    const item1= await Item.find({cat:"toys"})
    res.send(item1)
}
    catch(e){
        console.log(e)
    }
})

app.post('/items',cors(), async (req,res)=>{
    const {cat}=req.body

   console.log('CATEGARY IS POST: ',cat)
   
 try{
    const check=await Item.find({cat:cat})
    if (check.length>0){
        res.status(200).json(check)
        console.log(check)
    }
    else{
       res.json('notexist')
    
    }
    
 }
 catch(e){
    console.log(e.message)
 }   
  })



