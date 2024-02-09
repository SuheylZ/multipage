import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { useEvent, useInterval } from '../../hooks'

function Index() {
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
      {"Main Page"}
    </>
  )
}

export default Index

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
)
