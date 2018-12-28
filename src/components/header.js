import React from 'react'
import Face from '../images/rightbanner.jpg'
import Nav from '../components/nav.js'

const Header = () => (
  <header className="header" id="top">
    <Nav />
    <div className="header__wrapper wrapper">
      <div className="header__content">
        <h1>
          <span className="header__name">Roy</span>
          <span className="header__name">Hwang</span>
        </h1>
        <p className="header__title">Frontend Developer</p>
      </div>
      <img className="header__image" src={Face} alt="Roy Hwang - Frontend Developer" />
    </div>
  </header>
)

export default Header
