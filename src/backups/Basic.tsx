import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  // let count = 0

  function handleClick() {
    const newCount = count + 1
    setCount(newCount)
    console.log(newCount)
  }

  return (
    <>
      <h1
        style={{
          fontSize: `${16 * (count + 1)}px`
        }}
        id="h1"
        className={`h1 ${count > 3 ? 'active' : ''}`}>
        Count: {count}
      </h1>
      <button onClick={() => handleClick()}>증가</button>
    </>
  )
}
