import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './assets/css/font-awesome.css'
import './assets/css/index.css'
import './assets/css/reset.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
            <App />
  </React.StrictMode>,
)
