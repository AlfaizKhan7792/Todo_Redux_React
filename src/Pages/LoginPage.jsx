import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginUser } from '../features/Auth/AuthSlice'
import { Link, useNavigate } from 'react-router'
import LoadingPage from './LoadingPage'

const LoginPage = () => {

    const navigate = useNavigate()
    const {user , isLoading} = useSelector(state => state.Auth)
    const dispatch = useDispatch()

    const [formData , setFormData] = useState({
        email : "",
        password : ""
    })

    const handleChange = (e) =>{
        setFormData({...formData , [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(LoginUser(formData))
    }

     useEffect(() =>{
    if(user){
    navigate("/")
    }
        },[user])
    
        if(isLoading){
            return <LoadingPage />
        }
    

  return (
    <>
       {/* <!-- Login Page --> */}
        <div className="row mt-5 justify-content-center w-100 vh-50">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-header text-center bg-primary text-white">
                        <h4>Login</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address</label>
                                <input 
                                type="email" 
                                onChange={handleChange} 
                                value={formData.email} 
                                name="email" 
                                className="form-control" 
                                id="email" 
                                placeholder="Enter your email" />
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input 
                                onChange={handleChange} 
                                value={formData?.password} 
                                name='password' 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                placeholder="Enter your password" />
                            </div>
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer text-center">
                        <p>Don't have an account? <Link to="/register"  data-bs-target="#registerModal"
                        >Register</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginPage
