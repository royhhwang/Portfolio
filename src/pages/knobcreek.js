import React from 'react'
import Link from 'gatsby-link'
import Page from '../layouts/page'
import KnobVid from '../static/media/barrel.mp4'
import KnobIcon from '../images/knobcreek.jpeg'

const KnobCreek = () => (
  <Page>
    <article className="article">
      <section className="wrapper">
        <Link className="icon-spin"
          to="/#projects"
        >
          <span className="button--green">Back</span>
        </Link>
        <h1 className="article__title"><span>Knob Creek</span></h1>
        <video className="article__video" controls={true} playsInline muted autoPlay loop>
          <source src={KnobVid} type="video/mp4" />
          Your browser does not support this video!
                </video>
      </section>
      <section className="article__content">
        <container className="article__content__container">
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
        </container>
        <container className="article__content__container -center">
          <img src={KnobIcon} alt="KnobCreek Logo" className="-icon -circle" />
          <a className="button--social" href="http://dev-rh-barrel.pantheonsite.io" target="_blank" rel="noopener noreferrer">The Site</a>
          <a className="button--social" href="https://github.com/royhhwang/rh-barrel-test" target="_blank" rel="noopener noreferrer">The Repo</a>
        </container>
      </section>
    </article>
  </Page>
)

export default KnobCreek
