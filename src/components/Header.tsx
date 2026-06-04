import { NavLink } from 'react-router'
import { useCountStore } from '@/stores/count'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/signin', label: 'Sign In' },
  { to: '/movies', label: 'Movies' }
]

export default function Header() {
  const count = useCountStore(s => s.count)
  const double = useCountStore(s => s.double)
  return (
    <header>
      {navigations.map(nav => (
        <NavLink
          key={nav.to}
          to={nav.to}
          className={function ({ isActive }) {
            return isActive ? 'text-red-500' : ''
          }}>
          {nav.label}
        </NavLink>
      ))}
      <h2>
        {count} / {double}
      </h2>
    </header>
  )
}
