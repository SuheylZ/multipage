import { useEffect } from "react"
import {  fromEvent } from "rxjs"

export function useEvent(event: string, handler : (evt: Event)=>void) {
  useEffect(() => {
    const subscription = fromEvent(window, event).subscribe(evt => {
      evt.preventDefault()
      try {
        handler(evt)
      }
      catch (ex) {
        console.error(JSON.stringify(ex))
      }
    })
      
   return ()=> subscription.unsubscribe()
  }, [event, handler])
}