import React from 'react'
import Link from 'gatsby-link'
import Page from '../layouts/page'
import ArtsyVid from '../static/media/artsy.mp4'
import ArtsyIcon from '../images/artsyjpg.jpg'
import CompImg from '../images/macbook.png'

const Artsy = () => (
  <Page projectClass="project-main">
    <article className="article">
      <section className="wrapper">
        <Link className="button button--green" to="/#projects">
          <span>Back</span>
        </Link>
        <h1 className="article__title"><span>Artsy</span></h1>
        <div className="comp-wrapper">
          <div className="comp-figure">
            <img className="comp-img" src={CompImg} alt=""/>
            <video className="comp-video" controls={true} playsInline muted autoPlay loop>
              <source src={ArtsyVid} type="video/mp4" />
              Your browser does not support this video!
            </video>
          </div>
        </div>
      </section>
      <section className="article__content">
        <div className="article__content__container">
          <h2 className="article__content__heading">Artist and Artwork Gallery</h2>
          <h3 className="article__content__tech"><strong>React | Artsy API | Bootstrap | Sass</strong></h3>
          <h3 className="article__content__summary">Concept webpage for an art gallery site. Taps into the Artsy API to display images of historic artwork.</h3>
          <br />
          <ul className="article__content__list">
            <li>Modular and sleek; designed for mobile first.</li>
            <li>Scan and shop through a large compilation of artwork.</li>
            <li>Built with React and Bootstrap.</li>
          </ul>
        </div>
        <div className="article__content__container -center">
          <img src={ArtsyIcon} alt="Artsy Homepage Logo" className="project-icon" />
          <a className="button button--green" href="https://artsyapi.herokuapp.com/" target="_blank" rel="noopener noreferrer"><span>The Site</span></a>
          <a className="button button--green" href="https://github.com/royhhwang/artsyapi" target="_blank" rel="noopener noreferrer"><span>The Repo</span></a>
        </div>
      </section>
    </article>
  </Page>
)

export default Artsy
