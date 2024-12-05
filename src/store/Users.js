import { createSlice } from "@reduxjs/toolkit"

export const uslice=createSlice({
    name:"users",
    initialState:{
        user:{},
        cuser:'',
        

},
  reducers:{
    addUser(state,action){
        const {name,email,passw,mobile,add1,add2,city,stat,country,pin,exist}=action.payload
        
         state.user=action.payload
         state.cuser=name
      return state  

    },
   setU(state,action){
        const {email,name}=action.payload
        
        state.cuser==''  ? state.cuser=email  : state.cuser='xxx'
      
   }



  }
}
)

export const {addUser,setU}=uslice.actions
export default uslice.reducer