import TextField from '@/components/TextField'
import Button from '@/components/Button'

export default function SignIn() {
  return (
    <>
      <h1>Sign In!</h1>
      <form
        className="mx-auto flex max-w-[300px] flex-col gap-[10px]"
        onSubmit={e => e.preventDefault()}>
        <TextField
          label="ID"
          placeholder="아이디를 입력하세요"
        />
        <TextField
          label="PW"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <Button>로그인</Button>
      </form>
    </>
  )
}
