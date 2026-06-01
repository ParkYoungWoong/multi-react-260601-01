import { useState } from 'react'

export default function App() {
  // const fruits = ['사과', '망고', '바나나']
  const [fruits, setFruits] = useState(['사과', '망고', '바나나'])
  const [text, setText] = useState('')

  return (
    <>
      <h1>과일 리스트</h1>
      <input
        type="text"
        value={text}
        onChange={event => setText(event.target.value)}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            // fruits.unshift(text)
            setFruits([text, ...fruits])
          }
        }}
      />
      <ul>
        {fruits.map(fruit => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </>
  )
}
