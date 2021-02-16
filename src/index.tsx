import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link } from 'react-router-dom'
import { Routes } from 'core/routes'
import './index.css'

import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">My favorites</Link>
          </li>
        </ul>
      </nav>
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
