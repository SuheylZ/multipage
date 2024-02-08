import { useEffect } from "react"
import { timer } from "rxjs"


export function useInterval(fn: (idx: number) => void, interval: number, delay: number=0){
  useEffect(() => {
    const subscription = timer(delay, interval).subscribe(evt => {
      try {
        fn(evt)
      } catch (ex) {
        console.error(JSON.stringify(ex))
      }
    })

    return ()=> subscription.unsubscribe()
  })
}

