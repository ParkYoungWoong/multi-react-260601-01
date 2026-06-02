interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  children,
  ...restProps
}: Props) {
  const styles = {
    primary: 'text-white bg-blue-400 hover:bg-blue-500',
    secondary: 'text-black bg-gray-400 hover:bg-gray-500',
    danger: 'text-white bg-red-400 hover:bg-red-500'
  }

  return (
    <button
      {...restProps}
      className={`h-[36px] cursor-pointer rounded-md px-[10px] duration-200 ${styles[variant]}`}>
      {children}
    </button>
  )
}
