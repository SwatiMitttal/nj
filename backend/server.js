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

app.get('/login',async (req,res)=>{
    const {email}=req.body;
    console.log(email);
    try{
    const user1= await User.findOne({email:email})
    
    res.send(user1.email)
}
    catch(e){
        console.log(e)
    }
})

app.post('/login',cors(), async (req,res)=>{
    const {email}=req.body
   try{
    const check=await User.findOne({email:email})
    if (check){
        console.log('found')
        res.status(200).json(check)}
    else{
       res.status(404).json('notexist')
    }}
 catch(e){
    console.log(e.message)
 } } ) 
  
 app.post('/signup',cors(), async (req,res)=>{
    const {name,email,passw,mobile,add1,add2,city,stat,country,pin}=req.body
    console.log('CART MAIL IS: ',email)
    const user1={
        name:name,
        email:email,
        passw,passw,
        mobile:mobile,
        add1:add1,
        add2:add2,
        city:city,
        stat:stat,
        country:country,
        pin:pin
    }
 try{
    await User.insertMany([user1])
    }
 catch(e){
    console.log(e.message)
 }   
   
 
})
app.get('/items',async (req,res)=>{
   const {cat}=req.body
    try{
    const item1= await Item.find()
    res.status(200).json(item1)
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



