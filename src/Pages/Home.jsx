import React, { useEffect } from 'react'
import Form from '../Components/Form'
import ListGroup from '../Components/ListGroup'
import Navbar from '../Components/Navbar'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router'

const Home = () => {

  // const {user} = useSelector((state) => state.Auth)
  // const navigate = useNavigate()

  // useEffect(() =>{
  //   if(!user){
  //     navigate('/login')
  //  }
  // },[user])

  return (
    <>
    {/* <Navbar /> */}
       <div className="container p-5">
        <Form />
        <ListGroup />
      </div>
    </>
  )
}

export default Home
