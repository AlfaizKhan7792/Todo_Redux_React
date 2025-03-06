import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router'
import PageNotFound from './Pages/PageNotFound'
import Home from './Pages/Home'
import LoginPage from './Pages/LoginPage'
import RegisterPage from './Pages/RegisterPage'

const App = () => {
  return (
    <Router>
      <Navbar />
     <Routes>
      <Route path='*' element={<PageNotFound />} />
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
     </Routes>
    </Router>
  )
}

export default App
