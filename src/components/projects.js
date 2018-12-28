import React, { Component } from 'react'
import KnobCreek from '../images/knobcreek.jpeg'
import Artsy from '../images/artsyjpg.jpg'
import Ring from '../images/ring.jpg'
import Corgi from '../images/corgijpg.jpg'
import Usagi from '../images/bunnyonly.png'
import Race from '../images/velocity.png'
import Wombat from '../images/wombatmain.png'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          "name": "Knob Creek",
          "image": KnobCreek,
          "descript": "knobcreek bourbon logo",
          "link": "/knobcreek",
          "tech": "WordPress | Twig | Pantheon | Gulp"
        },
        {
          "name": "Artsy",
          "image": Artsy,
          "descript": "artsy.com logo",
          "link": "/artsy",
          "tech": "React | Artsy API | Bootstrap | Sass"
        },
        {
          "name": "In the Dark",
          "image": Ring,
          "descript": "spooky image of the ring",
          "link": "/inthedark",
          "tech": "React | A-Frame | 3ds Max | Parallax.js"
        },
        {
          "name": "Corgi",
          "image": Corgi,
          "descript": "coding with corgis logo",
          "link": "/corgi",
          "tech": "React | Unity 3D"
        },
        {
          "name": "Usagi",
          "image": Usagi,
          "descript": "usagi warrior game icon",
          "link": "/usagi",
          "tech": "Unity 3D | 3ds Max | C#"
        },
        {
          "name": "Race Painting",
          "image": Race,
          "descript": "race painting icon",
          "link": "/racepainting",
          "tech": "Phaser | Socket.io | MERN Stack"
        },
        {
          "name": "Project Wombat",
          "image": Wombat,
          "descript": "wombat tuxedo logo",
          "link": "/wombat",
          "tech": "MERN Stack | Sass | Gulp | AJAX"
        }
      ]
    }
  }

  render() {
    const projectList = this.state.projects.map((work, index) => (
      <li className="project__item" key={ index }>
        <a className="project__link" href={ work.link }>
          <div className="projects__content">
            <h3 className="projects__content__title">
              { work.name }
            </h3>
            <br />
            <p className="projects__content__subtitle">
              { work.tech }
            </p>
          </div>
          <img className="project__thumbnail" src={ work.image } alt={ work.descript } />
        </a>
      </li>
    ))
    return (
      <section className="projects__wrapper" id="projects">
        <h2 className="section-header">Projects</h2>
        <ul className="projects__list">
          { projectList }
        </ul>
      </section >
    )
  }
}

export default Projects
