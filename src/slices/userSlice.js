import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//createAsyncThunk is the middleware used for making API calls

export const fetchusers=createAsyncThunk('getusers',async(url,thunkApi)=>{ //fetchusers is the function used create 
    try{                                                                   //action object
    let response=await axios.get(url);
    let usersList=response.data;
    return usersList;
    }
    catch(err){
        return thunkApi.rejectWithValue('Unable to fetch data'); //thunk deals with error handling
    }
})

export const userSlice=createSlice({
    name:"users",
    initialState:{users:[],isPending:false,isError:false,errMsg:''},
    extraReducers:{
        [fetchusers.pending]:(state,action)=>{   /* extraReducers are used insted of reducers because  react component 
                        component is not dealing with state change API is used to fetch data                                                              */
            state.isPending=true;
        },
        [fetchusers.fulfilled]:(state,action)=>{
            state.users=action.payload;
            state.isPending=false;
            state.isError=false;                    //fetchusers always returns a promise life cycle
            state.errMsg='';
        },
        [fetchusers.rejected]:(state,action)=>{
            state.isError=true;
            state.errMsg=action.payload;
        }
    }
})

export default userSlice.reducer;