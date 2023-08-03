import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './Components/Header/Header'
import { Body } from './Components/Body/Body'
import "./main.css"


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
  <Header/>
  <div className='fondin'>
      <Body/>
  </div>

  </React.StrictMode>,
)
