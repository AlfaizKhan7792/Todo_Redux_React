import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Login, Register } from "./AuthService";

const ExitUser = JSON.parse(localStorage.getItem("user"))

const AuthSlice = createSlice({
    name : 'Auth',
    initialState : {
        user : ExitUser || null,
        isLoadng : false,
        isError : false,
        isSuccess : false,
        message : ""
    },
    reducers : {},
    extraReducers : builder =>{
builder
.addCase(LoginUser.pending , (state , action) =>{
    state.isError = false
    state.isLoadng = true
    state.isSuccess = false
})
.addCase(LoginUser.fulfilled , (state , action) =>{
    state.isError = false
    state.isLoadng = false
    state.isSuccess = true
    state.user = action.payload
})
.addCase(LoginUser.rejected , (state , action) =>{
    state.isError = true
    state.message = action.payload
    state.isLoadng = false
    state.isSuccess = false
})

.addCase(RegisterUser.pending , (state , action) =>{
    state.isError = false
    state.isLoadng = true
    state.isSuccess = false
})
.addCase(RegisterUser.fulfilled , (state , action) =>{
    state.isError = false
    state.isLoadng = false
    state.isSuccess = true
    state.user = action.payload
})
.addCase(RegisterUser.rejected , (state , action) =>{
    state.isError = true
    state.message = action.payload
    state.isLoadng = false
    state.isSuccess = false
})

// LogOUt 
.addCase(LogOutUser.fulfilled , (state , action) =>{
    state.isError = false
    state.isLoadng = false
    state.isSuccess = false
    state.user = null
})
    }
})


export default AuthSlice.reducer


// Login 
export const LoginUser = createAsyncThunk('AUTH/LOGIN' , async (FormData) =>{
    try {
        return await Login(FormData)
    } catch (error) {
        console.log(error);
    }
})


// LogOut User
export const LogOutUser = createAsyncThunk('AUTH/LOGOUT' ,async () =>{
    localStorage.removeItem("user")
})


// Register
export const RegisterUser = createAsyncThunk('AUTH/REGISTER' , async (FormData) =>{
    try {
        return await Register(FormData)
    } catch (error) {
        console.log(error);
    }
})