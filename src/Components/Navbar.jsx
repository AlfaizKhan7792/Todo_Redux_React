import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { LogOutUser } from '../features/Auth/AuthSlice'
import LoadingPage from '../Pages/LoadingPage'

const Navbar = () => {

  const {user , isLoading} = useSelector((state) => state.Auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = () =>{
    dispatch(LogOutUser())
  }

  useEffect(() =>{
if(user){
navigate('/')
}
  },[user])

  if(isLoading){
    return <LoadingPage />
  }

  return (
    <>
       {
        !user ?  <></> :
     <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold fs-3" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <form className="d-flex ms-auto">
        <button onClick={handleSubmit} className="btn btn-outline-dark" type="submit">LogOut</button>
      </form>
    </div>
  </div>
</nav> 
       }
    </>
  )
}

export default Navbar
