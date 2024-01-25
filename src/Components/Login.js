import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [input, setInput] = useState({
    name: '',
    password: ''
  })

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const loggedUser = JSON.parse(localStorage.getItem('user'))
    if (input.name === loggedUser.name && input.password === loggedUser.password) {
      localStorage.setItem("isLoggedIn", true)
      navigate('/home')
      console.log('success!')
    } else {
      alert("Credentials entered dosen't match our records. Sign up for new account!")
      setInput({name:'', password:''})
    }
  }
  return (
    <>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className='input-field'>
            <label htmlFor='input'>Name</label>
            <input type='text' placeholder='Enter name' autoComplete='off' name='name' value={input.name} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })} />
          </div>
          <br />
          <div className='password-field'>
            <label htmlFor='input'>Password</label>
            <input type='password' placeholder='Enter password' autoComplete='off' name='password' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })} />
          </div>
          <div className='btn'>
            <button type='submit'>Submit</button>
          </div>
          <p>Don't have an account</p><Link to={'/register'}>Register Here</Link>
        </form>
      </div>
    </>
  )
}

export default Login