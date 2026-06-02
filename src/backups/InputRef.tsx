import { useRef, useEffect } from 'react'

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // document.querySelector('input').focus() // ❌
    inputRef.current?.focus()
  }, [])

  return (
    <>
      <input
        ref={inputRef}
        type="text"
      />
      <button>검색</button>
    </>
  )
}
