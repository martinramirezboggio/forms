import React from 'react'
import Burger from '../UI/BurgerButton/Burger'
import { NavLink } from 'react-router-dom'

const activeLink = {color: '#d3531a'}

const Header = () => (
  <header className="header">
    {/* <Burger /> */}
    <nav>
      <ul>
        <li><NavLink to="/" exact activeStyle={activeLink}>Form 1</NavLink></li>
        <li><NavLink to="/form2" activeStyle={activeLink}>Form 2</NavLink></li>
        <li><NavLink to="/form3" activeStyle={activeLink}>Form 3</NavLink></li>
        <li><NavLink to="/form4" activeStyle={activeLink}>Form 4</NavLink></li>
      </ul>
    </nav>
  </header>
  
)

export default Header