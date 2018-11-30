import React from 'react'
import Link from 'gatsby-link'
import Page from '../layouts/page'
import WombatVideo from '../static/media/wombat.mp4'
import WombatIcon from '../images/wombatmain.png'

const Wombat = () => (
  <Page>
    <article className="article">
      <section className="wrapper">
        <Link className="icon-spin"
          to="/#projects"
        >
          <span className="button--green">Back</span>
        </Link>
        <h1 className="article__title"><span>Project Wombat</span></h1>
        <video className="article__video" controls={true} playsInline muted autoPlay loop>
          <source src={WombatVideo} type="video/mp4" />
          Your browser does not support this video!
                </video>
      </section>
      <section className="article__content">
        <container className="article__content__container">
          <h2 className="article__content__heading">Location-based Statistics</h2>
          <h3 className="article__content__tech"><strong>MERN Stack | Sass | Gulp | AJAX</strong></h3>
          <h3 className="article__content__summary">Combines Google Maps with the BLS API to create an interactive map of employment data.</h3>
          <br />
          <ul className="article__content__list">
            <li>Modularized search for high employment rates across Southern California.</li>
            <li>Removes the tedium of scouring government websites.</li>
            <li>Built with the MERN stack, Sass, and Gulp.</li>
          </ul>
        </container>
        <container className="article__content__container -center">
          <img src={WombatIcon} alt="Project Wombat Logo" className="-icon -circle" />
          <a className="button--social" href="https://github.com/W0mb4t/WombatPower" target="_blank" rel="noopener noreferrer">The Repo</a>
        </container>
      </section>
    </article>
  </Page>
)

export default Wombat
