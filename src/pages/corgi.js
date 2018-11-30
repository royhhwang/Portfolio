import React from 'react'
import Link from 'gatsby-link'
import Page from '../layouts/page'
import CorgiVideo from '../static/media/corgi.mp4'
import CorgiIcon from '../images/corgijpg.jpg'

const Corgi = () => (
  <Page>
    <article className="article">
      <section className="wrapper">
        <Link className="icon-spin"
          to="/#projects"
        >
          <span className="button--green">Back</span>
        </Link>
        <h1 className="article__title"><span>Coding with Corgis</span></h1>
        <video className="article__video" controls={true} playsInline muted autoPlay loop>
          <source src={CorgiVideo} type="video/mp4" />
          Your browser does not support this video!
                </video>
      </section>
      <section className="article__content">
        <container className="article__content__container">
          <h2 className="article__content__heading">Gamifying the Interview Process</h2>
          <h3 className="article__content__tech"><strong>React | Unity 3D | 3ds Max | MERN Stack | HTML5 | CSS3</strong></h3>
          <h3 className="article__content__summary">Simple, yet challenging puzzles test an applicant's problem-solving skills.</h3>
          <br />
          <ul className="article__content__list">
            <li>Game Programmer: Tasked with creation of menus, transitions, and levels.</li>
            <li>Visual Editor: Maintained visual integrity and thematic design aspects.</li>
            <li>UX/UI Designer: Priority on mobile development and scalability.</li>
            <li>Deployed on AWS.</li>
          </ul>
        </container>
        <container className="article__content__container -center">
          <img src={CorgiIcon} alt="Coding with Corgis Logo" className="-icon -circle" />
          <a className="button--social" href="https://royhhwang.itch.io/coding-with-corgis/" target="_blank" rel="noopener noreferrer">The Site</a>
          <a className="button--social" href="https://github.com/royhhwang/CodeWithCorgis" target="_blank" rel="noopener noreferrer">The Repo</a>
        </container>
      </section>
    </article>
  </Page>
)

export default Corgi
