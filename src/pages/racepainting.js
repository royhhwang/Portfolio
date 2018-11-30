import React from 'react'
import Link from 'gatsby-link'
import Page from '../layouts/page'
import RaceVideo from '../static/media/racevelocity.mp4'
import RaceIcon from '../images/taiyaki.png'

const Race = () => (
  <Page>
    <article className="article">
      <section className="wrapper">
        <Link className="icon-spin"
          to="/#projects"
        >
          <span className="button--green">Back</span>
        </Link>
        <h1 className="article__title"><span>Race Painting</span></h1>
        <video className="article__video" controls={true} playsInline muted autoPlay loop>
          <source src={RaceVideo} type="video/mp4" />
          Your browser does not support this video!
                </video>
      </section>
      <section className="article__content">
        <container className="article__content__container">
          <h2 className="article__content__heading">Collaborative Racer</h2>
          <h3 className="article__content__tech"><strong>Phaser | Socket.io | MERN Stack</strong></h3>
          <h3 className="article__content__summary">Race Painting is as simple as its name. Grab a friend and paint away!</h3>
          <br />
          <ul className="article__content__list">
            <li>Responsible for canvassing and car physics rendering.</li>
            <li>Handled paint trails and Socket.io location updates.</li>
            <li>Smooth gameplay with reactive community map.</li>
            <li>Socket.io in conjunction with Phaser allows for multiplayer functionality.</li>
            <li>MySQL database handles local saves for maps and player position.</li>
          </ul>
        </container>
        <container className="article__content__container -center">
          <img src={RaceIcon} alt="Race Painting Logo" className="-icon -circle" />
          <a className="button--social" href="https://race-painting.herokuapp.com/" target="_blank" rel="noopener noreferrer">The Site</a>
          <a className="button--social" href="https://github.com/Ta1yak1/Race-Paint" target="_blank" rel="noopener noreferrer">The Repo</a>
        </container>
      </section>
    </article>
  </Page>
)

export default Race
