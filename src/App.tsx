import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  // let count = 0

  function handleClick() {
    setCount(count + 1)
    console.log(count)
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => handleClick()}>증가</button>
    </>
  )
}
