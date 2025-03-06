import axios from "axios"

export const Login = async (formData) =>{
    const res = await axios.post("/api/user/login" , formData)
    localStorage.setItem('user' , JSON.stringify(res.data))
    return res.data
}


export const Register = async (formData) =>{
    const res = await axios.post("/api/user/register" , formData)
    localStorage.setItem('user' , JSON.stringify(res.data))
    return res.data
}