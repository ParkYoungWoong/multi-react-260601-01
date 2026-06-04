import { redirect } from 'react-router'

interface Context {
  request: Request
}

export function requiresAuth({ request }: Context) {
  // request.url // 'http://localhost:5173/movies/tt01234567?filter=popular&a=1&b=2#abc'
  const url = new URL(request.url)
  // url.pathname // '/movies/tt01234567'
  // url.query // '?filter=popular&a=1&b=2'
  // url.hash // '#abc'

  const accessToken = localStorage.getItem('accessToken')
  // await 복호화(accessToken)
  return accessToken ? true : redirect(`/signin?redirectTo=${url.pathname}`)
}

export function guestOnly() {
  const accessToken = localStorage.getItem('accessToken')
  return accessToken ? redirect('/') : true
}
