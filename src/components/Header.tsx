import { NavLink } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/signin', label: 'Sign In' },
  { to: '/movies', label: 'Movies' }
]

export default function Header() {
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
    </header>
  )
}
