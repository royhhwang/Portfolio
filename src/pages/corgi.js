import React from 'react'
import Link from 'gatsby-link'
import Page from '../layouts/page'
import CorgiVideo from '../static/media/corgi.mp4'
import CorgiIcon from '../images/corgijpg.jpg'
import CompImg from '../images/macbook.png'

const Corgi = () => (
  <Page projectClass="project-main">
    <article className="article">
      <section className="wrapper">
        <Link className="button button--green" to="/#projects">
          <span>Back</span>
        </Link>
        <h1 className="article__title"><span>Coding with Corgis</span></h1>
        <div className="comp-wrapper">
          <div className="comp-figure">
            <img className="comp-img" src={CompImg} alt=""/>
            <video className="comp-video" controls={true} playsInline muted autoPlay loop>
              <source src={CorgiVideo} type="video/mp4" />
              Your browser does not support this video!
            </video>
          </div>
        </div>
      </section>
      <section className="article__content">
        <div className="article__content__container">
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
        </div>
        <div className="article__content__container -center">
          <img src={CorgiIcon} alt="Coding with Corgis Logo" className="project-icon" />
          <a className="button button--green" href="https://royhhwang.itch.io/coding-with-corgis/" target="_blank" rel="noopener noreferrer"><span>The Site</span></a>
          <a className="button button--green" href="https://github.com/royhhwang/CodeWithCorgis" target="_blank" rel="noopener noreferrer"><span>The Repo</span></a>
        </div>
      </section>
    </article>
  </Page>
)

export default Corgi
