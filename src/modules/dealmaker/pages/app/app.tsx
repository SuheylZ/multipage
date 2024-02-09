import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'




export function App(): JSX.Element {
  return <>{"Deal Maker"}</>
}

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


