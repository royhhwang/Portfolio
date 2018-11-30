import React from 'react'
import Link from 'gatsby-link'
import Page from '../layouts/page'
import MobileVideo from '../static/media/artsymobile.mp4'
import ArtsyVid from '../static/media/artsy.mp4'
import ArtsyIcon from '../images/artsyjpg.jpg'

const Artsy = () => (
  <Page>
    <article className="article">
      <section className="wrapper">
        <Link className="icon-spin"
          to="/#projects"
        >
          <span className="button--green">Back</span>
        </Link>
        <h1 className="article__title"><span>Artsy</span></h1>
        <video className="article__video -mobile" controls={true} playsInline muted autoPlay loop>
          <source src={MobileVideo} type="video/mp4" />
          Your browser does not support this video!
                </video>
        <video className="article__video -desktop" controls={true} playsInline muted autoPlay loop>
          <source src={ArtsyVid} type="video/mp4" />
          Your browser does not support this video!
                </video>
      </section>
      <section className="article__content">
        <container className="article__content__container">
          <h2 className="article__content__heading">Artist and Artwork Gallery</h2>
          <h3 className="article__content__tech"><strong>React | Artsy API | Bootstrap | Sass</strong></h3>
          <h3 className="article__content__summary">Concept webpage for an art gallery site. Taps into the Artsy API to display images of historic artwork.</h3>
          <br />
          <ul className="article__content__list">
            <li>Modular and sleek; designed for mobile first.</li>
            <li>Scan and shop through a large compilation of artwork.</li>
            <li>Built with React and Bootstrap.</li>
          </ul>
        </container>
        <container className="article__content__container -center">
          <img src={ArtsyIcon} alt="Artsy Homepage Logo" className="-icon" />
          <a className="button--social" href="https://artsyapi.herokuapp.com/" target="_blank" rel="noopener noreferrer">The Site</a>
          <a className="button--social" href="https://github.com/royhhwang/artsyapi" target="_blank" rel="noopener noreferrer">The Repo</a>
        </container>
      </section>
    </article>
  </Page>
)

export default Artsy