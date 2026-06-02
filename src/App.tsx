import { useRef } from 'react'

export default function App() {
  const inputRef = useRef(null)
  return (
    <>
      <input type="text" />
      <button>검색</button>
    </>
  )
}
