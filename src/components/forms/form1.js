//Handling form with Use state hook
import React, { useState } from 'react'

const form1 = props => {
  const initialState = ""
  const [email, setEmail] = useState(initialState)
  const [password, setPassword] = useState(initialState)

  const handleSubmit = e => {
    e.preventDefault();
    alert(`email : ${email} and password: ${password}`)
  }

  return(
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button type="submit">Log in</button>
    </form>
  )
}

export default form1