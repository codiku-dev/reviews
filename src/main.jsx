import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// rlebhar: Attention strict mode les useEffect run 2 fois
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
