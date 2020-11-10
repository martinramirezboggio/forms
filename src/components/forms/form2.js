// Creating a custom hook

import React, { useState, useCallback } from 'react'

const useFormField = (initialValue = "") => {
  const [value, setValue] = useState(initialValue)

  const onChange = useCallback(
    e => setValue(e.target.value),
    []
  )
  return {value, onChange}
}

const form2 = () => {
  const emailField = useFormField()
  const passwordField = useFormField()

  const handleSubmit = e => {
    e.preventDefault();
    alert(`email : ${emailField.value} and password: ${passwordField.value}`)
  }

  return(
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email"
          {...emailField}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password"
          {...passwordField}/>
      </div>
      <button type="submit">Log in</button>
    </form>
  )
}

export default form2