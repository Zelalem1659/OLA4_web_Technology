import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/blog', label: 'Blog' },
  { to: '/new-post', label: 'New Post' },
]

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar" aria-label="Main navigation">
      <Link className="brand-link" to="/">
        Storyboard Journal
      </Link>

      <div className="nav-links">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.to

          return (
            <Link
              key={link.to}
              className={`nav-link ${isActive ? 'active' : ''}`}
              to={link.to}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar