import React from 'react'
import Link from 'gatsby-link'

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__link">
        <Link to="/">
          Home
        </Link>
      </li>
      <li className="nav__link">
        <Link to="/#projects">
          Projects
        </Link>
      </li>
      <li className="nav__link">
        <Link to="/#about">
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default Nav
