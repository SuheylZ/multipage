import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'




function App(): JSX.Element {
  return <>{"Hello World"}</>
}

ReactDOM.createRoot(document.getElementById('app')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


