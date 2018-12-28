import React from 'react'
import Link from 'gatsby-link'
import Page from '../layouts/page'
import KnobVid from '../static/media/barrel.mp4'
import KnobIcon from '../images/knobcreek.jpeg'
import CompImg from '../images/macbook.png'

const KnobCreek = () => (
  <Page projectClass="project-main">
    <article className="article">
      <section className="wrapper">
        <Link className="button button--green" to="/#projects">
          <span>Back</span>
        </Link>
        <h1 className="article__title"><span>Knob Creek</span></h1>
        <div className="comp-wrapper">
          <div className="comp-figure">
            <img className="comp-img" src={CompImg} alt=""/>
            <video className="comp-video" controls={true} playsInline muted autoPlay loop>
              <source src={KnobVid} type="video/mp4" />
              Your browser does not support this video!
            </video>
          </div>
        </div>

      </section>
      <section className="article__content">
        <div className="article__content__container">
          <h2 className="article__content__heading">Building with Static Templates</h2>
          <h3 className="article__content__tech"><strong>WORDPRESS | TWIG/TIMBER | PANTHEON | GULP</strong></h3>
          <h3 className="article__content__summary">A recreation of Knob Creek's front page.</h3>
          <br />
          <ul className="article__content__list">
            <li>WordPress and WordPress custom themes created.</li>
            <li>Panteon.io used for deployment.</li>
            <li>PHP and Twig/Timber plugin used to dynamically create from posts.</li>
            <li>BEM CSS and semantic HTML.</li>
            <li>Best practices for modular, responsive, readable code.</li>
          </ul>
        </div>
        <div className="article__content__container -center">
          <img src={KnobIcon} alt="KnobCreek Logo" className="project-icon" />
          <a className="button button--green" href="http://dev-rh-barrel.pantheonsite.io" target="_blank" rel="noopener noreferrer"><span>The Site</span></a>
          <a className="button button--green" href="https://github.com/royhhwang/rh-barrel-test" target="_blank" rel="noopener noreferrer"><span>The Repo</span></a>
        </div>
      </section>
    </article>
  </Page>
)

export default KnobCreek
