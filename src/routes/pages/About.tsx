import { useCountStore } from '@/stores/count'

export default function About() {
  const count = useCountStore(s => s.count)
  const double = useCountStore(s => s.double)
  const increase = useCountStore(s => s.increase)
  return (
    <>
      <h1>About!</h1>
      <h2>
        {count} / {double}
      </h2>
      <button onClick={() => increase()}>증가</button>
    </>
  )
}
