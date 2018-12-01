import React from 'react'
import Face from '../images/rightbanner.jpg'

const Header = () => (
  <header className="header" id="top">
    <div className="header__wrapper wrapper">
      <ul className="header__list">
        <li className="header__list__name">Roy</li>
        <li className="header__list__name">Hwang</li>
        <li className="header__list__title">Fullstack Developer</li>
      </ul>
      <img className="header__image" src={Face} alt="Roy Hwang - Fullstack Developer" />
    </div>
  </header>
)

export default Header
