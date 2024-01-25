import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
    const [input, setInput] = useState({
        name: '',
        password: '',
        email: ''
    })
    const navigate = useNavigate()

    // To Store value in local storage

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('user', JSON.stringify(input))
        alert('Resgistration done successfully!')
        navigate('/')
    }
    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <h2>Resgister Form</h2>
                    <div className='input-field'>
                        <label htmlFor='input'>Name</label>
                        <input type='text' placeholder='Enter name' autoComplete='off' name='name' required value={input.name} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })} />
                    </div>
                    <br />
                    <div className='email-field'>
                        <label htmlFor='input'>Email</label>
                        <input type='email' placeholder='Enter email' autoComplete='off' required name='email' value={input.email} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })} />
                    </div>
                    <br />
                    <div className='password-field'>
                        <label htmlFor='input'>Password</label>
                        <input type='password' placeholder='Enter password' autoComplete='off' required name='password' value={input.password} onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value, })} />
                    </div>
                    <div className='btn'>
                        <button type='submit'>Submit</button>
                    </div>
                    <p>Already have an account</p><Link to={'/'}>Login here</Link>
                </form>
            </div>
        </>
    )
}

export default Register