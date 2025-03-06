import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router'
import { RegisterUser } from '../features/Auth/AuthSlice'

const RegisterPage = () => {

    const dispatch = useDispatch()

    const [formData , setFormData] = useState({
        name : "",
        email : "",
        password : "",
        confirmPassword : ""
    })

    const handleChange = (e) =>{
        setFormData({...formData , [e.target.name] : e.target.value})
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(RegisterUser(formData))
    }

  return (
    <>
      {/* <!-- Register Modal --> */}
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header text-center bg-success text-white">
                        <h4>Register</h4>
                    </div>
                    <div class="card-body">
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="name" class="form-label">Full Name</label>
                                <input 
                                type="text" 
                                class="form-control" 
                                id="name" 
                                name='name'
                                onChange={handleChange}
                                value={formData.name}
                                placeholder="Enter your name" />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email Address</label>
                                <input 
                                type="email" 
                                class="form-control" 
                                id="email" 
                                name='email'
                                onChange={handleChange}
                                value={formData.email}
                                placeholder="Enter your email" />
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input 
                                type="password" 
                                class="form-control" 
                                id="password" 
                                name='password'
                                onChange={handleChange}
                                value={formData.password}
                                placeholder="Enter your password" />
                            </div>
                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label">Confirm Password</label>
                                <input 
                                type="password"
                                class="form-control" 
                                id="confirmPassword" 
                                name='confirmPassword'
                                onChange={handleChange}
                                value={formData.confirmPassword}
                                placeholder="Confirm your password" />
                            </div>
                            <div class="d-grid">
                                <button type="submit" class="btn btn-success">Register</button>
                            </div>
                            
                        </form>
                        <p className="text-center mt-3">
          Already have an account? <Link style={{textDecoration : "none"}} to="/login">Login</Link>
        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default RegisterPage
