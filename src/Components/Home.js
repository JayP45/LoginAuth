import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()

  const handleLogout=(e)=>{
    e.preventDefault()
    localStorage.removeItem('isLoggedIn')
    navigate('/login')
  }
  return (
    <>
      <form>
        <h2>Welcome to Home page</h2>
        <p>Welcome {loggedInUser.name}</p>
        <div className='btn'>
          <button type='submit' onClick={handleLogout}>Logout</button>
        </div>
      </form>
    </>
  )
}

export default Home