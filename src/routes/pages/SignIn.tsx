import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'

export default function SignIn() {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const redirectTo = searchParams.get('redirectTo')

  async function signIn() {
    if (id.trim() && pw.trim()) {
      // const { accessToken } = await 로그인서버로전송(id, pw)
      const accessToken =
        'fake-access-token-qwer1234-username-HEROPY-email-thesecon@gmail.com-expired-2026-06-04-12:08:45'
      localStorage.setItem('accessToken', accessToken)
      navigate(redirectTo || '/')
    }
  }

  return (
    <>
      <h1>Sign In!</h1>
      <form
        className="mx-auto flex max-w-[300px] flex-col gap-[10px]"
        onSubmit={e => e.preventDefault()}>
        <TextField
          label="ID"
          placeholder="아이디를 입력하세요"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <TextField
          label="PW"
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={pw}
          onChange={e => setPw(e.target.value)}
        />
        <Button onClick={() => signIn()}>로그인</Button>
      </form>
    </>
  )
}
