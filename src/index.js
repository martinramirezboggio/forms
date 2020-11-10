import React from 'react'
import ReactDOM from 'react-dom';
import App from './app'
import { BrowserRouter } from 'react-router-dom'
import './main.css'

const app = (
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

ReactDOM.render(app, document.getElementById('root'));
