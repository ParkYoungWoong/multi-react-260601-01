import { useRef, useEffect } from 'react'
import Button from '@/components/Button'

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
      <Button variant="primary">검색</Button>
      <Button variant="primary">저장</Button>
      <Button variant="secondary">취소</Button>
      <Button variant="danger">삭제</Button>
      <Button>확인</Button>
    </>
  )
}
