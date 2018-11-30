import React from 'react'
import Link from 'gatsby-link'
import Page from '../layouts/page'
import UsagiVideo from '../static/media/usagiwarrior.mp4'
import UsagiIcon from '../images/bunnyonly.png'

const Usagi = () => (
  <Page>
    <article className="article">
      <section className="wrapper">
        <Link className="icon-spin"
          to="/#projects"
        >
          <span className="button--green">Back</span>
        </Link>
        <h1 className="article__title"><span>Usagi Warrior</span></h1>
        <video className="article__video" controls={true} playsInline muted autoPlay loop>
          <source src={UsagiVideo} type="video/mp4" />
          Your browser does not support this video!
                </video>
      </section>
      <section className="article__content">
        <container className="article__content__container">
          <h2 className="article__content__heading">3D Frustrating Platformer</h2>
          <h3 className="article__content__tech"><strong>Unity 3D | 3ds Max | C#</strong></h3>
          <h3 className="article__content__summary">Difficult yet intuitive, Usagi Warrior's gameplay provides extreme highs and lows.</h3>
          <br />
          <ul className="article__content__list">
            <li>Handled development timelines and delegation.</li>
            <li>Responsible for enemy models and behaviors and gameplay states.</li>
            <li>Creation of simple terrain and sky boxes.</li>
            <li>Aimed for simple, precise platforming to encourage sharp judgement and skills.</li>
          </ul>
        </container>
        <container className="article__content__container -center">
          <img src={UsagiIcon} alt="Usagi Warrior character logo" className="-icon -circle" />
          <a className="button--social" href="https://royhhwang.itch.io/usagi-warrior/" target="_blank" rel="noopener noreferrer">The Site</a>
          <a className="button--social" href="https://github.com/royhhwang/Project3-RPG/" target="_blank" rel="noopener noreferrer">The Repo</a>
        </container>
      </section>
    </article>
  </Page>
)

export default Usagi
