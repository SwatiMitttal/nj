import { createSlice } from "@reduxjs/toolkit"

export const uslice=createSlice({
    name:"users",
    initialState:{
        user:[],
        cuser:'',
        cexist:true

},
  reducers:{
    addUser(state,action){
        const {name,email,passw,mobile,exist}=action.payload
        const user1=state.user.filter(i=>i.email===email)
         user1  ?  user1.exist=true  : state.user.push({name:name,email:email,passw:passw,mobile:mobile,exist:true})
         state.cuser=name
      return state  

    },
   setU(state,action){
        const {email,name}=action.payload
        
        state.cuser==''  ? state.cuser=name  : state.cuser='xxx'
      
   }



  }
}
)

export const {addUser,setU}=uslice.actions
export default uslice.reducer