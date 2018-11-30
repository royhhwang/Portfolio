import React from 'react'
import Link from 'gatsby-link'

const Nav = () => (
  <nav className="nav">
    <Link className="nav__list"
      to="/"
    >
      Home
        </Link>
    <Link className="nav__list"
      to="/#projects"
    >
      Projects
        </Link>
    <Link className="nav__list"
      to="/#about"
    >
      About
        </Link>
  </nav>
)

export default Nav
