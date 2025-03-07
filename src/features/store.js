import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Todos/TodoSlice"
// import AuthReducer from "./Auth/AuthSlice"

const store = configureStore({
reducer : {
Todos : todoReducer,
// Auth : AuthReducer
}
})


export default store