import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {Routes,Route} from 'react-router-dom'

import { Verify,Information,Signup,Profile } from './components';
import{ BrowserRouter as Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
    <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/Verify" element={<Verify/>}/>
    <Route path="/Information" element={<Information/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    </Routes>
    </Router>
  </React.StrictMode>,
)
