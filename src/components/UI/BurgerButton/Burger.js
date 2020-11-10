import React from 'react'

const burger = props => {
  
  const toggle = () => {
    const icon = document.getElementById("burger-icon")
    icon.classList.toggle('open')
  }
  
  return(
    <div id="burger-icon" onClick={() => toggle()}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default burger