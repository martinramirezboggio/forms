//Using FormData
import React from 'react'

const form4 = props => {

  const handleSubmit = e => {
    e.preventDefault();
  
    const formData = new FormData(e.target)
    const email = formData.get('email')
    const password = formData.get('password')
  
    alert(`email : ${email} and password: ${password}`)
  } 

  return(
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email"
          name="email"
          />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password"
          name="password"
          />
      </div>
      <button type="submit">Log in</button>
    </form>
  )
}

export default form4