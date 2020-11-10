//Handling lots of fields
// does not scale as the form grows
import React, { useState} from 'react'

const useFormFields = initialState => {
  const [formFields, setFormFields] = useState(initialState)

  const createChangeHandler = key => (e,) => {
    const value = e.target.value
    setFormFields(prev => ({...prev, [key]: value}))
  }
  return {formFields, createChangeHandler}
}

const form3 = () => {
  const {formFields, createChangeHandler} = useFormFields({
    email: "",
    password: ""
  })

  const handleSubmit = e => {
    e.preventDefault();
    alert(`email : ${formFields.email} and password: ${formFields.password}`)
  }

  return(
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="email">Email</label>
        <input 
         type="email"
         id="email"
         value={formFields.email}
         onChange={createChangeHandler("email")}
         />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input 
          type="password"
          id="password"
          value={formFields.password}
          onChange={createChangeHandler("password")}
          />
      </div>
      <button type="submit">Log in</button>
      <i>Link to the <a href="" target="_blank">Code</a></i>
    </form>
  )
}

export default form3