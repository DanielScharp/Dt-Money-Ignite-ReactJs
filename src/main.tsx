import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'

// O ponto de exclamação ! é uma forma de dizer ao TypeScript que o valor não é nulo
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
