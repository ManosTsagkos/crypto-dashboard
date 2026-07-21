import React from 'react'
import ReactDOM from 'react-dom/client'
import RootProviders from './RootProviders'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootProviders />
  </React.StrictMode>,
)
