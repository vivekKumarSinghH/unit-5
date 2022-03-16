import { useState, useEffect } from 'react'

export const StopWatch = ({end,start}) => {
     const [timer, setTimer] = useState(+start)

  useEffect(() => {
    let id = setInterval(() => {
      setTimer((prev) => {
        if (prev === (+end)) {
          clearInterval(id)
          return 0}
        return prev + 1 })}, 1000)
    return () => {
      clearInterval(id)
      console.log('Unmounter Timer')
    }}, [])
 return <div>Timer: {timer}</div>
}
