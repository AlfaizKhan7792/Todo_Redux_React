import axios from "axios"

const API_URL = "https://authenticationeskills.vercel.app/api/user";
// const API_URL = "https://auth-backend-93eo.onrender.com/api/user"

export const Login = async (formData) =>{
    const res = await axios.post(API_URL + "/login" , formData)
    localStorage.setItem('user' , JSON.stringify(res.data))
    return res.data
}


export const Register = async (formData) =>{
    const res = await axios.post(API_URL + "/register" , formData)
    localStorage.setItem('user' , JSON.stringify(res.data))
    return res.data
}