import React from 'react'
import ReactDOM from 'react-dom/client'
import {HashRouter } from 'react-router-dom' // İçe aktar
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Hafta-3'teki bu dosya [cite: 758] artık router içeriyor */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
)