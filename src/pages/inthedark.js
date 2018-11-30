import React from 'react'
import Link from 'gatsby-link'
import Page from '../layouts/page'
import DarkVideo from '../static/media/spooky.mp4'
import DarkIcon from '../images/ring.jpg'

const Dark = () => (
  <Page>
    <article className="article">
      <section className="wrapper">
        <Link className="icon-spin"
          to="/#projects"
        >
          <span className="button--green">Back</span>
        </Link>
        <h1 className="article__title"><span>In the Dark</span></h1>
        <video className="article__video" controls={true} playsInline muted autoPlay loop>
          <source src={DarkVideo} type="video/mp4" />
          Your browser does not support this video!
                </video>
      </section>
      <section className="article__content">
        <container className="article__content__container">
          <h2 className="article__content__heading">Horror Scene Web VR</h2>
          <h3 className="article__content__tech"><strong>React | A-Frame | 3ds Max | Parallax.js | CSS3</strong></h3>
          <h3 className="article__content__summary">In the Dark takes horror game elements and tropes to build a thrilling web experience.</h3>
          <br />
          <ul className="article__content__list">
            <li>Virtual reality scene-building handled through A-Frame.</li>
            <li>Taps into the Internet Game Database's API to return horror game suggestions.</li>
            <li>Parallax.js adds movement and atmosphere to the world.</li>
            <li>3D models touched-up through 3ds Max.</li>
          </ul>
        </container>
        <container className="article__content__container -center">
          <img src={DarkIcon} alt="In the Dark Ring Logo" className="-icon -circle" />
          <a className="button--social" href="https://royhhwang.github.io/inthedark/?" target="_blank" rel="noopener noreferrer">The Site</a>
          <a className="button--social" href="https://github.com/royhhwang/inthedark/" target="_blank" rel="noopener noreferrer">The Repo</a>
        </container>
      </section>
    </article>
  </Page>
)

export default Dark
