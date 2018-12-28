import React from 'react'
import Link from 'gatsby-link'
import Page from '../layouts/page'
import RaceVideo from '../static/media/racevelocity.mp4'
import RaceIcon from '../images/taiyaki.png'
import CompImg from '../images/macbook.png'

const Race = () => (
  <Page projectClass="project-main">
    <article className="article">
      <section className="wrapper">
        <Link className="button button--green" to="/#projects">
          <span>Back</span>
        </Link>
        <h1 className="article__title"><span>Race Painting</span></h1>
        <div className="comp-wrapper">
          <div className="comp-figure">
            <img className="comp-img" src={CompImg} alt=""/>
            <video className="comp-video -race" controls={true} playsInline muted autoPlay loop>
              <source src={RaceVideo} type="video/mp4" />
              Your browser does not support this video!
            </video>
          </div>
        </div>
      </section>
      <section className="article__content">
        <div className="article__content__container">
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
        </div>
        <div className="article__content__container -center">
          <img src={RaceIcon} alt="Race Painting Logo" className="project-icon" />
          <a className="button button--green" href="https://race-painting.herokuapp.com/" target="_blank" rel="noopener noreferrer"><span>The Site</span></a>
          <a className="button button--green" href="https://github.com/Ta1yak1/Race-Paint" target="_blank" rel="noopener noreferrer"><span>The Repo</span></a>
        </div>
      </section>
    </article>
  </Page>
)

export default Race
