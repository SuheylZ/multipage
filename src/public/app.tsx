import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import '../index.css'
import { useEvent, useInterval } from '../hooks'

function App() {
  const [count, setCount] = useState(0)

  useEvent("online", (evt: Event) => {
    console.log(`now online, ${evt.target}`)
  })

  useEvent("offline", (evt: Event) => {
    console.log(`now offline, ${evt.target}`)
  })

  useInterval((x: number) => {
    console.log(`${x}`)
  }, 1000)

  return (
    <>
      <div>
        <a href="./page2/index.html">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
