class Person {}
class User extends Person {}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export default function Button({ children, ...restProps }: Props) {
  return <button {...restProps}>{children}</button>
}
